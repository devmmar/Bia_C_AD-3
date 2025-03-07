import styles from './Post.module.css'

export function Post({conteudoUm, conteudoDois, imagemFundo}){
    return(
        <div className={styles.post}>
            <div className={styles.fundo} style={{backgroundImage: `url(${imagemFundo})`}}>

            </div>

            <div className={styles.conteudo}>
                <h1 className={styles.conteudoUm}>
                    {conteudoUm}
                </h1>
                <h2 className={styles.conteudoDois}>
                    {conteudoDois}
                </h2>
            </div>
        </div>
    )
}