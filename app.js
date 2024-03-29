let users  = []
let city = ['Chennai', 'Madurai', 'Hosur', 'Trichy', 'Thanjavur', 'Salem', 'Dindukal', 'Vellore', 'Karur', 'Kovai']
function success(){
    let alert = document.getElementById('alert')
    alert.classList.add('success');
    alert.innerText = "Details added successfully"
    setTimeout(() => {
        alert.classList.remove('success')
        alert.innerText = ""
    }, 2000);
}

function fail(){
    let alert = document.getElementById('alert')
    alert.classList.add('fail');
    alert.innerText = "Email already exists"
    setTimeout(() => {
        alert.classList.remove('fail')
        alert.innerText = ""
    }, 2000);
}

function render(){
    let userContainer = document.getElementById('users')
    userContainer.innerHTML = ' '
    users.map((user)=>{
        let div = document.createElement('div')
        let userName = document.createElement('p')
        let userEmail = document.createElement('p')
        let userPhno = document.createElement('p')
        let userCity = document.createElement('p')
        div.classList.add('user')

        let k = Math.ceil(Math.random() * 9)

        userName.innerText = user.name
        userEmail.innerText = user.email
        userPhno.innerText = user.phno
        userCity.innerText = city[k] 

        userContainer.appendChild(div)
        div.appendChild(userName)
        div.appendChild(userEmail)
        div.appendChild(userPhno)
        div.appendChild(userCity)
    })
}

function validateForm() {
    let x = document.getElementById('name').value;
    let y = document.getElementById('email').value
    let z = document.getElementById('phno').value
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    if (y == "") {
        alert("Email must be filled out");
        return false;
    }
    if (z == "") {
        alert("Phone number must be filled out");
        return false;
    }
    if(z.length != 10){
        alert("Invalid Phone number");
        return false;
    }
  }

function register(){
    let status = validateForm()
    if(status != false){
        let name = document.getElementById('name')
        let email = document.getElementById('email')
        let phno = document.getElementById('phno')
        let tempuser = {
            name: name.value,
            email: email.value,
            phno: phno.value,
        }
    
        let usercount = users.filter((user)=>{
            return user.email == email.value
        })
    
        if(usercount.length == 0)
        {
            users.push(tempuser)
            success()
            render()
        }
        else{
            fail();
        }
    }

}