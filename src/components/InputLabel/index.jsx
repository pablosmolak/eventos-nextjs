import Input from "../Input";
import Label from "../Label";
import styles from "./styles.module.css"

export default function InputLabel({texto, forhtml, tipo, placeholder, id, valor, change, register}){
    return(
        <>
            <div className={styles.inputlabel}>
                <Label texto={texto} forhtml={forhtml}/>
                <Input tipo={tipo} placeholder={placeholder} id={id} valor={valor} change={change} register={register}/>
            </div>
        </>
    )
}