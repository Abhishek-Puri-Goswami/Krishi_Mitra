let signupbtn = document.querySelector('.signUpbtn');
let signinbtn = document.querySelector('.signInbtn');
let title = document.querySelector('.title');
let nameField = document.querySelector('.namefield');
let underline = document.querySelector('.underline');
let text = document.querySelector('.text');
let anchor = document.querySelector('p a')

signinbtn.addEventListener('click', ()=>{
    nameField.style.maxHeight = '0';
    title.innerHTML = 'Sign In';
    text.innerHTML = 'Forgot Password'
    anchor.innerHTML = ' Click Here!'
    anchor.style.display = 'inline';
    text.style.display = 'inline';
    signupbtn.classList.add('disable');
    signinbtn.classList.remove('disable');
    underline.style.transform = 'translateX(35px)';
});
signupbtn.addEventListener('click', ()=>{
    nameField.style.maxHeight = '60px';
    title.innerHTML = "Sign Up";
    text.innerHTML = '';
    anchor.innerHTML = '';
    anchor.style.display = 'none';
    text.style.display = 'none';
    signupbtn.classList.remove('disable');
    signinbtn.classList.add('disable');
    underline.style.transform = 'translateX(0)';
});

