function auth(){
    var userName = document.getElementById("userName").value;
    var passWord = document.getElementById("passWord").value;

    if(userName == "dilushi" && passWord == "2001dilushi"){
        alert("Login Successfully!")
        window.location.href= "file:///C:/Users/User/Desktop/MOS%20Burger%20Shop/home.html";
        r
    }
    else if (userName == "dilushi" && passWord !="2001dilushi"){
        alert("Invalid Password!");
        return ;
    }
    else if(userName !="dilushi"  && passWord == "2001dilushi"){
        alert("Invalid User Name!");
        return ;
    }else{
        alert("Invalid Login!");
        return ;
    }
}