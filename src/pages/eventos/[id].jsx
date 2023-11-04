import Cabecalho from "@/components/Cabecalho";
import Rodape from "@/components/Rodape";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { api } from "@/service/api";
import Mensagem from "@/components/Mensagem";
import styles from "@/styles/eventos.module.css"
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
                .catch((error) => {
                    console.log(error)
                    if (error.response.status == 404 || error.response.status == 500) {
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
                    },500)
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
                                    <div className={styles.botoesContainer}>
                                        <div className={styles.botoes}>
                                            <div>
                                                <Link href={`alterar/${router.query.id}`}><img className={styles.alterar} src="/lapis.svg"/></Link>
                                            </div>
                                            <div>
                                                <a onClick={deletar} ><img className={styles.deletar} src="/lixeira.svg" alt="" /></a>
                                            </div>
                                        </div>
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