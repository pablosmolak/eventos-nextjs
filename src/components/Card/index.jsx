import Link from 'next/link'
import styles from './styles.module.css'

export default function Card({ id, titulo, dataInicio, dataFim, imagem,local}){
    return(
        <>
            <div className={styles.card}>
                <Link href={`/eventos/${id}`}>
                <img src={`${imagem}`} className={styles.imagens}/>
                <div className={styles.info}>
                    <h5 className={styles.data}><p>{dataInicio}</p><p style={{color: "#A9A9A9"}}>{">"}</p><p>{dataFim}</p></h5>
                    <h2 className={styles.cardTitulo}>{titulo}</h2>
                    <h3 className={styles.local}>{local}</h3>
                </div>
                </Link>

            </div>
        </>
    )
}