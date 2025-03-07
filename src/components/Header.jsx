import styles from './Header.module.css'
import logo from '../assets/logo.png'
import { Button } from './Button.jsx'

export function Header() {
    return (
        <div>
            <header className={styles.header}>
                <div className='interface'>
                    <div className={styles.dimen_header}>
                        <div className={styles.container}>
                            <img className={styles.img_logo} src={logo} alt="Bateria Comando AD/ 3" />
                            <div>
                                <h1 className={styles.title}>
                                    Comando da AD/3
                                </h1>
                                <h1 className={styles.subtitle}>
                                    BATERIA DE COMANDO
                                    <br />
                                    DA ARTILHARIA DIVISIONÁRIA/ 3
                                </h1>
                            </div>
                        </div>
                        <div className={styles.button_header}>
                            <Button link={'https://google.com'} style={{ backgroundColor: 'var(--gray-100)' }}>Entrar em Contato</Button>
                        </div>
                    </div>
                </div>
            </header>

            <div className={styles.header_baixo}>
                <div className='interface'>
                    <h1 className={styles.title_info}>
                        INFORMATIVO DA BATERIA DE COMANDO DA AD/3
                    </h1>
                </div>
            </div>
        </div>
    )
}