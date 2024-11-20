import { Outlet } from "react-router-dom"
import Nav from '../Components/Nav.jsx'
import Footer from "../Components/Footer.jsx"

export default function Layout({ context }) {
    return (
        <div>
            <div className='nav_c'>
                <Nav context={context} />
            </div>
            <div className='active_tab'>
                <Outlet context={context} />

                <div className="footer">
                    <Footer />
                </div>
            </div>
        </div>
    )
}
