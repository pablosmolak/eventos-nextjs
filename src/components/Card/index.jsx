import Link from 'next/link'
import styles from './styles.module.css'

export default function Card({ id, titulo, dataInicio, dataFim}){
    return(
        <>
            <div className={styles.card}>
                <Link href={`/eventos/${id}`}>
                <h2 className={styles.cardTitulo}>{titulo}</h2>
                <p>Data Início: {dataInicio}</p>
                <p>Data Fim: {dataFim}</p>
                </Link>

            </div>
        </>
    )
}