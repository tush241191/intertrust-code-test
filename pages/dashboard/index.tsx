import SolarComponent from "features/solar/components/Solar"

const Dashboard = () => {

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
                        <SolarComponent/>

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
