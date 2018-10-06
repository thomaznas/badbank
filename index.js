//Date, currency and table format
var dateFormat = require('dateformat');
var currencyFormatter = require('currency-formatter');
var tabular = require('tabular-json');

function toMoney(num) {
    return currencyFormatter.format(num, { code: 'USD' });
}

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

// setup server
// YOUR CODE
var express = require('express');
var app = express();

// setup directory used to serve static files
// YOUR CODE
app.use(express.static('public'));

// setup data store
// YOUR CODE
var low = require('lowdb');
var fs = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db = low(adapter);

// required data store structure
// YOUR CODE
// init the data store
db.defaults({ 
                accounts:[
/*                 {name        : '',
                    email       : '',
                    balance     : 0,
                    password    : '',
                    transactions: []} */
                ] 
            }
           )   
           .write();


app.get('/account/create/:name/:email/:password', function (req, res) {

    // YOUR CODE
    // Create account route
    // return success or failure string

    // Check if name already exists
    var account;
    var msg;

    account = db.get('accounts').find({ name: req.params.name }).value();
    if (!isEmpty(account)) {
        msg = "FAILURE: An account with this NAME already exists !";
        console.log(msg);
        res.send(msg);
        return;
    }

    account = db.get('accounts').find({ email: req.params.email }).value();
    if (!isEmpty(account)) {
        msg = "FAILURE: An account with this EMAIL already exists !";
        console.log(msg);
        res.send(msg);
        return;
    }

    account = {
        "name"          : req.params.name,
        "email"         : req.params.email,
        "balance"       : 0,
        "password"      : req.params.password,
        "transactions"  : null
    };
    db.get('accounts').push(account).write();
    msg = "SUCCESS: Account " + req.params.name + " was created!";
    console.log(msg);   
    res.send(msg);

});

app.get('/account/login/:email/:password', function (req, res) {

    // YOUR CODE
    // Login user - confirm credentials
    // If success, return account object    
    // If fail, return null
    // YOUR CODE
    // Create account route
    // return success or failure string

    // Check if name already exists
    var account = db.get('accounts').find({ email: req.params.email }).value();
    var msg;

    if (isEmpty(account)) {
        msg = "FAILURE: This account does NOT exists !";
    }
    else {
        if (req.params.password != account.password) {
            msg = "FAILURE: Invalid password !";
        }    
        else {
            msg = "SUCCESS: " + account.name + " is now logged in.";
        }
    }    
    console.log(msg);
    res.send(msg);
    return;

});

app.get('/account/getbalance/:email', function (req, res) {

    // YOUR CODE
    // Return account based on email
    // Check if name already exists
    var account = db.get('accounts').find({ email: req.params.email }).value();
    var msg;

    if (isEmpty(account)) {
            msg = "FAILURE: This account does NOT exists !";
    }
    else {
        msg = "SUCCESS: Account " + account.name + "'s balance is " + toMoney(account.balance);
    }

    console.log(msg);
    res.send(msg);
    return;
});

app.get('/account/deposit/:email/:description/:amount', function (req, res) {

    // YOUR CODE
    // Deposit amount for email
    // return success or failure string
    // Check if name already exists
    var account = db.get('accounts').find({ email: req.params.email }).value();
    var amount,datetime,description;
    var msg;

    if ( isEmpty(account)) {
            msg = "FAILURE: This account does NOT exists !";
        console.log(msg);
        res.send(msg);
        return;
    }
    
    amount = Number(req.params.amount);
    if (isNaN(amount)) {
        msg = "FAILURE: Amount needs to be a valid number !";
        console.log(msg);
        res.send(msg);
        return;
    }

    if (amount <=0) {
        msg = "FAILURE: Amount needs to be greater than zero !";
        console.log(msg);
        res.send(msg);
        return;
    }

    description = req.params.description;
    account.balance += amount; 
    datetime = new Date();
    datetime = dateFormat(datetime, "yyyy-mm-dd, h:MM:ss TT");
    if ( isEmpty(account.transactions)) {
        account.transactions = Array({DataTime: datetime , Description: description, Amount: toMoney(amount)});
    } 
    else {
        account.transactions.push({DataTime: datetime , Description: description, Amount: toMoney(amount)});
    }
    db.write();
    msg = "SUCCESS: In "+ datetime + ", account " + account.name + " was credited in " + toMoney(amount) +" and its total balance is " + toMoney(account.balance) + ".";
    console.log(msg);
    res.send(msg);
    return;
});

app.get('/account/withdraw/:email/:description/:amount', function (req, res) {

    // YOUR CODE
    // Withdraw amount for email
    // return success or failure string
    // Check if name already exists
    var account = db.get('accounts').find({ email: req.params.email }).value();
    var amount,datetime,description;
    var msg;

    if ( isEmpty(account)) {
        msg = "FAILURE: This account does NOT exists !";
        console.log(msg);
        res.send(msg);
        return;
    }

    amount = Number(req.params.amount);
    if (isNaN(amount)) {
        msg = "FAILURE: Amount needs to be a valid number !";
        console.log(msg);
        res.send(msg);
        return;
    }

    if (amount <=0) {
        msg = "FAILURE: Amount needs to be greater than zero !";
        console.log(msg);
        res.send(msg);
        return;
    }

    if (account.balance < amount) {
        msg = "FAILURE: Withdraw amount EXCEEDS your funds !";
        console.log(msg);
        res.send(msg);
        return;
    }

    description = req.params.description;
    amount = amount * -1;
    account.balance += amount; 
    datetime = new Date();
    datetime = dateFormat(datetime, "yyyy-mm-dd, h:MM:ss TT");
    if ( isEmpty(account.transactions)) {
            account.transactions = Array({DataTime: datetime , Description: description, Amount: toMoney(amount)});
    } 
    else {
        account.transactions.push({DataTime: datetime , Description: description, Amount: toMoney(amount)});
    }
    db.write();
    msg = "SUCCESS: In "+ datetime + ", account " + account.name + " was debited in " + toMoney(amount) +" and its total balance is " + toMoney(account.balance) + ".";
    console.log(msg);
    res.send(msg);
    return;

});

function transactionsTablify(transactions) {
    var html;
    var opts = {
        dot: "/",
        separator: '  ',
        dateFormatter: function(date) {return dateFormat(date, "yyyy-mm-dd, h:MM:ss TT");},
        sort: [],
        classes: {table: "table table-striped table-bordered"}
      };
       
    html = tabular.html(transactions, opts);
    
    return html;
}

app.get('/account/transactions/:email', function (req, res) {

    // YOUR CODE
    // Return all transactions for account

    // YOUR CODE
    // Return account based on email
    // Check if name already exists
    var account = db.get('accounts').find({ email: req.params.email }).value();
    var msg,msgTransactions;

    if (isEmpty(account)) {
        msg = "FAILURE: This account does NOT exists !";
    }
    else {
        if ( isEmpty(account.transactions)) {
            msgTransactions = '<br>'+ "No transactions found";
        }
        else {
            // msgTransactions = '\n'+ JSON.stringify(account.transactions);  
            msgTransactions = transactionsTablify(account.transactions);
        }
    }

    msg = "SUCCESS: Account " + account.name + "'s transactions are listed below " + msgTransactions;
    console.log(msg);
    res.send(msg);
    return;

});

function allDataTablify(accounts) {
    var accountLength,transactionLength;
    var html = "";
    
    accountLength = accounts.length;
    for (var i=0; i < accountLength; i++) {
        html += '<br>' + JSON.stringify(accounts[i].name) + " " + JSON.stringify(accounts[i].email)+ " " + JSON.stringify(accounts[i].password);
        if ( ! isEmpty(accounts[i].transactions)) {
            transactionLength = accounts[i].transactions.length;
            for (var j=0; j < transactionLength; j++) {
                html += '<br>' + "    "+ JSON.stringify(accounts[i].transactions[j]);
            }
        }
    }

    return html;

}

app.get('/account/all', function (req, res) {

    // YOUR CODE
    // Return data for all accounts
    // Check if name already exists
    var accounts = db.get('accounts').value();
    var msg,msgAccounts;

    if (isEmpty(accounts)) {
        msgAccounts = '\n'+ "No accounts found";
    }
    else {
        msgAccounts = '\n'+ allDataTablify(accounts);  
    }

    msg = "SUCCESS: All data " + msgAccounts;
    console.log(msg);
    res.send(msg);
    return;

});

app.listen(8080,function () { 
    console.log('Fiat bank (bad bank) http server is ready at 8080')
});

