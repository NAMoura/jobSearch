import { Montserrat } from "next/font/google"
import Header from "./Header"
import Footer from "./Footer"



const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat'
}) 

export default function AppLayout( {children}) {

    return(
        <div className={`${montserrat.variable} font-sans min-h-screen flex flex-col`}>
            <Header />
            <main className="flex-grow bg-[#ececec]">
                { children }
            </main>
            <Footer />
        </div>
    )

}