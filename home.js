let uname =  JSON.parse(localStorage.getItem('currentUser'));
document.getElementById('welcome').innerHTML=`<h1>Welcome ${uname.username}</h1>`

function deposit(event) {
    event.preventDefault();

    let depositAmount = parseFloat(document.getElementById('depAmount').value);
    let password = dpass.value;
    let user = JSON.parse(localStorage.getItem('currentUser'));

    if (password === user.password) {
        user.balance += depositAmount; 
        localStorage.setItem(user.acnumber, JSON.stringify(user)); // Update in localStorage
        localStorage.setItem('currentUser', JSON.stringify(user)); // Update in localStorage
        document.getElementById('depositresult').innerText = `New balance: $${user.balance}`;
        alert("Deposit was successful!")
        depositform.reset();


    } else {
        alert("Invalid password or user not logged in!");
    }
}

function withdraw(event){
    event.preventDefault()
    
    let withdrawAmount = parseFloat(document.getElementById('wAmount').value);
    let password = wpass.value;
    let user = JSON.parse(localStorage.getItem('currentUser'));

    if (password === user.password) {
        user.balance -= withdrawAmount; 
        localStorage.setItem(user.acnumber, JSON.stringify(user)); // Update in localStorage
        localStorage.setItem('currentUser', JSON.stringify(user)); // Update in localStorage
        document.getElementById('withdrawresult').innerText = `New balance: $${user.balance}`;
        document.getElementById('depositresult').innerText = `New balance: $${user.balance}`;
        alert("Withdraw was successful!")
        withdrawform.reset();
        
    } else {
        alert("Invalid password or user not logged in!");
    }

}

function logout(){
    window.location='./index.html'
}


