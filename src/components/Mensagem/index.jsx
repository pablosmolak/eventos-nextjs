import styles from "./styles.module.css"
export default function Mensagem({texto, tipo}){
    const estilo = {
        erro :{ 'background-color' : "red",
                'color' : 'white'}
    }
    return(
        <>
            <div className={styles.cardMensagem} style={tipo == "erro" ? estilo.erro:styles.sucesso }>
                <h4 >{texto}</h4>
            </div>
        </>
    )
}