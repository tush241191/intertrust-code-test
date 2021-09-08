import Listing from "./Listing"
import Statistics from "./Statistics"

const SolarComponent = () =>{
    
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:col-span-2">
                <Statistics/>
                <Listing/>
            </div>
        </>
    )
}

export default SolarComponent