let nome = ('Victor')
const cor = ('verde')
let comida = ('pizza')
const musica = ('sambinha')

// 1º Solução
let frase = ('Olá João, analisei suas preferências e estou vendo que sua cor preferida é verde, seu prato preferido  é macarrão e  que  você  gosta  de  ouvir mpb,  agora  que  já  sei  de  tudo  isso,  vou selecionar as melhores notícias para você ler hoje!')
console.log(frase
    .replace('João', nome)
    .replace('verde',cor)
    .replace('macarrão',comida)
    .replace('mpb',musica))


