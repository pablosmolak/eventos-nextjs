import Cabecalho from "@/components/Cabecalho";
import Rodape from "@/components/Rodape";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { api } from "@/service/api";
import Mensagem from "@/components/Mensagem";
import styles from "@/styles/eventos.module.css"
import Button from "@/components/Button";
import Link from "next/link";

export default function EventosID(){
    const [evento,setEvento] = useState()
    const [mensagem, setMensagem] = useState(false)

    const router = useRouter()

    useEffect(() => {

        if(router.query.id){
            api.get(`/eventos/${router.query.id}`)
                .then(result => setEvento(result.data))
                .catch(function (error) {
                    if (error.response.status == 404) {
                        setMensagem(true)    
                    } 
                })
        }

    },[router])

    return(


       
        <>
            <Cabecalho/>
            {mensagem && (<Mensagem texto={"Evento não encontrado!"} tipo={"erro"}/>)}
            {evento &&(
                <div>
                    <div className={styles.backimage} style={{'background-image': `url(/${evento.imagem})`}}>
                        <div className={styles.desfocar}>
                            <img className={styles.imagem}src={`/${evento.imagem}`}/>
                            <div>
                                <Link className={styles.alterar}href={`alterar/${router.query.id}`}><img src="/lapis.svg"/></Link>
                            </div>
                        </div>
                    </div>
                    <h1>{evento.titulo}</h1>
                    <p>{evento.descricao}</p>

                </div>
            )}
            <Rodape/>
        </>
    )
}