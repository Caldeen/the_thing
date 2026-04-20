import { NextApiRequest, NextApiResponse } from "next"



const statusCheck = async (req:NextApiRequest, res:NextApiResponse) => {
    const resp = await fetch('http://127.0.0.1:8080/lab-statuscheck',{
        method: 'GET',
        signal: AbortSignal.timeout(2000)
    })
    if(resp.status === 200) {
        res.status(200).json({ status: 'Online' })
    } else {
        res.status(500).json({ status: 'Offline' })
    }
}
export default statusCheck