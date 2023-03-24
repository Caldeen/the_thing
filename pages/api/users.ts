import { NextApiRequest, NextApiResponse } from "next"


const getUsers = async (req:NextApiRequest, res:NextApiResponse) => {
    return res.status(200).json({name:"John",age:30})
}

export default getUsers