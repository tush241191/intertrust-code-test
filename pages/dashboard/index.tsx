import { useState } from "react"

const Dashboard = () => {

    const [isGridView, setIsGridView] = useState(true);

    return (
    <>
        <header>
            {/* PAGE HEADER TITLE START */}
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold leading-tight text-gray-900">
                    Solar Farm - Dashboard
                </h1>
            </div>
            {/* PAGE HEADER TITLE END */}
        </header>
        <main>
            <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
                <div className="px-4 py-8 sm:px-0">
                    <div className="mt-3 grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
                        {/* Left column */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:col-span-2">
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

                            <div className="mt-3 col-span-2">
                                <div className="flex justify-between">
                                    <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">Solar Panels</h2>
                                    {/* TOGGLE GRID/TABLE VIEW */}
                                    <div className="flex space-x-2">
                                        <svg onClick={()=>setIsGridView(true)} xmlns="http://www.w3.org/2000/svg" className={ (isGridView ? 'text-blue-600' : 'text-gray-400 hover:text-blue-600') + ' h-6 w-6 cursor-pointer'} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                        </svg>
                                        <svg onClick={()=>setIsGridView(false)} xmlns="http://www.w3.org/2000/svg" className={ (!isGridView ? 'text-blue-600' : 'text-gray-400 hover:text-blue-600') + ' h-6 w-6 cursor-pointer'} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                        </svg>
                                    </div>
                                </div>
                                {isGridView && (
                                    // SHOW GRID VIEW
                                    <>
                                        <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                            <li className="col-span-1 flex shadow-sm rounded-md">
                                                <div className="flex-shrink-0 flex items-center justify-center w-16 bg-gray-500 text-white text-sm font-medium rounded-l-md">
                                                    101
                                                </div>
                                                <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                                                    <div className="flex items-center px-4 py-2 truncate space-x-4">
                                                        <div className="flex-row">
                                                            <p className="text-gray-500 font-medium text-sm">Voltage</p>
                                                            <p className="text-gray-900 font-semibold text-xl">4v</p>
                                                        </div>
                                                        <div className="flex-row">
                                                            <p className="text-gray-500 font-medium text-sm">Wattage</p>
                                                            <p className="text-gray-900 font-semibold text-xl">4w</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="col-span-1 flex shadow-sm rounded-md">
                                                <div className="flex-shrink-0 flex items-center justify-center w-16 bg-gray-500 text-white text-sm font-medium rounded-l-md">
                                                    101
                                                </div>
                                                <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                                                    <div className="flex items-center px-4 py-2 truncate space-x-4">
                                                        <div className="flex-row">
                                                            <p className="text-gray-500 font-medium text-sm">Voltage</p>
                                                            <p className="text-gray-900 font-semibold text-xl">4v</p>
                                                        </div>
                                                        <div className="flex-row">
                                                            <p className="text-gray-500 font-medium text-sm">Wattage</p>
                                                            <p className="text-gray-900 font-semibold text-xl">4w</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="col-span-1 flex shadow-sm rounded-md">
                                                <div className="flex-shrink-0 flex items-center justify-center w-16 bg-gray-500 text-white text-sm font-medium rounded-l-md">
                                                    101
                                                </div>
                                                <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                                                    <div className="flex items-center px-4 py-2 truncate space-x-4">
                                                        <div className="flex-row">
                                                            <p className="text-gray-500 font-medium text-sm">Voltage</p>
                                                            <p className="text-gray-900 font-semibold text-xl">4v</p>
                                                        </div>
                                                        <div className="flex-row">
                                                            <p className="text-gray-500 font-medium text-sm">Wattage</p>
                                                            <p className="text-gray-900 font-semibold text-xl">4w</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="col-span-1 flex shadow-sm rounded-md">
                                                <div className="flex-shrink-0 flex items-center justify-center w-16 bg-gray-500 text-white text-sm font-medium rounded-l-md">
                                                    101
                                                </div>
                                                <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                                                    <div className="flex items-center px-4 py-2 truncate space-x-4">
                                                        <div className="flex-row">
                                                            <p className="text-gray-500 font-medium text-sm">Voltage</p>
                                                            <p className="text-gray-900 font-semibold text-xl">4v</p>
                                                        </div>
                                                        <div className="flex-row">
                                                            <p className="text-gray-500 font-medium text-sm">Wattage</p>
                                                            <p className="text-gray-900 font-semibold text-xl">4w</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </>
                                )}
                                
                                {!isGridView &&(
                                    // SHOW TABLE VIEW
                                    <>
                                        <div className="mt-3 flex flex-col">
                                            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                                        <table className="min-w-full divide-y divide-gray-200">
                                                            <thead className="bg-gray-500">
                                                                <tr>
                                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                                        Id
                                                                    </th>
                                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                                        Date
                                                                    </th>
                                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                                        Time
                                                                    </th>
                                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                                        Energy
                                                                    </th>
                                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                                        Efficiency
                                                                    </th>
                                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                                        Power
                                                                    </th>
                                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                                        Voltage
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr className="bg-white">
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                                        1001
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                        07/09/21
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                        3:40PM
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                        2,888.230kWh
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                        4.814kWh/kW
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                        124,044W
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                        9849.8V
                                                                    </td>                                                            
                                                                </tr>
                                                                <tr className="bg-gray-50">
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                                        1001
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                        07/09/21
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                        3:40PM
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                        2,888.230kWh
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                        4.814kWh/kW
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                        124,044W
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                        9849.8V
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                                
                            </div>
                        </div>

                        {/* Right column */}
                        <div className="order-first lg:order-last grid grid-cols-1 gap-4">
                            {/* WEATHER INFORMATION START */}
                            <section aria-labelledby="announcements-title">
                                <div className="rounded-lg bg-blue-600 text-white overflow-hidden shadow">
                                    <div className="p-5 xl:p-10">
                                        <h2 className="text-base font-medium">Mumbai, Maharashtra, India</h2>
                                        <div className="flow-root mt-6">
                                            <div className="flex items-center justify-between">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 xl:h-24 xl:w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                                </svg>
                                                <p className="text-xl xl:text-3xl font-medium">27°c</p>
                                                <div className="flex text-xs xl:text-sm">
                                                    <div>
                                                        <p>Wind: 12</p>
                                                        <p>Precip: 12</p>
                                                        <p>Pressure: 12</p>
                                                        <p>Cloud Cover: 75%</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-6 flex items-center justify-between">
                                                <div className="flex-row">
                                                    <p className="text-xs xl:text-sm capitalize">Sunrise</p>
                                                    <p className="text-xs xl:text-sm">06:24 AM</p>
                                                </div>
                                                <div className="flex-row">
                                                    <p className="text-xs xl:text-sm capitalize">sunset</p>
                                                    <p className="text-xs xl:text-sm">06:24 AM</p>
                                                </div>
                                                <div className="flex-row">
                                                    <p className="text-xs xl:text-sm capitalize">moonrise</p>
                                                    <p className="text-xs xl:text-sm">06:24 AM</p>
                                                </div>
                                                <div className="flex-row">
                                                    <p className="text-xs xl:text-sm capitalize">moonset</p>
                                                    <p className="text-xs xl:text-sm">06:24 AM</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* WEATHER INFORMATION END */}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
    )
}

export default Dashboard
