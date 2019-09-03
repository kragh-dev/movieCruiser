function login() {
    var uname = document.getElementById("uname").value;
    var pwd = document.getElementById("passwd").value;
    if(uname=='admin' && pwd=='admin')
    {
        window.location = "MovieListAdmin.html";
    }
    if(uname=='cust' && pwd=='cust')
    {
        window.location = "MovieListCustomer.html";
    }
}