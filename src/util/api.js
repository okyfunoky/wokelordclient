import * as axios from 'axios'
const url = 'http://localhost:3001'

export function buildFloor(towerName, floorNumber){
    console.log("Attempting to build a floor..." + floorNumber);
    floorNumber = parseInt(floorNumber);
    return axios.post(url + `/game/buildfloor/${towerName}/${floorNumber}`)
}

export async function getTower(towerName){
    return axios.get(url + `/game/loadtower/${towerName}`)
}