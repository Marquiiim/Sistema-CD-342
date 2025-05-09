import Sessions from "./Sessions/Sessions"

import styles from './General.module.css'

function General() {

    return (
        <section>
            <ul>
                <li>
                    <fieldset className={styles.session}>
                        <legend className={styles.category}>
                            Impressoras Laser
                        </legend>
                        <Sessions categoria='Impressoras Laser' nome='HP' ip='192.0.2.123' mac='DE:AD:BE:EF:00:01' patrimônio='000123' setor='RH' />
                    </fieldset>
                </li>
                <li>
                    <fieldset className={styles.session}>
                        <legend className={styles.category}>
                            Impressoras Térmicas
                        </legend>
                        <Sessions nome='Argox' ip='192.0.2.123' mac='DE:AD:BE:EF:00:01' patrimônio='000123' setor='CIDADE' />
                    </fieldset>
                </li>
                <li>
                    <fieldset className={styles.session}>
                        <legend className={styles.category}>
                            Computadores
                        </legend>
                        <Sessions categoria='Computadores' nome='INTEL' ip='192.0.2.123' mac='DE:AD:BE:EF:00:01' patrimônio='000123' setor='TI' />
                    </fieldset>
                </li>
            </ul>
        </section>
    )
}

export default General