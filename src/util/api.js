import * as axios from 'axios'
const url = 'http://localhost:3001'

export function buildFloor(){
    axios.get(url + `/game/test`)
}