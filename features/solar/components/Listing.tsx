import { useState } from "react"

const Listing = () =>{

    const [isGridView, setIsGridView] = useState(true);

    return (
        <>
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
        </>
    )
}

export default Listing