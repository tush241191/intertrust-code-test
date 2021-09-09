import { getWeather } from "network/api/weathers"
import { Weather } from "network/api/weathers/schemas"
import { useEffect, useState } from "react"

const WeatherComponent = () =>{

    const[weather,setWeather] = useState<Weather>(null)

    const currentDate = "2021-09-07"

    const delay = 300000

    useEffect(()=>{
        fetchData()
        const interval = setInterval(() => fetchData(), delay)
        return () => {
            clearInterval(interval);
        }
    },[])

    const fetchData = async () => {
        try{
            const res = await getWeather()
            setWeather(res)
        }catch (err){
            console.error("Error: ",err)
        }
    }
    
    return(
        <>
            <div className="order-first lg:order-last grid grid-cols-1 gap-4">
                {/* WEATHER INFORMATION START */}
                <section aria-labelledby="announcements-title">
                    <div className="rounded-lg bg-blue-600 text-white overflow-hidden shadow">
                        <div className="p-5 xl:p-10">
                            <h2 className="text-base font-medium">{weather?.location.name}, {weather?.location.region}, {weather?.location.country}</h2>
                            <div className="flow-root mt-6">
                                <div className="flex items-center justify-between">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 xl:h-24 xl:w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                    </svg>
                                    <p className="text-xl xl:text-3xl font-medium">{weather?.current.temperature}°c</p>
                                    <p className="text-lg xl:text-xl font-medium">{weather?.current.weather_descriptions[0]}</p>
                                    <div className="flex text-xs xl:text-sm">
                                        <div>
                                            <p>Wind: {weather?.current.wind_speed}</p>
                                            <p>Precip: {weather?.current.precip}</p>
                                            <p>Pressure: {weather?.current.pressure}</p>
                                            <p>Cloud Cover: {weather?.current.cloudcover}%</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 flex items-center justify-between">
                                    <div className="flex-row">
                                        <p className="text-xs xl:text-sm capitalize">Sunrise</p>
                                        <p className="text-xs xl:text-sm">{weather?.forecast[currentDate].astro.sunrise}</p>
                                    </div>
                                    <div className="flex-row">
                                        <p className="text-xs xl:text-sm capitalize">sunset</p>
                                        <p className="text-xs xl:text-sm">{weather?.forecast[currentDate].astro.sunset}</p>
                                    </div>
                                    <div className="flex-row">
                                        <p className="text-xs xl:text-sm capitalize">moonrise</p>
                                        <p className="text-xs xl:text-sm">{weather?.forecast[currentDate].astro.moonrise}</p>
                                    </div>
                                    <div className="flex-row">
                                        <p className="text-xs xl:text-sm capitalize">moonset</p>
                                        <p className="text-xs xl:text-sm">{weather?.forecast[currentDate].astro.moonset}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* WEATHER INFORMATION END */}
            </div>
        </>
    )
}

export default WeatherComponent