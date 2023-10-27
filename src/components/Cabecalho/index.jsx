import Link from "next/link"
import styles from "./styles.module.css"
export default function Cabecalho({titulo}){
    
    return(
        <header className={styles.cabecalho}>
            <Link href={"/"} className={styles.titulo}><h1>Plataforma de Eventos</h1></Link> 
            <p><Link href={'/eventos'} className={styles.btncriar}>Novo Evento</Link></p>   
        </header>
    )
}