import Cabecalho from '@/components/Cabecalho'
import ListCard from '@/components/ListCard/Index'
import Rodape from '@/components/Rodape'
import styles from '@/styles/Home.module.css'


export default function Home() {
  return (
    <>
        <div className={styles.page}>

          <Cabecalho/>

          <div className={styles.conteudo}>
            <ListCard/>
          </div>

          <Rodape style={{bottom: '0'}}/>
          
        </div>
    </>
  )
}
