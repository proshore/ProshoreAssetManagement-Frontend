import {logoutUser} from '../services'
import getToken from '@/utils/getToken';
import { useToast } from "vue-toastification"
export default async function logout(){
    const token = getToken()
    if (!token){
        //show error message in a dialog box or a toast
        return false

    }
    const toast = useToast();
    const response = await logoutUser(token)
    if (response.data.status.toLowerCase() != 'success'){
        toast.error(`Something went wrong`);
    }
    toast.success(`Logged out successfully`);
    return {name:'login'}
}