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
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:col-span-2">
                {solarPanels &&(
                    <>
                        <Stats count={solarPanels.stats.count} solarPanels={solarPanels.entries}/>
                        <Listing count={solarPanels.stats.count} solarPanels={solarPanels.entries}/>
                    </>
                )}
                
            </div>
        </>
    )
}

export default SolarComponent