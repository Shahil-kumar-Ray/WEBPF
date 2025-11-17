function validateForm(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let password = document.getElementById('password').value;

    if(name === '' || email === '' || phone === '' || password === ''){
        alert("All fields are necessary");
        return false;
    }

    // name validation
    for (let ch of name){
        if((ch>='a' && ch<='z') || (ch>='A' && ch<='Z') || ch===' '){

        }
        else{
            alert("Name should contains letters only");
            return false;
        }
    }

    // email validation
    if(!email.includes('@') || !email.includes('.') || 
    (email.indexOf('@') > email.lastIndexOf('.'))){
        alert('Enter valid email')
        return false;
    }

    // phone validation
    if(phone.length !== 10){
        alert("phone number should contains 10 digits");
        return false;
    }
    for(let ch of phone){
        if(ch < '0' && ch > '9'){
            alert('Enter valid number')
            return false;
        }
    }
    
    // password validation
    let hasUpper=false, hasLower = false, hasNumber = false, hasSpecial=false;
    let specials = "~`!@#$%^&*()_+{}:;<>?/.,[]=-";

    for(let ch of password){
        if(ch >= 'A' && ch<='Z') hasUpper = true;
        else if(ch >= 'a' && ch<='z') hasLower = true;
        else if(ch >='0' && ch <= '9') hasNumber = true;
        else if(specials.includes(ch)) hasSpecial = true;
    }
    if(!hasUpper || !hasNumber || !hasLower || !hasSpecial){
        alert("Password must contain Uppercase, LowerCase, Number and special character")
        return false;
    }
    alert('Form filled successfully')
    return true;
}