import * as axios from 'axios'
const url = 'http://localhost:3001'

export function buildFloor(towerName, floorNumber) {
    console.log("Attempting to build a floor..." + floorNumber);
    floorNumber = parseInt(floorNumber);
    return axios.post(url + `/game/buildfloor/${towerName}/${floorNumber}`)
}

export async function getTower(towerName) {
    return axios.get(url + `/game/loadtower/${towerName}`)
}

export async function getPopulation(towerName) {
    return axios.get(url + `/game/getpopulation/${towerName}`)
}

export async function getFloorRooms(floorId) {
    return axios.get(url + `/game/loadrooms/${floorId}`);
}

export function buildRoomOnFloor(towerName, floorId, roomName, roomType, roomRent, roomMaintenance, roomHappiness) {
    let body = {
        roomName: roomName,
        roomType: roomType,
        maintenance: roomMaintenance,
        happiness: roomHappiness,
        rent: roomRent,
    }
    return (
        axios.post(url + `/game/buildroom/${towerName}/${floorId}`, body)
    );
}