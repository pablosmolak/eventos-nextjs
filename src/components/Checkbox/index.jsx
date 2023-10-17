import style from "./styles.module.css"

export default function Checkbox({id, change,...props}){
    return(
    <>
        <input type="checkbox" 
               id={id}
               onChange={change} 
               {...props}
        />
    </>
    )
}