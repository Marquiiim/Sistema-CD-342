import styles from './Sessions.module.css'

import { FaTrashAlt } from "react-icons/fa";

function Sessions({ nome, ip, mac, patrimônio, setor }) {

    return (
        <ul className={styles.object}>
            <li className={styles.object_structure}>
                <div>
                    <label>Nome</label>
                    <span>{nome}</span>
                </div>
                <div>
                    <label>Endereço IP</label>
                    <span>{ip}</span>
                </div>
                <div>
                    <label>Endereço MAC</label>
                    <span>{mac}</span>
                </div>
                <div>
                    <label>Patrimônio</label>
                    <span>{patrimônio}</span>
                </div>
                <div>
                    <label>Setor</label>
                    <span>{setor}</span>
                </div>

                <FaTrashAlt className={styles.trash} />
            </li>
        </ul>
    )
}

export default Sessions