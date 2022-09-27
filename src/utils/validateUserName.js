const validateUserName = (username)=>{
    const response = {isValid: false,errorMessage:''}
    const regex = /^[a-zA-Z0-9_.-]*$/i;
    if (username.length < 3 ){
        response.errorMessage = "Name should be at least 3 letters long"
        response.isValid = false
    }
    if(!regex.test(username)){
        response.errorMessage = "Please enter a valid username"
        response.isValid = false
    }
    return {...response, isValid:true};
}

export default validateUserName;