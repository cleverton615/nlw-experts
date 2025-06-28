const perguntas = [
  {
    pergunta: "Qual é a função principal do sistema operacional em um computador?",
    respostas: [
      "Controlar o hardware e fornecer serviços para os programas",
      "Editar documentos de texto",
      "Acessar a internet",
    ],
    correta: 0
  },
  {
    pergunta: "O que significa a sigla 'CPU'?",
    respostas: [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Control Processing Unit",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a principal função da memória RAM?",
    respostas: [
      "Armazenar permanentemente os dados",
      "Executar cálculos matemáticos",
      "Armazenar temporariamente dados e programas em uso",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o componente responsável por exibir imagens no monitor?",
    respostas: [
      "Placa de rede",
      "Placa de vídeo",
      "Placa de som",
    ],
    correta: 1
  },
  {
    pergunta: "O que é um software?",
    respostas: [
      "Parte física do computador",
      "Conjunto de instruções que o computador segue",
      "Dispositivo de armazenamento",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a função de um navegador de internet?",
    respostas: [
      "Proteger o computador contra vírus",
      "Editar imagens",
      "Acessar e visualizar páginas web",
    ],
    correta: 2
  },
  {
    pergunta: "O que significa 'backup' em informática?",
    respostas: [
      "Atualização de software",
      "Cópia de segurança de dados",
      "Formatação de disco",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a unidade de medida básica de armazenamento de dados?",
    respostas: [
      "Bit",
      "Byte",
      "Hertz",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a função de um antivírus?",
    respostas: [
      "Acelerar a velocidade de internet",
      "Proteger o computador contra software malicioso",
      "Aumentar a capacidade de armazenamento",
    ],
    correta: 1
  },
  {
    pergunta: "O que é um periférico de entrada?",
    respostas: [
      "Dispositivo que envia dados para o computador",
      "Dispositivo que recebe dados do computador",
      "Dispositivo que armazena dados",
    ],
    correta: 0
  },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    //remote o resposta A
    quizItem.querySelector('dl dt').remove()
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }