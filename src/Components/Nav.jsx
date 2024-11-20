import { useState } from "react"
import { NavLink } from "react-router-dom"
import SubMenu from "./SubMenu"

export default function Nav({ context }) {
    const [isCategory, setIsCategory] = useState('')
    const { productCount } = context

    const subMenuesForMen = [
        "jeans",
        "shoes",
        "socks",
    ]
    const subMenuesForWomen = [
        "jeans",
        "shoes",
        "bags",
    ]
    const subMenuesForKids = [
        "pants",
        "shoes",
        "toys",
    ]

    function toggleSubMenu(e) {
        setIsCategory(e.target.innerText)
    }

    function style({ isActive }) {
        return isActive ? { color: 'black', fontWeight: 'bold' } : {}
    }

    return (
        <>
            <div onClick={toggleSubMenu} className='logo'><NavLink style={style} to="/">BlueGroup</NavLink></div>

            <div className="nav center">
                <div onClick={toggleSubMenu} className='display_ib px10 color_bg'><NavLink style={style} to="women">Women</NavLink></div>
                <div onClick={toggleSubMenu} className='display_ib px10 color_bg'><NavLink style={style} to="men">Men</NavLink></div>
                <div onClick={toggleSubMenu} className='display_ib px10 color_bg'><NavLink style={style} to="kids">Kids</NavLink></div>
                {isCategory == 'Men' && <SubMenu category='men' subMenues={subMenuesForMen} />}
                {isCategory == 'Women' && <SubMenu category='women' subMenues={subMenuesForWomen} />}
                {isCategory == 'Kids' && <SubMenu category='kids' subMenues={subMenuesForKids} />}
            </div>
            <div>
                <NavLink to="shoppingcart">
                    <div className="sc_cart">
                        {productCount > 0 && <div className="sc_relative">{productCount}</div>}
                    </div>
                </NavLink>
            </div>
        </>
    )
}
