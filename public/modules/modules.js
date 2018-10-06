var ui = {};

// Variables that keep the current login
var loggedInEmail = "";

ui.navigation = `
    <!-- ------------- YOUR CODE: Navigation UI ------------- --> 
  <a class="navbar-brand" href="#" onclick="defaultModule();">
    <img src="/badbank_icon.png" width="50" height="50" class="d-inline-block align-center" alt=""  >
     Fiat Bad Bank</a>
 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   <span class="navbar-toggler-icon"></span>
 </button>

 <div class="collapse navbar-collapse" id="navbarSupportedContent">
   <ul class="navbar-nav mr-auto">
     <li class="nav-item active">
       <a class="nav-link" href="#" onclick="loadCreateAccountParam();">Create Account <!--<span class="sr-only">(current)</span> --> </a>
     </li>
     <li class="nav-item active">
       <a class="nav-link" href="#" onclick="loadLoginParam();">Login</a>
     </li>
     <li class="nav-item active">
       <a class="nav-link" href="#" onclick="loadLogoutParam();">Logout</a>
     </li>
     <li class="nav-item active">
       <a class="nav-link" href="#" onclick="loadDepositParam();">Deposit</a>
     </li>
     <li class="nav-item active">
       <a class="nav-link" href="#" onclick="loadWithdrawParam();">Withdraw</a>
     </li>
     <li class="nav-item active">
       <a class="nav-link" href="#" onclick="loadTransactionsParam();">Transactions</a>
     </li>
     <li class="nav-item active">
       <a class="nav-link" href="#" onclick="loadBalanceParam();">Balance</a>
     </li>
     <li class="nav-item active">
       <a class="nav-link" href="#" onclick="loadAllDataParam();">All Data</a>
     </li>
     <!-- <li class="nav-item dropdown">
       <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Dropdown
       </a>
       <div class="dropdown-menu" aria-labelledby="navbarDropdown">
         <a class="dropdown-item" href="#">Action</a>
         <a class="dropdown-item" href="#">Another action</a>
         <div class="dropdown-divider"></div>
         <a class="dropdown-item" href="#">Something else here</a>
       </div>
     </li>
     <li class="nav-item">
       <a class="nav-link disabled" href="#">Disabled</a>
     </li> -->
   </ul>
   <form class="form-inline my-2 my-lg-0">
      <div class="card bg-light mb-3" style="max-width: 22rem;" id="loggedin" >  </div>
    </form>
 </div>

 `;

ui.createAccount =  function (isResultMsg,msg) {

    var innerHTML,conditionalHTML;

    if (isResultMsg) {
        conditionalHTML = msg;
    } else {
        conditionalHTML = `
        Name: <br> <input type="input" id="addName" placeholder="" > <br>
        Email: <br> <input type="input" id="addEmail" placeholder="" >  <br>
        Password: <br> <input type="password" id="addPassword" placeholder="" >  <br>
        Re-type your Password: <br> <input type="password" id="addPassword2" placeholder="" >  <br><br>
        <button type="button" class="btn btn-info" onclick="loadCreateAccount()">Add Account</button>
        `;
    }
        
    innerHTML =`
    <!-- ------------- YOUR CODE: Create Account UI ------------- --> 
    <div class="card-header">Fiat Bad Bank Create Account </div>
    <div class="card-body">
    ` +
    conditionalHTML
    + `
    </div>
    `;
    return innerHTML;
}

ui.login=  function (isResultMsg,msg) {
    var innerHTML,conditionalHTML;

    var innerHTML,conditionalHTML;

    if (isResultMsg) {
        conditionalHTML = msg;
    } else {
        conditionalHTML = `
        Email: <br> <input type="input" id="loginEmail" value="" >  <br>
        Password: <br> <input type="password" id="loginPassword" value="" >  <br><br>
        <button type="button" class="btn btn-info" onclick="loadLogin()">Log in</button>
        `;
    }
        
    innerHTML =`
    <!-- ------------- YOUR CODE: Create Account UI ------------- --> 
    <div class="card-header">Fiat Bad Bank Login </div>
    <div class="card-body">
    ` +
    conditionalHTML
    + `
    </div>
    `;
    return innerHTML;
}

ui.logout=  function (isResultMsg,msg) {
    var innerHTML,conditionalHTML;

    var innerHTML,conditionalHTML;

    conditionalHTML = msg;

    innerHTML =`
    <!-- ------------- YOUR CODE: Logout UI ------------- --> 
    <div class="card-header">Fiat Bad Bank Logout </div>
    <div class="card-body">
    ` +
    conditionalHTML
    + `
    </div>
    `;
    return innerHTML;
}

ui.deposit =  function (isResultMsg,msg) {
    var innerHTML,conditionalHTML;

    var innerHTML,conditionalHTML;

    if (isResultMsg) {
        conditionalHTML = msg;
    } else {
        conditionalHTML = `
        Description: <br> <input type="input" id="depositDescription" value="" >  <br>
        Amount: <br> <input type="number" step="0.01" id="depositAmount" value="" >  <br>
        <br> <button type="button" class="btn btn-info" onclick="loadDeposit()">Deposit</button>
        `;
    }
        
    innerHTML =`
    <!-- ------------- YOUR CODE: Deposit UI  ------------- --> 
    <div class="card-header">Fiat Bad Bank Deposit </div>
    <div class="card-body">
    ` +
    conditionalHTML
    + `
    </div>
    `;
    return innerHTML;
}

ui.withdraw  =  function (isResultMsg,msg) {
    var innerHTML,conditionalHTML;

    var innerHTML,conditionalHTML;

    if (isResultMsg) {
        conditionalHTML = msg;
    } else {
        conditionalHTML = `
        Description: <br> <input type="input" id="withdrawDescription" value="" >  <br>
        Amount: <br> <input type="number" step="0.01" id="withdrawAmount" value="" >  <br>
        <br> <button type="button" class="btn btn-info" onclick="loadWithdraw()">Withdraw</button>
        `;
    }
        
    innerHTML =`
    <!-- ------------- YOUR CODE: Withdraw UI  ------------- --> 
    <div class="card-header">Fiat Bad Bank Withdraw </div>
    <div class="card-body">
    ` +
    conditionalHTML
    + `
    </div>
    `;
    return innerHTML;
}

ui.transactions =  function (isResultMsg,msg) {
    var innerHTML,conditionalHTML;

    var innerHTML,conditionalHTML;

    conditionalHTML = msg;

    innerHTML =`
    <!-- ------------- YOUR CODE: Transactions UI ------------- --> 
    <div class="card-header">Fiat Bad Bank Transactions </div>
    <div class="card-body">
    ` +
    conditionalHTML
    + `
    </div>
    `;
    return innerHTML;
}

ui.balance =  function (isResultMsg,msg) {
    var innerHTML,conditionalHTML;

    var innerHTML,conditionalHTML;

    conditionalHTML = msg;

    innerHTML =`
    <!-- ------------- YOUR CODE: Balance UI ------------- --> 
    <div class="card-header">Fiat Bad Bank Balance </div>
    <div class="card-body">
    ` +
    conditionalHTML
    + `
    </div>
    `;
    return innerHTML;
}

ui.default = `
    <!-- ------------- YOUR CODE: Default UI ------------- --> 
    <div class="card-header">Fiat Bad Bank Home </div>
    <div class="card-body">
      <h5 class="card-title">Welcome ! Use at your own risk</h5>
      <img src="/badbank_icon.png" width="400" height="400" class="d-inline-block align-center" alt="">
    </div>
`;

ui.allData =  function (isResultMsg,msg) {
    var innerHTML,conditionalHTML;

    var innerHTML,conditionalHTML;

    conditionalHTML = msg;

    innerHTML =`
    <!-- ------------- YOUR CODE: All data UI ------------- --> 
    <div class="card-header">Fiat Bad Bank All Accounts </div>
    <div class="card-body">
    ` +
    conditionalHTML
    + `
    </div>
    `;
    return innerHTML;
}

var target     = document.getElementById('target');
var navigation = document.getElementById('navigation');
navigation.innerHTML += ui.navigation;

var loadCreateAccountParam = function() {
    var isResultMsg = 0; // it is not a result msg, therefore load the parameters HTML
    var obj = document.getElementById('loggedin');
    obj.innerHTML = "";
    loggedInEmail = "";
    target.innerHTML = ui.createAccount(isResultMsg,"");
}


var loadCreateAccount = function(){
    var isResultMsg = 1; // it is not a result msg, therefore load the result HTML
    var name = document.getElementById('addName').value;
    var email = document.getElementById('addEmail').value;
    var password = document.getElementById('addPassword').value;
    var passwordReType = document.getElementById('addPassword2').value;
    var url = "";
    var loggedin;

    if ((name == "") || (email == "") || (password == "") || (passwordReType == "")) {
        alert("Required parameters can not be blank !");
        return;
    }
    
    if ((password != passwordReType)) {
        alert("Passwords do NOT match !");
        return;
    }
    
    name = name.toUpperCase();
    email = email.toUpperCase();
    url = '/account/create/' + name + '/' + email + '/' + password;
    
    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
            }
            else{
                console.log(res);
                target.innerHTML = ui.createAccount(isResultMsg,res.text);
            }

        });  
};

var loadLoginParam = function() {
    var isResultMsg = 0; // it is not a result msg, therefore load the parameters HTML
    target.innerHTML = ui.login(isResultMsg,"");
}

var loadLogin = function(){
    var isResultMsg = 1; // it is not a result msg, therefore load the result HTML
    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;
    var url = "";

    if  ((email == "") || (password == "")) {
        alert("Required parameters can not be blank !");
        return;
    }
    
    name = name.toUpperCase();
    email = email.toUpperCase();
    url = '/account/login/' + email + '/' + password;

    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
            }
            else{
                console.log(res);
                target.innerHTML = ui.createAccount(isResultMsg,res.text);
                if ( res.text.includes("SUCCESS") ) {
                    loggedInEmail = email;
                    var obj = document.getElementById('loggedin');
                    obj.innerHTML = email + " logged in";
                }            
            }

        });
};

var loadLogoutParam = function() {
    var isResultMsg = 0; // it is not a result msg, therefore load the parameters HTML, if fact in this case this parameter doesn't matter
    if (loggedInEmail == "") {
        alert("You must be logged in to perform this operation !");
        return;
    }
    var msg = "SUCCESS: " + loggedInEmail + " is logged out";
    var obj = document.getElementById('loggedin');
    obj.innerHTML = "";
    loggedInEmail = "";
    target.innerHTML = ui.logout(isResultMsg,msg);
}

var loadDepositParam = function()  {
    var isResultMsg = 0; // it is not a result msg, therefore load the parameters HTML
    if (loggedInEmail == "") {
        alert("You must be logged in to perform this operation !");
        return;
    }
    target.innerHTML = ui.deposit(isResultMsg,"");
}

var loadDeposit = function(){
    var isResultMsg = 1; // it is not a result msg, therefore load the result HTML
    var email = loggedInEmail;
    var description = document.getElementById('depositDescription').value;
    var amount = Number(document.getElementById('depositAmount').value);
    var url = "";

    if (email == "") {
        alert("You must be logged in to perform this operation !");
        return;
    }
    
    if (isNaN(amount)) {
        alert("Amount needs to be a valid number !");
        return;
    }
    
    if (amount <=0) {
        alert("Amount needs to be greater than zero !");
        return;
    }
    if (description == "") {
        description = "-";
    }

    url = '/account/deposit/' + email + '/' + description + '/' + amount ;
    
    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
            }
            else{
                console.log(res);
                target.innerHTML = ui.deposit(isResultMsg,res.text);
            }

        });
};

var loadWithdrawParam = function()  {
    var isResultMsg = 0; // it is not a result msg, therefore load the parameters HTML
    if (loggedInEmail == "") {
        alert("You must be logged in to perform this operation !");
        return;
    }
    target.innerHTML = ui.withdraw(isResultMsg,"");
}

var loadWithdraw = function(){
    var isResultMsg = 1; // it is not a result msg, therefore load the result HTML
    var email = loggedInEmail;
    var description = document.getElementById('withdrawDescription').value;
    var amount = Number(document.getElementById('withdrawAmount').value);
    var url = "";

    if (email == "") {
        alert("You must be logged in to perform this operation !");
        return;
    }
    
    if (isNaN(amount)) {
        alert("Amount needs to be a valid number !");
        return;
    }
    
    if (amount <=0) {
        alert("Amount needs to be greater than zero !");
        return;
    }
    if (description == "") {
        description = "-";
    }

    url = '/account/withdraw/' + email + '/' + description + '/' + amount ;
    
    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
            }
            else{
                console.log(res);
                target.innerHTML = ui.withdraw(isResultMsg,res.text);
            }

        });
};

var loadBalanceParam = function() {
    var isResultMsg = 0; // it is not a result msg, therefore load the parameters HTML, if fact in this case this parameter doesn't matter
    var email = loggedInEmail;
      var url = "";

    if (email == "") {
        alert("You must be logged in to perform this operation !");
        return;
    }
    
    url = '/account/getbalance/' + email ;
    
    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
            }
            else{
                console.log(res);
                target.innerHTML = ui.balance(isResultMsg,res.text);
            }

        });

}

var loadTransactionsParam = function() {
    var isResultMsg = 0; // it is not a result msg, therefore load the parameters HTML, if fact in this case this parameter doesn't matter
    var email = loggedInEmail;
      var url = "";

    if (email == "") {
        alert("You must be logged in to perform this operation !");
        return;
    }
    
    url = '/account/transactions/' + email ;
    
    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
            }
            else{
                console.log(res);
                target.innerHTML = ui.transactions(isResultMsg,res.text);
            }

        });

}

var defaultModule = function(){
    target.innerHTML = ui.default;
};

var loadAllDataParam = function() {
    var isResultMsg = 0; // it is not a result msg, therefore load the parameters HTML, if fact in this case this parameter doesn't matter
    var url = "";

    url = '/account/all';
    
    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
            }
            else{
                console.log(res);
                target.innerHTML = ui.allData(isResultMsg,res.text);
            }

        });
};

defaultModule();
