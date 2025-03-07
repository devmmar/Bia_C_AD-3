import styles from './Button.module.css'

export function Button({children, style, link}){
    return(
        <div>
            <a className={styles.link_name} href={link} target='_blank'>
                <button className={styles.button} style={style}>
                    {children}
                </button>
            </a>
        </div>
    )
}