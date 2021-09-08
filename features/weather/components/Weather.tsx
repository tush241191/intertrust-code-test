
const WeatherComponent = () =>{

    return(
        <>
            <div className="order-first lg:order-last grid grid-cols-1 gap-4">
                {/* WEATHER INFORMATION START */}
                <section aria-labelledby="announcements-title">
                    <div className="rounded-lg bg-blue-600 text-white overflow-hidden shadow">
                        <div className="p-5 xl:p-10">
                            <h2 className="text-base font-medium">Mumbai, Maharashtra, India</h2>
                            <div className="flow-root mt-6">
                                <div className="flex items-center justify-between">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 xl:h-24 xl:w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
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
        </>
    )
}

export default WeatherComponent