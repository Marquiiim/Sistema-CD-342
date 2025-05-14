import { Link } from 'react-router-dom'

import './Navbar.module.css'

function Navbar() {

    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Início</Link>
                </li>
                <li>
                    <Link to='/geral'>Geral</Link>
                </li>
                <li>
                    <Link to='/catalogar'>Catalogar</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar