import styles from './Sessions.module.css'

import { FaTrashAlt } from "react-icons/fa";

function Sessions({ nome, ip, mac, patrimonio, setor, onRemove }) {

    const handleClick = (e) => {
        e.preventDefault()
        onRemove(patrimonio)
    }

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
                    <span>{patrimonio}</span>
                </div>
                <div>
                    <label>Setor</label>
                    <span>{setor}</span>
                </div>
                <button
                    onClick={handleClick}
                    className={styles.trashButton}
                >
                    <FaTrashAlt className={styles.trash} />
                </button>
            </li>
        </ul>
    )
}

export default Sessions