import { Link, useNavigate } from "react-router-dom"

export const NavBar = () => {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/event/add">Add Event</Link>
            </li>
        </ul>
    )
}