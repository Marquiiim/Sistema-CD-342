import styles from './Sessions.module.css'

function Sessions({ nome, ip, mac, patrimônio, setor }) {

    return (
        <ul className={styles.object}>
            <li>
                <label>
                    Nome
                </label>
                <span>
                    {nome}
                </span>
            </li>
            <li>
                <label>
                    Endereço IP
                </label>
                <span>
                    {ip}
                </span>
            </li>
            <li>
                <label>
                    Endereço MAC
                </label>
                <span>
                    {mac}
                </span>
            </li>
            <li>
                <label>
                    Patrimônio
                </label>
                <span>
                    {patrimônio}
                </span>
            </li>
            <li>
                <label>
                    Setor
                </label>
                <span>
                    {setor}
                </span>
            </li>
        </ul>
    )
}

export default Sessions