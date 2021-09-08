import WeatherComponent from "features/weather/components/Weather"
import { getSolars } from "network/api/solars"
import { Solar, SolarItem } from "network/api/solars/schemas"
import { useEffect, useState } from "react"
import Listing from "./Listing"
import Stats from "./Stats"

const SolarComponent = () =>{

    const[solarPanels,setSolarPanels] = useState(null)

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async () => {
        try{
            const res = await getSolars()
            setSolarPanels(res)
        }catch (err){
            console.error("Error: ",err)
        }
    }
    
    return (
        <div className="divide-y divide-gray-300 space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Stats count={solarPanels?.stats.count} solarPanels={solarPanels?.entries}/>
                <WeatherComponent/>
            </div>
            <div className="flex-row">
                <Listing count={solarPanels?.stats.count} solarPanels={solarPanels?.entries}/>
            </div>             
        </div>
    )
}

export default SolarComponent