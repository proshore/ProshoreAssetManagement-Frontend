export default function getToken() {
    // the data stored in localStorage will change in future, so this function
    //will also require updates
    const token = localStorage.getItem('data')
    if (!token){
        return undefined
    }
    return token;
    
  }