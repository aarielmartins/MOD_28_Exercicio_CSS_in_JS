import { FormEvent, useState } from 'react'
import { FormularioPesquisa, InputPesquisar, BotaoPesquisar } from './styles'

//CRIA A NECESSIDADE DE RECEBER A FUNÇÃO "AO PESQUISAR"
//NO COMPONENTE. ESTA RECEBE UMA STRING E RETORNA VAZIO
type Props = {
  aoPesquisar: (termo: string) => void
}

//FORMVAGAS COM A PROPS AO PESQUISAR
const FormVagas = ({ aoPesquisar }: Props) => {
  //CRIA A CONSTANTE TERMO E SEU USESTATE COMO STRING E VAZIO
  const [termo, setTermo] = useState<string>('')

  //E: FORMEVENT<HTMLFORMELEMENT> SIGNIFICA QUE É UM EVENTO DE
  //FORMULARIO QUE VEIO DE UM <FORM>
  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    //IMPEDE QUE O FORMULARIO RECARREGUE A PÁGINA
    e.preventDefault()
    //FUNÇÃO AO PERQUISAR EM LETRAS MINÚSCULAS
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    //QUANDO SUBMITE O FORMULARIO COMEÇA A FUNÇÃO "AOENVIARFORM"
    //QUE INICIA A FUNÇÃO "AO PESQUISAR" COM O TERMO ATUALIZADO
    <FormularioPesquisa onSubmit={aoEnviarForm}>
      <InputPesquisar
        placeholder="Front-end, fullstack, node, design"
        //QUANDO O USUÁRIO DIGITA ATUALIZA O TERMO
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BotaoPesquisar type="submit">Pesquisar</BotaoPesquisar>
    </FormularioPesquisa>
  )
}
export default FormVagas
