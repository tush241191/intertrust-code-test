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
                    <div className="mt-3">
                        <SolarComponent/>
                    </div>
                </div>
            </div>
        </main>
    </>
    )
}

export default Dashboard
