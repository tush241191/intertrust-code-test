import WeatherComponent from "features/weather/components/Weather"
import { getSolars } from "network/api/solars"
import { useEffect, useState } from "react"
import Listing from "./Listing"
import Stats from "./Stats"

const SolarComponent = () =>{

    const[solarPanels,setSolarPanels] = useState(null)

    const delay = 10000

    useEffect(()=>{
        fetchData()
        const interval = setInterval(() => fetchData(), delay)
        return () => {
            clearInterval(interval);
        }
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
        <div className="">
            {/* SOLAR STATS/WEATHER INFO START */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Stats count={solarPanels?.stats.count} solarPanels={solarPanels?.entries}/>
                <WeatherComponent/>
            </div>
            {/* SOLAR STATS/WEATHER INFO END */}
            <div className="my-14 bg-gray-200 h-0.5 w-full"></div>
            {/* SOLAR LISTING START */}
            <div className="flex-row">
                <Listing count={solarPanels?.stats.count} solarPanels={solarPanels?.entries}/>
            </div>             
            {/* SOLAR LISTING END */}
        </div>
    )
}

export default SolarComponent