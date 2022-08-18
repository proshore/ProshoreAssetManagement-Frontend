const validatePassword = (password)=>{
    const response = {isValid: true, errorMessage:''}
    const specialCharacters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if(password.length <8){
        console.log(password.length);
        response.errorMessage = "Password must be more than 8 characters long"
        response.isValid = false
        
        return response
    }
    if (!specialCharacters.test(password)){
        response.errorMessage = "Please Enter a valid password"
        response.isValid = false
       
        return response
    }
    
    return response
}

export default validatePassword;