import { Solar } from "network/api/solars/schemas"
import { useEffect, useState } from "react"
import calculateKW from "utils/helper"

type SolarProps = {
    count: number;
    solarPanels: Solar[];
}

const Stats = (props: SolarProps) =>{

    const { count, solarPanels } = props

    const[totalEnergy, setTotalEnergy] = useState(0)

    useEffect(()=>{
        setTotalEnergy(calculateKW(solarPanels))
    },[props])

    return(
        <>
            <div className="grid gird-cols-2 gap-4">
                {/* SOLAR PANEL COUNT STAT START */}
                <div className="relative flex items-center bg-white py-5 px-4 sm:py-6 sm:px-6 shadow rounded-lg overflow-hidden">
                    <div>
                        <dt>
                            <div className="absolute bg-blue-600 rounded-md p-3">
                                {/* Heroicons - chip */}
                                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                </svg>
                            </div>
                            <p className="ml-16 text-sm font-medium text-gray-500 truncate">Total Solar Panels</p>
                        </dt>
                        <dd className="ml-16 flex items-center">
                            {/* Dynamic Count */}
                            <p className="text-lg lg:text-2xl font-semibold text-gray-900">
                                {count}
                            </p>
                        </dd>
                    </div>
                </div>
                {/* SOLAR PANEL COUNT STAT END */}

                {/* TOTAL ENERGY COUNT STAT START */}
                <div className="relative flex items-center bg-white py-5 px-4 sm:py-6 sm:px-6 shadow rounded-lg overflow-hidden">
                    <div>
                        <dt>
                            <div className="absolute bg-blue-600 rounded-md p-3">
                                {/* Heroicons - lightning-bolt */}
                                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <p className="ml-16 text-sm font-medium text-gray-500 truncate">Total Energy</p>
                        </dt>
                        <dd className="ml-16 flex items-center">
                            {/* Dynamic Count */}
                            <p className="text-lg lg:text-2xl font-semibold text-gray-900">
                                {totalEnergy}kW
                            </p>
                        </dd>
                    </div>
                </div>
                {/* TOTAL ENERGY COUNT STAT END */}
            </div>
        </>
    )
}

export default Stats