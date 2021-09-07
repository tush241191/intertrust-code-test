import Head from 'next/head';

type Props = {
    children: any
}

const Layout = (props: Props) => {
    const { children } = props

    return(
        <>
            <Head>
                <title>Intertrust-Code Test</title>
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
            </Head>
            <div className="min-h-screen bg-gray-100">
                <div className="py-10">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Layout