import React, { useState, useEffect } from 'react'
import axios from 'axios'

import styles from './Form.module.css';

function Form() {
    const [dados, setDados] = useState([])
    const [nome, setNome] = useState('')
    const [ip, setIp] = useState('')
    const [mac, setMac] = useState('')
    const [patrimonio, setPatrimonio] = useState('')
    const [setor, setSetor] = useState('')

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/api/dados')
            .then((res) => setDados(res.data))
            .catch((err) => console.error(err))
    }, [])

    const sendData = () => {
        axios.post('http://127.0.0.1:5000/api/dados', { nome, ip, mac, patrimonio, setor })
            .then((res) => {
                alert(res.data.message)
                setDados([...dados, { nome, ip, mac, patrimonio, setor }])
                setNome('')
                setIp('')
                setMac('')
                setPatrimonio('')
                setSetor('')
            })
            .catch((err) => console.error(err))
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title_form}>
                Cadastro de Equipamentos
            </h1>

            <form className={styles.container_form} onSubmit={(e) => {
                e.preventDefault()
                sendData()
            }}>
                <fieldset className={styles.content_form}>
                    <legend className={styles.info_form}>
                        Informações do Equipamento
                    </legend>

                    <div className={styles.form_group}>
                        <label>Nome</label>
                        <input
                            type='text'
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                            placeholder='Digite o nome do equipamento'
                        />
                    </div>

                    <div className={styles.form_group}>
                        <label>Endereço IP</label>
                        <input
                            type='text'
                            value={ip}
                            onChange={(e) => setIp(e.target.value)}
                            required
                            pattern='^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$'
                            placeholder='Digite o IP do equipamento'
                            title='Digite um IP válido (ex: 192.168.1.1)'
                        />
                    </div>

                    <div className={styles.form_group}>
                        <label>Endereço MAC</label>
                        <input
                            type='text'
                            value={mac}
                            onChange={(e) => setMac(e.target.value)}
                            required
                            pattern="^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$"
                            placeholder='Digite o MAC do equipamento'
                            title='Digite um MAC válido (ex: 00:1A:2B:3C:4D:5E)'
                        />
                    </div>

                    <div className={styles.form_group}>
                        <label>Patrimônio</label>
                        <input
                            type='text'
                            value={patrimonio}
                            onChange={(e) => setPatrimonio(e.target.value)}
                            required
                            placeholder='Digite o Patrimônio do equipamento'
                        />
                    </div>

                    <div className={styles.form_group}>
                        <label>Setor</label>
                        <select
                            value={setor}
                            onChange={(e) => setSetor(e.target.value)}
                            required
                        >
                            <option value=''>Selecione uma opção</option>
                            <option value='TI'>TI</option>
                            <option value='RH'>RH</option>
                            <option value='Fat_ext'>Faturamento Externo</option>
                            <option value='Fat_int'>Faturamento Interno</option>
                            <option value='Finac'>Financeiro</option>
                        </select>
                    </div>

                    <button type='submit'>Adicionar</button>
                </fieldset>
            </form>
        </div>
    );
}

export default Form;