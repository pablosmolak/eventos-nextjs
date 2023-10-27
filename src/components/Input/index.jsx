import styles from "./styles.module.css"
import { Controller } from "react-hook-form"

export default function Input({name, control, errors, rules, type, placeholder, ...props }
  ){
    return(
        <>

            <Controller
                control={control}
                name={name}
                rules={rules}
                render={({field}) => 
                    <input {...field}
                        className={styles.input}
                        placeholder={placeholder}
                        name={name}
                        type={type}
                        value={field.value || ""}
                        {...props}
                    />
                }
            />
            {errors[name] && <span className={styles.erro}>{errors[name].message}</span>}
    

        </>
    )
}