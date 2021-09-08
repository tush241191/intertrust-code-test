
const Statistics = () =>{

    return(
        <>
            {/* SOLAR PANEL COUNT STAT START */}
            <div className="relative bg-white py-5 px-4 sm:py-6 sm:px-6 shadow rounded-lg overflow-hidden">
                <dt>
                    <div className="absolute bg-blue-600 rounded-md p-3">
                        {/* Heroicons - chip */}
                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                    </div>
                    <p className="ml-16 text-sm font-medium text-gray-500 truncate">Total Solar Panels</p>
                </dt>
                <dd className="ml-16 flex items-center">
                    {/* Dynamic Count */}
                    <p className="text-2xl font-semibold text-gray-900">
                        30kv
                    </p>
                </dd>
            </div>
            {/* SOLAR PANEL COUNT STAT END */}

            {/* TOTAL ENERGY COUNT STAT START */}
            <div className="relative bg-white py-5 px-4 sm:py-6 sm:px-6 shadow rounded-lg overflow-hidden">
                <dt>
                    <div className="absolute bg-blue-600 rounded-md p-3">
                        {/* Heroicons - lightning-bolt */}
                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <p className="ml-16 text-sm font-medium text-gray-500 truncate">Total Energy</p>
                </dt>
                <dd className="ml-16 flex items-center">
                    {/* Dynamic Count */}
                    <p className="text-2xl font-semibold text-gray-900">
                        71,897
                    </p>
                </dd>
            </div>
            {/* TOTAL ENERGY COUNT STAT END */}
        </>
    )
}

export default Statistics