import CD342 from '../img/grupo-mateus.png'

import styles from './Home.module.css'

function Home() {

    return (
        <section>
            <img src={CD342} alt='Logo Grupo Mateus'/>
            <p>
                Sistema de catalogação de patrimônio <span>CD</span> <span>342</span>
            </p>
        </section>
    )
}

export default Home