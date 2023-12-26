function submitForm(event){

    event.preventDefault();
    var emailInput = document.getElementById('email');
    var submittedEmail = document.getElementById('submittedEmail');
    var successMessage = document.getElementById('message')
    var subContainer = document.getElementById('sub-container')
    var emailError = document.getElementById('emailError');

    var emailRegex =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'Valid email required';
        emailInput.classList.add('error');
        emailInput.style.border = '1px solid red';
        
    } else {
        emailError.textContent = '';
        emailInput.classList.remove('error');

        submittedEmail.textContent = emailInput.value;
    
        successMessage.style.display = 'flex'; 
        subContainer.style.display = 'none';
        emailInput.style.border = '1px solid hsl(231, 7%, 60%)'

        document.getElementById('emailForm').reset();
    }

}

function showInfo(){
    document.getElementById('message').style.display = 'none';
    document.getElementById('sub-container').style.display = 'flex';
}