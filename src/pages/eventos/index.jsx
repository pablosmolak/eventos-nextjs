import Cabecalho from "@/components/Cabecalho";
import { useForm } from "react-hook-form";
import { api } from "@/service/api";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";
import TextArea from "@/components/TextArea";
import styles from '@/styles/cadastro.module.css'


export default function Eventos(){
    const {handleSubmit, control, formState:{errors}} = useForm()
   
    async function cadastrar(data){
        try{
            console.log(data)
            const resp = await api.post('/eventos', data)

        }catch (error) {
            console.log(error)
        }

    }
    return(
        <>
              <Cabecalho titulo={"cu branco"}/>

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
                                    rules={{required:"descricão do Evento é Obrigatória!"}}                       
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
                        
                        <div>
                            <Input
                                type={'file'}
                                control={control}
                                errors={errors}
                                name={'imagem'}
                            />
                        </div>  
                    </section>
                
                <Button value="Realizar Inscrição" style={{width:"400px", backgroundColor: "var(--corPadrao)"}}  />

              </form>

        </>
    )
}