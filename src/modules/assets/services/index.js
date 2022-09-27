import apiUrl from '@/constants/routes/assets'

import API from "@/services/API"

const requestAsset = async(requestData)=>{
    return await API.post(apiUrl.REQUEST_ASSET_URL,requestData);
    // pass authorization token as header on third argument
}

export {requestAsset}