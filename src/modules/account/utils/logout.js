export default function logout(){
console.log('Entered function');
localStorage.removeItem('user')
console.log('Logged out successfully');
this.$router.push({name:'login'})
}