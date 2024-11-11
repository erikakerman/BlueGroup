import { NavLink } from "react-router-dom"

export default function Nav() {

    function style({ isActive }) {
        return isActive ? { color: 'black', fontWeight: 'bold' } : {}
    }

    return (
        <div className="nav center">
            <div className='display_ib px10 color_bg'><NavLink style={style} to="/">BlueGroup</NavLink></div>
            <div className='display_ib px10 color_bg'><NavLink style={style} to="men">Men</NavLink></div>
            <div className='display_ib px10 color_bg'><NavLink style={style} to="women">Women</NavLink></div>
        </div>
    )
}
