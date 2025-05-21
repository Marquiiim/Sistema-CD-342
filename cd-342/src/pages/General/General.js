import { useState, useEffect } from "react"
import axios from "axios"

import Sessions from "./Sessions/Sessions"

import styles from './General.module.css'

function General() {

    const [error, setError] = useState(null)

    const [impressoraslaser, setImpressorasLaser] = useState([])
    const [impressorastermicas, setImpressorasTermicas] = useState([])
    const [computadores, setComputadores] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/api/dados')

            const laser = response.data.filter(item => String(item.tipo_equipamento) === '1');
            const termicas = response.data.filter(item => String(item.tipo_equipamento) === '2');
            const computadoresData = response.data.filter(item => String(item.tipo_equipamento) === '3');

            setImpressorasLaser(laser);
            setImpressorasTermicas(termicas);
            setComputadores(computadoresData);
        } catch (err) {
            setError(err.message)
        }
    }

    const handleRemove = async (patrimonio) => {
        try {
            await axios.delete(`http://127.0.0.1:5000/api/dados/${patrimonio}`)

            setImpressorasLaser(prev => prev.filter(item => item.patrimonio !== patrimonio));
            setImpressorasTermicas(prev => prev.filter(item => item.patrimonio !== patrimonio));
            setComputadores(prev => prev.filter(item => item.patrimonio !== patrimonio));

        } catch (err) {
            console.error('Erro ao deletar:', err)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <section>
            <ul>
                <li>
                    <fieldset className={styles.session}>
                        <legend className={styles.category}>
                            Impressoras Laser
                        </legend>
                        {impressoraslaser.length > 0 && impressoraslaser.map((item) => (<Sessions
                            nome={item.nome}
                            ip={item.ip}
                            mac={item.mac}
                            patrimonio={item.patrimonio}
                            setor={item.setor}
                            onRemove={handleRemove} />))}
                    </fieldset>
                </li>
                <li>
                    <fieldset className={styles.session}>
                        <legend className={styles.category}>
                            Impressoras Térmicas
                        </legend>
                        {impressorastermicas.length > 0 && impressorastermicas.map((item) => (<Sessions
                            nome={item.nome}
                            ip={item.ip}
                            mac={item.mac}
                            patrimonio={item.patrimonio}
                            setor={item.setor}
                            onRemove={handleRemove} />))}
                    </fieldset>
                </li>
                <li>
                    <fieldset className={styles.session}>
                        <legend className={styles.category}>
                            Computadores
                        </legend>
                        {computadores.length > 0 && computadores.map((item) => (<Sessions
                            nome={item.nome}
                            ip={item.ip}
                            mac={item.mac}
                            patrimonio={item.patrimonio}
                            setor={item.setor}
                            onRemove={handleRemove} />))}
                    </fieldset>
                </li>
            </ul>
        </section>
    )
}

export default General