const validateEmail = (email)=>{
    console.log(`received:${email}`)
    const response = {isValid: true, errorMessage:''}
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (!regex.test(email)){
        response.errorMessage = "Please Enter a valid email"
        response.isValid = false
    }
    console.log(response);
    return response
}

export default validateEmail;