import styles from "./styles.module.css"
export default function Mensagem({texto, tipo}){
    const estilo = {
        erro :{ 'backgroundColor' : "red",
                'color' : 'white'},
        sucesso: {'backgroundColor' : "green",
                    'color' : 'white'}
    }
    return(
        <>
            <div className={styles.cardMensagem} style={tipo == "erro" ? estilo.erro:estilo.sucesso }>
                <span >{texto}</span>
            </div>
        </>
    )
}