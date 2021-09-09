import { Solar } from "network/api/solars/schemas";

function calculateKW(data: Solar[]){
    return data.reduce((accumulator, current) => accumulator + Number(current.wattage), 0)/1000;
}

export default calculateKW