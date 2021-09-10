import {getSolars} from "network/api/solars";
import { Solar } from "network/api/solars/schemas";
import calculateKW from "utils/helper";

const solar_api = "https://run.mocky.io/v3/2b613f74-7481-4c7c-9301-fea8ab545f1f"

const fetchData = async () => {
    try {
        return await getSolars()
    } catch (err) {
        console.error("Error: ", err)
    }
}

describe('Solar Panel Test', () => {
    
    it('Should call solar API', () => {
        cy.request(solar_api).then((response) => {
            expect(response.status).equal(200)
        })
    })

    it('Should fetch solar panels data', () => {
        fetchData().then((response) => {
            expect(response).to.have.property('entries')
        });
    })

    it('Should calculate total energy in kw', () => {
        const entries:Solar[] = [
            {
            "id": 101,
            "date": "2020-09-24",
            "time": "18:00:00",
            "energy": "3,078.600kWh",
            "efficiency": "5.131kWh/kW",
            "wattage": 985,
            "voltage": 789
            },
            {
            "id": 102,
            "date": "2020-09-24",
            "time": "18:00:00",
            "energy": "3,078.600kWh",
            "efficiency": "5.131kWh/kW",
            "wattage": 578,
            "voltage": 4324
            }
        ]

        const totalEnergy = calculateKW(entries)

        expect(totalEnergy).equal(1.563)
    })
})
