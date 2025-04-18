import { useState } from 'react'
import FormVagas from '../../components/FormVagas'

import Vaga from '../../components/Vaga'

import { Lista } from './styles'

//TIPAGEM PARA A VAGA DE EMPREGO
type Vaga = {
  id: string
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[] //ARRAY DE STRING
}

//LISTA DE TODAS AS VAGAS
const vagas = [
  {
    id: 1,
    titulo: 'Desenvolvedor front-end',
    localizacao: 'remoto',
    nivel: 'junior',
    modalidade: 'clt',
    salarioMin: 3000,
    salarioMax: 4500,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 2,
    titulo: 'Desenvolvedor NodeJS',
    localizacao: 'remoto',
    nivel: 'pleno',
    modalidade: 'pj',
    salarioMin: 5000,
    salarioMax: 6500,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 3,
    titulo: 'Desenvolvedor fullstack',
    localizacao: 'remoto',
    nivel: 'pleno',
    modalidade: 'pj',
    salarioMin: 4000,
    salarioMax: 6000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 4,
    titulo: 'Designer de interfaces',
    localizacao: 'remoto',
    nivel: 'junior',
    modalidade: 'clt',
    salarioMin: 4000,
    salarioMax: 5000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 5,
    titulo: 'Desenvolvedor front-end',
    localizacao: 'remoto',
    nivel: 'senior',
    modalidade: 'clt',
    salarioMin: 7000,
    salarioMax: 8000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 6,
    titulo: 'Desenvolvedor front-end para projeto internacional',
    localizacao: 'remoto',
    nivel: 'senior',
    modalidade: 'pj',
    salarioMin: 12000,
    salarioMax: 15000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 7,
    titulo: 'Desenvolvedor front-end',
    localizacao: 'São Paulo/SP',
    nivel: 'junior',
    modalidade: 'clt',
    salarioMin: 4000,
    salarioMax: 5000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  }
]

//FUNÇÃO PARA FILTRA AS VAGAS
const ListaVagas = () => {
  //USESTATE PARA MUDAR E ARMAZENAR O VALOR DO FILTRO EM STRING
  //INICIALMENTE SEM NADA
  const [filtro, setFiltro] = useState<string>('')

  //FILTRAGEM DAS VAGAS
  const vagasFiltradas = vagas.filter(
    //CONDIÇÃO DA FILTRAGEM:
    //O FILTER PERCORRE O ARRAY DE VAGAS UMA POR UMA
    //PARA CADA ITEM (X) ELE CHAMA A FUNÇÃO ABAIXO
    //TRANSFORMA TUDO EM MINÚSCULA E PROCURA O FILTRO
    //DENTRO DO TÍTULO. SE O TERMO ESTIVER EM POSIÇÃO MAIOR QUE ZERO É RETORNADO
    (x) => x.titulo.toLocaleLowerCase().search(filtro) >= 0
  )

  return (
    <div>
      {/* ATUALIZA O FILTRO CONFORME O USUÁRIO PESQUISA */}
      <FormVagas aoPesquisar={(termo: string) => setFiltro(termo)} />
      <Lista>
        {/* AS VAGAS SÃO MAPEADAS PARA APARECEREM APENAS AS QUE PASSAM NO FILTRO*/}
        {vagasFiltradas.map((vag) => (
          <Vaga
            key={vag.id}
            titulo={vag.titulo}
            localizacao={vag.localizacao}
            nivel={vag.nivel}
            modalidade={vag.modalidade}
            salarioMin={vag.salarioMin}
            salarioMax={vag.salarioMax}
            requisitos={vag.requisitos}
          />
        ))}
      </Lista>
    </div>
  )
}

export default ListaVagas
