import { Controller } from "react-hook-form"
import styles from "./styles.module.css"
export default function TextArea({id, name, linhas, change, colunas, placeholder, valor,control,rules,errors,...props}){
    return(
        <>
            <Controller
                control={control}
                name={name}
                rules={rules}
                render={({field}) => 
                    <textarea {...field} 
                            className={styles.textarea} 
                            id={id} 
                            name={name} 
                            rows={linhas} 
                            cols={colunas} 
                            placeholder={placeholder}
                            value={field.value || ""} 
                            {...props}
                    />
                }
            />
            {errors[name] && <span className={styles.erro}>{errors[name].message}</span>}
        </>
    )
}