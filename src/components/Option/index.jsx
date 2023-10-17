import styles from "./styles.module.css";

export default function Option({children, valor, ...props}) {
  return <option className={styles.option}       
                 {...props}    
          >
                 {children}
          </option>
}