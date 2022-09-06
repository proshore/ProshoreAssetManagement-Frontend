const validateUserName = (username)=>{
    const response = {isValid: true,errorMessage:''}
    const regex = /^[a-zA-Z0-9_.-]*$/i;

    if(!regex.test(username)){
        response.errorMessage = "Please enter a valid username"
        response.isValid = false
    }
    return response;
}

export default validateUserName;