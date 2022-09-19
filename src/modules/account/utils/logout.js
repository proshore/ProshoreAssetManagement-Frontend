export default function logout(){
    //should expire cookie 
    // remove the login data from local storage[dependent on login]
localStorage.removeItem('user')
}