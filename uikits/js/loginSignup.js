const login_btn = document.querySelector('#login--btn');
const signup_btn = document.querySelector('#signup--btn');
const loginSignup_container = document.querySelector('.login--signup--container');

let flag = 0;

signup_btn.addEventListener('click', () => {
    loginSignup_container.classList.add('sign--up--mode');
});

login_btn.addEventListener('click', () => {
    loginSignup_container.classList.remove('sign--up--mode');
});

// Variable for alert boxes
const alert_noMatch_error = document.querySelector('.alert--noMatch--error');
const alert_password_error = document.querySelector('.alert--password--error');
const alert_success = document.querySelector('.alert--success');
const alert_warning = document.querySelector('.alert--warning');
const alert_close = document.querySelectorAll('.alert--close') ;

// Variable for Submit Validation
const loginform = document.getElementsByClassName('login--form')[0];
const login_username = document.getElementById('login--username');
const login_password = document.getElementById('login--password');
const login_submit_btn = document.getElementById('log--in');



//////////////////// Login Section /////////////////////////////////

// When submit button is hit
loginform.addEventListener('submit',(e)=>{

    // Default Names and Respective Passwords
    var correctUserNames = ["Thant Bhone Htet",
                            "Nyan Tun Naing",
                            "Kyaw Phone Myint",
                            "Hein Thaw",
                            "Phone Myint Myat",
                            "San Myat Min"]
    var password =  ["thant1234",
                    "nyan1234",
                    "kyaw1234",
                    "hein1234",
                    "phone1234",
                    "san1234"]
                    
    let flag1,flag2,index=0;
    if (login_username.value === "" || login_password.value === ""){
        alert_warning.classList.add('show--alert');
        e.preventDefault();
    }
    else{
        // Search whether array contains input name
        for (var i=0;i<correctUserNames.length;i++){
            index++;
            if (login_username.value === correctUserNames[i]){
                flag1 = 1;
                break;
            }
            else{flag1 = 0};         
        }

        // Using Concept of Parallel Array
        if (login_password.value === password[index-1]){
            flag2 = 1;
                
        }
        else{flag2 = 0};
       
        
        if (flag1==1 && flag2==0){
            alert_password_error.classList.add('show--alert');

            alert_warning.classList.remove('show--alert');
            alert_noMatch_error.classList.remove('show--alert');
            alert_success.classList.remove('show--alert')
            e.preventDefault();
        }
        else if (flag1==1 && flag2==1){
            alert_success.classList.add('show--alert');
            alert_warning.classList.remove('show--alert');
            alert_noMatch_error.classList.remove('show--alert');
            alert_password_error.classList.remove('show--alert');
            flag = 1;
            sessionStorage.setItem('flag',flag)
            setTimeout(function(){
                loginform.submit();
                sessionStorage.setItem('profileName',login_username.value);
                // window.close('/login-signup.html')
                // window.open('profile.html');
                location.replace('profile.html');
            },2000)
            e.preventDefault();
        }
        else {
            alert_noMatch_error.classList.add('show--alert');
            alert_warning.classList.remove('show--alert');
            alert_password_error.classList.remove('show--alert');
            alert_success.classList.remove('show--alert');
            e.preventDefault();
        }
    }
})


///////////////////////// Signup Section ///////////////////////////////
const signup_form = document.getElementsByClassName('signup--form')[0];
const signup_username = document.getElementById('signup--username');
const signup_email = document.getElementById('signup--email')
const signup_password = document.getElementById('signup--password');
const signup_submit_btn = document.getElementById('log--in');

signup_form.addEventListener('submit',(e)=>{
    if (signup_username.value == "" || signup_email.value == "" || signup_password.value == ""){
        alert_warning.classList.add('show--alert');
        e.preventDefault();
    }
    else {
        alert_success.classList.add('show--alert');
        alert_warning.classList.remove('show--alert');
        flag = 1;
        window.sessionStorage.setItem('flag',flag)
        setTimeout(function(){
            signup_form.submit();
            sessionStorage.setItem('profileName',signup_username.value);
            location.replace('profileSetup.html');
        },2000);
        
        e.preventDefault();
    }
});

// Close alert box
alert_close[0].addEventListener('click',()=>{
    alert_success.classList.remove('show--alert');
});

alert_close[1].addEventListener('click',()=>{
    alert_noMatch_error.classList.remove('show--alert');
});

alert_close[2].addEventListener('click',()=>{
    alert_password_error.classList.remove('show--alert');
});

alert_close[3].addEventListener('click',()=>{
    alert_warning.classList.remove('show--alert');
})

