import Cabecalho from "@/components/Cabecalho";
import { useForm } from "react-hook-form";
import { api } from "@/service/api";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";
import TextArea from "@/components/TextArea";
import styles from '@/styles/cadastro.module.css'
import { useRouter } from "next/router";
import Rodape from "@/components/Rodape";
import Mensagem from "@/components/Mensagem";
import { useState } from "react";


export default function Eventos(){
    const {handleSubmit, control, formState:{errors}} = useForm()
    const [mensagem, setMensagem] = useState({existe:false ,texto:"", tipo:""})

    let router = useRouter()
    

   
    async function cadastrar(data){
        setMensagem({existe:false})
       
        try{
            const resp = await api.post('/eventos', data)
            setMensagem({existe:true,texto:"Evento Cadastrado Com Sucesso!", tipo:'sucesso'})
            setTimeout(()=>{
                router.push(`/eventos/${resp.data.id}`)
            },1000)

        }catch (error) {
            setMensagem({existe:true, texto:"Erro ao Cadastrar Evento!", tipo:"erro"})
            //console.log(error)
        }

    }
    return(
        <>
              <Cabecalho/>
              
                {mensagem.existe && (<Mensagem texto={mensagem.texto} tipo={mensagem.tipo}/>)}
                <form className={styles.forms} onSubmit={handleSubmit(cadastrar)}>
                    <section className={styles.form}>
                        <div className={styles.input}>
                            <div>
                                <Label texto="Titulo" forhtml="titulo"/>
                                <Input                 
                                    type="text" 
                                    placeholder="Ex.: Workshop de Artesanato"
                                    id="titulo" 
                                    name="titulo"      
                                    control={control}
                                    errors={errors}
                                    rules={{required:"Titulo do Evento é Obrigatório!"}}                          
                                />
                            </div>
                            <div>
                                <Label texto="Descricao" forhtml="descricao"/>
                                <TextArea 
                                    linhas={3}
                                    placeholder="Ex.: Workshop de Artesanato"
                                    id="descricao" 
                                    name="descricao"
                                    errors={errors}
                                    control={control}     
                                    rules={{required:"Descricão do Evento é Obrigatória!"}}                       
                                />
                            </div>
                            <div>
                                <Label texto="Data Inicio" forhtml="dataInicio"/>
                                <Input     
                                    type="date"
                                    id="dataInicio" 
                                    name="dataInicio"
                                    errors={errors}
                                    control={control}      
                                    rules={{required:"Titulo do Inicio do Evento é Obrigatória!"}}                      
                                />
                            </div>
                            <div>
                                <Label texto="Data Fim"  forhtml="dataFim"/>
                                <Input
                                    type="date" 
                                    id="dataFim" 
                                    name="dataFim"
                                    errors={errors}
                                    control={control}    
                                    rules={{required:"Data do Fim do Evento é Obrigatória!"}}                        
                                />
                            </div>
                            <div>
                                <Label texto="Local" forhtml="local"/>
                                <Input   
                                    type="text" 
                                    placeholder="Ex.: Workshop de Artesanato"
                                    id="local" 
                                    errors={errors}
                                    name="local"
                                    control={control} 
                                    rules={{required:"Local do Evento é Obrigatório!"}}                           
                                />
                            </div>
                        </div>
                        
                        <div className={styles.input}>
                            <Label texto="Imagem" forhtml="imagem"/>
                            <Input
                                type={'text'}
                                placeholder="Ex.: http://imagem.com"
                                control={control}
                                errors={errors}
                                name={'imagem'}
                                rules={{required:"Imagem do Evento é Obrigatória!"}}
                            />
                        </div>  
                    </section>
                
                <Button value="Realizar Inscrição" style={{width:"400px", backgroundColor: "var(--corPadrao)"}}  />
                
                <Rodape style={{position:'absolute',bottom: '0'}}/>
              </form>

        </>
    )
}