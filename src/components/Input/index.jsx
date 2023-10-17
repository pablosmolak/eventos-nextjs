import styles from "./styles.module.css"
export default function Input({placeholder, tipo,id,valor,change, nome}){
    return(
        <>
            <input className={styles.input}
                   placeholder={placeholder}
                   name={nome}
                   type={tipo}
                   id={id}
                   value={valor}
                   onChange={change}
            />

        </>
    )
}