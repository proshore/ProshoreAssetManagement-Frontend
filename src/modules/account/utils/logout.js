import {logoutUser} from '../services'
import getToken from '@/utils/getToken';
export default async function logout(){
    const token = getToken()
    if (!token){
        //show error message in a dialog box or a toast
        return false

    }
    const response = await logoutUser(token)
    if (response.data.status.toLowerCase() != 'success'){
    //use toast to show error
    }
    //use toast to show logout message
    return {name:'login'}
}