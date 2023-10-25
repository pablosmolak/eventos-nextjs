import Cabecalho from "@/components/Cabecalho";
import Rodape from "@/components/Rodape";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { api } from "@/service/api";
import Mensagem from "@/components/Mensagem";
import styles from "@/styles/eventos.module.css"
import Button from "@/components/Button";
import Link from "next/link";
import { mascaraDataEvento } from "@/utils/mascaras";

export default function EventosID(){
    const [evento,setEvento] = useState()
    const [mensagem, setMensagem] = useState({existe:false ,texto:"", tipo:""})

    const router = useRouter()

    useEffect(() => {

        if(router.query.id){
            api.get(`/eventos/${router.query.id}`)
                .then(result => setEvento(result.data))
                .catch(function (error) {
                    if (error.response.status == 404) {
                        setMensagem({existe:'true', texto:"Evento não encontrado!", tipo:"erro"})  
                    } 
                })
        }

    },[router])

    async function deletar(){
        try {
            api.delete(`/eventos/${router.query.id}`)
                .then(()=>{
                    setMensagem({existe:'true', texto:"Evento Deletado com Sucesso!", tipo:"sucesso"})
                    setTimeout(()=>{
                        router.push(`/`)
                    },900)
                })
        } catch (error) {
            
        }
    }

    return(


       
        <>
            <div className={styles.page}>

                <Cabecalho/>

                <div className={styles.Pageconteudo}>
                    {mensagem.existe && (<Mensagem texto={mensagem.texto} tipo={mensagem.tipo}/>)}
                    {evento &&(
                        <div>
                            <div className={styles.backimage} style={{'backgroundImage': `url(${evento.imagem})`}}>
                                <div className={styles.desfocar}>
                                    <img className={styles.imagem}src={`${evento.imagem}`}/>
                                    <div>
                                        <Link className={styles.alterar}href={`alterar/${router.query.id}`}><img src="/lapis.svg"/></Link>
                                    </div>
                                    <div>
                                        <Button onClick={deletar}/>
                                    </div>
                                </div>
                            </div>
                            <section className={styles.conteudo}>
                                <h1 className={styles.conteudoTitulo}>{evento.titulo}</h1>
                                <div className={styles.conteudoInfo}> 
                                    <p>{evento.descricao}</p>
                                    <div className={styles.conteudoEmojis}>
                                        <h5 className={styles.data}>🗓️<p>{mascaraDataEvento(evento.dataInicio)}</p><p>{"à"}</p><p>{mascaraDataEvento(evento.dataFim)}</p></h5>
                                        <p>📍 {evento.local}</p>
                                    </div>
                                    
                                </div>

                            </section>

                        </div>
                    )}
                </div>

                <Rodape/>
            </div>
        </>
    )
}