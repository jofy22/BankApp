 
 function signUp(event){
    event.preventDefault();
    const user = {
        username : uname.value,
        acnumber : uacno.value,
        password : upass.value,
        balance : 1000
    }
    console.log(user);
    if(user.username==""||user.acnumber==""||user.password==""){
        alert("Please fill the form")
    }else{
        if(user.acnumber in localStorage){
            alert("This user already exists")
        }else{
            localStorage.setItem(user.acnumber, JSON.stringify(user))
            alert("You are successfully registered!")
            window.location= './login.html';


        }
    }
    
 }
