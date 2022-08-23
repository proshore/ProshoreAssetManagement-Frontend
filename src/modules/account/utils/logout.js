export default function logout(){
localStorage.removeItem('user')
console.log('Logged out successfully');
}