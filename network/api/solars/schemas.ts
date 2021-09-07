import { Id } from "network/common/schemas";

export interface Solar extends Id {
    date: string;
    time: string;
    energy: string;
    efficiency: string;
    power: string;
    voltage: number; 
}

