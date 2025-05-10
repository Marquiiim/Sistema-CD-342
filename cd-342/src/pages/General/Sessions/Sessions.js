import styles from './Sessions.module.css'

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
            </li>
        </ul>
    )
}

export default Sessions