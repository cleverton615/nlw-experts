const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de marcação",
        "Um sistema operacional",
        "Uma linguagem de programação",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a principal função do console.log() em JavaScript?",
      respostas: [
        "Imprimir documentos HTML",
        "Registrar mensagens no console do navegador",
        "Executar funções assíncronas",
      ],
      correta: 1
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "var nomeVariavel;",
        "variavel = 10;",
        "const = nomeVariavel;",
      ],
      correta: 0
    },
    {
      pergunta: "O que é um array em JavaScript?",
      respostas: [
        "Um tipo de dado para armazenar números inteiros",
        "Uma estrutura de controle de fluxo",
        "Uma lista ordenada de valores",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o operador de comparação estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "!=",
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um tipo de dado para armazenar textos",
        "Um bloco de código reutilizável",
        "Um operador matemático",
      ],
      correta: 1
    },
    {
      pergunta: "Como se realiza uma estrutura condicional simples em JavaScript?",
      respostas: [
        "if (condicao) { /* código */ }",
        "switch (valor) { case opcao: /* código */ }",
        "for (i=0; i<5; i++) { /* código */ }",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Document Object Model - Modelo de Objeto de Documento",
        "Um framework popular",
        "Um tipo de variável",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método push() em arrays?",
      respostas: [
        "Remover elementos do final do array",
        "Adicionar elementos no início do array",
        "Adicionar elementos no final do array",
      ],
      correta: 2
    },
    {
      pergunta: "O que é uma expressão regular em JavaScript?",
      respostas: [
        "Um tipo de dado para armazenar datas",
        "Um padrão de busca de texto",
        "Uma função para ordenar arrays",
      ],
      correta: 1
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