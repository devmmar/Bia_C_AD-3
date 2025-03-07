import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar.jsx"
import { Post } from "./components/Post.jsx"
import styles from "./App.module.css"
import fundo from "./assets/fundo.jpg"

export function App(){
  return(
    <div>

      <div className={styles.ghost}></div>
      <Header/>
      <div className={styles.ghost_baixo}></div>

      <div className='interface'>
        <div className={styles.wrapper}>
          <Sidebar/>

          <main>
            <Post conteudoUm={'GALERIA DE ETERNOS COMANDANTES DA BATERIA DE COMANDO DA AD/3'} conteudoDois={'Comandante atual: Cap Breno Gomes Silva'} imagemFundo={fundo}/>
            <Post/>
            <Post/>
          </main>
        </div>
      </div>
    </div>
  )
}
