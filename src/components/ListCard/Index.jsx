import { useEffect, useState } from "react"
import Card from "../Card"
import styles from "./styles.module.css"
import { api } from "@/service/api"
import { mascaraData } from "@/utils/mascaras"


export default function ListCard(){

    const [eventos, setEventos] = useState([])

    useEffect(()=>{
        api.get('/eventos')
            .then(result => setEventos(result.data))
    }, [])
    

    

    return(
        <>
            <div className={styles.listCard}>
                {eventos?.map(e => (
                <Card key={e.id}
                    id={e.id}
                    imagem={e.imagem}
                    titulo={e.titulo}
                    dataInicio={mascaraData(e.dataInicio)}
                    dataFim={mascaraData(e.dataFim)}
                    local={e.local}
                />
            ))}
            </div>
            
        </>
    )
}