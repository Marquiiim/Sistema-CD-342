import { Link } from 'react-router-dom'

import styles from './Navbar.module.css'

function Navbar() {

    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Início</Link>
                </li>
                <li>
                    <Link to=''>Geral</Link>
                </li>
                <li>
                    <Link to=''>Catalogar</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar