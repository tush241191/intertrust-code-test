import { Id } from "network/common/schemas";

export interface Solar extends Id{
    date: string;
    time: string;
    energy: string;
    efficiency: string;
    wattage: number;
    voltage: number; 
}

export interface SolarItem {
    stats: {
        offset: number;
        count: number;
    };
    entries: Solar[]
}

