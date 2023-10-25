import styles from "./styles.module.css"

export default function Rodape({...props}){

    return(
        <>
            <footer className={styles.rodape}{...props}>
               <p>Todos os Direitos Reservados à Plataforma de Eventos©️</p>
            </footer>
        </>
    )
}