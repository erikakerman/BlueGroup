import { NavLink } from "react-router-dom"

export default function SubMenu({ category, subMenues }) {
    let key = 1

    function cFirstLetter(val) {
        return String(val).charAt(0).toUpperCase() + String(val).slice(1);
    }

    function style({ isActive }) {
        return isActive ? { color: 'black', fontWeight: 'bold' } : {}
    }

    return (
        <div>
            {
                subMenues.map(menuName => {
                    return (
                        <div key={key++} className="display_ib px10">
                            <NavLink to={category + '/' + menuName} style={style} >{cFirstLetter(menuName)}</NavLink>
                        </div>
                    )
                })
            }
        </div>
    )
}
