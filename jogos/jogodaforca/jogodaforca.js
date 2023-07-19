const c =(el)=>document.querySelector(el)
let perde = 0
let vence = 0
let letrac = false

let dicas = ['FRUTA', 'CÉU', 'ROUPA', 'PLANETA', 'FRUTA', 'CARRO', 'TIME', 'TIME', 'PAÍS', 'ESTADO', 'ANIMAL', 'ANIMAL']
let palavra = ['MANGA', 'NUVEM', 'CAMISA', 'SATURNO', 'LARANJA', 'FERRARI', 'FLAMENGO', 'LIVERPOOL', 'ANGOLA', 'AMAZONAS', 'CACHORRO', 'CASCAVEL']
let inputNewValue = [[c('#letra1')], [c('#letra2')], [c('#letra3')], [c('#letra4')], [c('#letra5')], [c('#letra6')], [c('#letra7')],
[c('#letra8')],[c('#letra9')], [c('#letra10')]]

let divClassNew = [[c('.keyq')], [c('.keyw')], [c('.keye')], [c('.keyr')], [c('.keyt')], [c('.keyy')], [c('.keyu')], [c('.keyi')],
[c('.keyo')], [c('.keyp')], [c('.keya')], [c('.keys')], [c('.keyd')], [c('.keyf')], [c('.keyg')], [c('.keyh')], [c('.keyi')],
[c('.keyj')], [c('.keyk')], [c('.keyl')], [c('.keyz')], [c('.keyx')], [c('.keyc')], [c('.keyv')], [c('.keyb')], [c('.keyn')], [c('.keym')]]

let alfabeto = [['q'], ['w'], ['e'], ['r'], ['t'], ['y'], ['u'], ['i'], ['o'], ['p'], ['a'], ['s'], ['d'], ['f'], ['g'], ['h'], ['j'], ['k'],
['l'], ['ç'], ['z'], ['x'], ['c'], ['v'], ['b'], ['n'], ['m']]

let wordchooseseparada = ''
let wordchoose = ''

const random = (min,max) => Math.floor(Math.random() * (max - min) + min)
wordchoose = (palavra[random(0, palavra.length)])
wordchooseseparada = wordchoose.split('')
let letracerta = document.querySelectorAll('.letracerta input')
for(let i in wordchooseseparada) {
  inputNewValue[i].value = wordchooseseparada[i]
  letracerta[i].value = '_'
  //letracerta[i].style.textDecorationLine = 'underline'
}

for(let i in dicas) {
  if(wordchoose == palavra[i]) {
    c('.dica-principal').innerHTML = dicas[i]
  }
}

function clicar(tecla) {
  let letra = document.querySelector(`.key${tecla}`)
  let clasnew = document.querySelectorAll('.teclas div')
  let f = document.querySelectorAll('.letracerta input')

  for(let i in inputNewValue) {
    if (letra.innerHTML == inputNewValue[i].value) {
      f[i].style.textDecorationLine = 'none'
      f[i].value = inputNewValue[i].value
      letrac = true
      vence ++
      checarcerto(letra)
    }
  }

  if(letrac == false) {
    perde ++
    checarerrado(letra)
  }

  for(let k in divClassNew) {
    if(clasnew[k].style.background == 'green') {
      newOnclick(clasnew, k)
    } else if(clasnew[k].style.background == 'brown') {
      newOnclick(clasnew, k)
    }
  }

  letrac = false

  if (perde == 1) {
    c('.cabeca').style.display = 'block'
  } else if(perde == 2) {
    c('.torax').style.display = 'block'
  } else if(perde == 3) {
    c('.braco').style.display = 'block'
  } else if(perde == 4) {
    c('.braco2').style.display = 'block'
  } else if(perde == 5) {
    c('.perna').style.display = 'block'
  } else if(perde == 6) {
    c('.perna2').style.display = 'block'
    c('.resp').innerHTML = 'VOCÊ PERDEU!'
    c('.perdeu').innerHTML = 'A palavra é: <br/>'+wordchoose
  }

  if(vence == wordchooseseparada.length) {
    c('.resp').innerHTML = 'VOCÊ VENCEU!'
  }
}

function checarcerto(letter) {
  letter.style.background = 'green'
  letter.style.cursor = 'default'
}

function checarerrado(letter) {
  letter.style.background = 'brown'
  letter.style.cursor = 'default'
}

function newOnclick(click, c) {
  click[c].removeAttribute('onclick')
}

function rec() {
  let teclas = document.querySelectorAll('.teclas div')
  for(let k in divClassNew) {
    teclas[k].setAttribute('onclick', `clicar('.key${alfabeto[k]}')`)
    teclas[k].style.background = ''
    teclas[k].style.cursor = 'pointer'

    perde = 0
    vence = 0
    letrac = false

    c('.resp').innerHTML = ''
    c('.perdeu').innerHTML = ''
    c('.cabeca').style.display = 'none'
    c('.torax').style.display = 'none'
    c('.braco').style.display = 'none'
    c('.braco2').style.display = 'none'
    c('.perna').style.display = 'none'
    c('.perna2').style.display = 'none'
  }

  const random = (min,max) => Math.floor(Math.random() * (max - min) + min)
  wordchoose = (palavra[random(0, palavra.length)])
  wordchooseseparada = wordchoose.split('')
  let letracerta = document.querySelectorAll('.letracerta input')

  let i = 10

  while(i > 0) {
    i--
    letracerta[i].value = ''
  }

  for(let i in wordchooseseparada) {
    inputNewValue[i].value = wordchooseseparada[i]
    letracerta[i].value = '_'
    //letracerta[i].style.textDecorationLine = 'underline'
  }

  for(let i in dicas) {
    if(wordchoose == palavra[i]) {
      c('.dica-principal').innerHTML = dicas[i]
    }
  }
}
