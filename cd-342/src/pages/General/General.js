import { useState, useEffect } from "react"
import axios from "axios"

import Sessions from "./Sessions/Sessions"

import styles from './General.module.css'

function General() {

    const [dados, setDados] = useState([])
    const [error, setError] = useState(null)

    const fetchData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/api/dados')
            setDados(response.data)
        } catch (err) {
            setError(err.message)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const dadosAgrupados = dados.reduce((acc, item) => {
        const categoria = item.categoria || 'Sem categoria'

        if (!acc[categoria]) {
            acc[categoria] = []
        }
        acc[categoria].push(item)
        return acc
    }, {})

    return (
        <section>
            <ul>
                <li>
                    <fieldset className={styles.session}>
                        <legend className={styles.category}>
                            Impressoras Laser
                        </legend>
                        <Sessions nome='HP' ip='192.0.2.123' mac='DE:AD:BE:EF:00:01' patrimônio='001230' setor='RH' />
                    </fieldset>
                </li>
                <li>
                    <fieldset className={styles.session}>
                        <legend className={styles.category}>
                            Impressoras Térmicas
                        </legend>
                        <Sessions nome='Argox' ip='192.0.2.123' mac='DE:AD:BE:EF:00:01' patrimônio='002230' setor='CIDADE' />
                    </fieldset>
                </li>
                <li>
                    <fieldset className={styles.session}>
                        <legend className={styles.category}>
                            Computadores
                        </legend>
                        <Sessions nome='INTEL' ip='192.0.2.123' mac='DE:AD:BE:EF:00:01' patrimônio='003230' setor='TI' />
                    </fieldset>
                </li>
            </ul>
        </section>
    )
}

export default General