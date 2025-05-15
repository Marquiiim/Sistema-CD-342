import React, { useState } from 'react';
import styles from './Form.module.css';

function Form() {
    const [formData, setFormData] = useState({
        nome: '',
        ip: '',
        mac: '',
        patrimonio: '',
        setor: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        saveToJsonFile();
    };

    const saveToJsonFile = () => {
        const dataStr = JSON.stringify(formData, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = 'dados-equipamento.json';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setFormData({
            nome: '',
            ip: '',
            mac: '',
            patrimonio: '',
            setor: ''
        });
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title_form}>
                Cadastro de Equipamentos
            </h1>

            <form className={styles.container_form} onSubmit={handleSubmit}>
                <fieldset className={styles.content_form}>
                    <legend className={styles.info_form}>
                        Informações do Equipamento
                    </legend>

                    <div className={styles.form_group}>
                        <label>Nome</label>
                        <input
                            type='text'
                            name='nome'
                            value={formData.nome}
                            onChange={handleChange}
                            required
                            placeholder='Digite o nome do equipamento'
                        />
                    </div>

                    <div className={styles.form_group}>
                        <label>Endereço IP</label>
                        <input
                            type='text'
                            name='ip'
                            value={formData.ip}
                            onChange={handleChange}
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
                            name='mac'
                            value={formData.mac}
                            onChange={handleChange}
                            required
                            pattern="^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$"
                            placeholder='Digite o MAC do equipamento'
                            title='Digite um MAC válido (ex: 00:1A:2B:3C:4D:5E)'
                        />
                    </div>

                    <div className={styles.form_group}>
                        <label>Patrimônio</label>
                        <input
                            type='number'
                            name='patrimonio'
                            value={formData.patrimonio}
                            onChange={handleChange}
                            required
                            placeholder='Digite o Patrimônio do equipamento'
                        />
                    </div>

                    <div className={styles.form_group}>
                        <label>Setor</label>
                        <select
                            name='setor'
                            value={formData.setor}
                            onChange={handleChange}
                            required
                        >
                            <option value=''>Selecione uma opção</option>
                            <option value='TI'>TI</option>
                            <option value='RH'>Recursos Humanos</option>
                            <option value='Fat_ext'>Faturamento Externo</option>
                            <option value='Fat_int'>Faturamento Interno</option>
                        </select>
                    </div>

                    <button type='submit'>Adicionar</button>
                </fieldset>
            </form>
        </div>
    );
}

export default Form;