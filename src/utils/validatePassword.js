const validatePassword = (password)=>{
    const response = {isValid: true, errorMessage:''}
    const specialCharacters = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
                              

    if(password.length <8){
        response.errorMessage = "Password must be more than 8 characters long"
        response.isValid = false
        
        return response
    }
    // if (!specialCharacters.test(password)){
    //     response.errorMessage = "one special character and one number is required"
    //     response.isValid = false
       
    //     return response
    // }
    
    return response
}

export default validatePassword;