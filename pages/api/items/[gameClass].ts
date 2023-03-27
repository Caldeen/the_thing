import { NextApiRequest, NextApiResponse } from "next"
import { useRouter } from "next/router"
import { useEffect } from "react"

const fs = require('fs')
const path = require('path')
const file = path.join("pages/api/D4.json")
const content = fs.readFileSync(file, 'utf8')
const parsedJson = JSON.parse(content)

type Legendary={
    leg_name:string,
    content:string
}
const getItems = async (req:NextApiRequest, res:NextApiResponse) => {
    const gameClass = req.query.gameClass as string
    const itemsToRoll = Number(req.query.itemsToRoll) as number
    
    
    const decideClass = (gameClass:string) => {
        switch(gameClass) {
            case "Barbarian":
                return parsedJson.Barbarian.Legendary
            case "Druid":
                return parsedJson.Druid.Legendary
            case "Sorceress":
                return parsedJson.Sorcerer.Legendary
            case "Rogue":
                return parsedJson.Rogue.Legendary
            case "Necromancer":
                return parsedJson.Necromancer.Legendary
            case "Generic":
                return parsedJson.Generic.Legendary
            default:
                return parsedJson.Barbarian.Legendary
                
        }
    }
    let tab:Legendary[]=[]
    const targetClass = decideClass(gameClass)
    
    Object.entries(targetClass).forEach(([key, value]) => {
        let valuee = value as any
        let item={
            leg_name:key.concat(" ",valuee.name as string),
            content:value as string
        }
        tab.push(item)
            
    }) 
    
    res.status(200).json(rollLeg(tab,itemsToRoll?itemsToRoll:Math.floor(Math.random()*15)+1))
}
const rollLeg=(tab:Legendary[],itemsToRoll:number)=>{
    itemsToRoll>=tab.length?itemsToRoll=tab.length:itemsToRoll
    let result:Legendary[]=[]

    //implement fisher-yates shuffle
    for(let i=tab.length-1;i>0;i--){
        let j = Math.floor(Math.random()*i)
        let temp = tab[i]
        tab[i]=tab[j]
        tab[j]=temp
    }
    for(let i=0;i<itemsToRoll;i++){
        result.push(tab[i])
    }
    return result
}

export default getItems