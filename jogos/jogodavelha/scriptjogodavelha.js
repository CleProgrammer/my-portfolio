const c = (cl) => document.querySelector(cl)

let checkPlayerScore = false
let playerScore = 0
let botScore = 0

let winner = false

let XorO = ''

let options = [1,2,3,4,5,6,7,8,9]

let vencedor = [[c('.pos1'), c('.pos2'), c('.pos3')], [c('.pos4'), c('.pos5'), c('.pos6')], [c('.pos7'), c('.pos8'), c('.pos9')],
[c('.pos1'), c('.pos4'), c('.pos7')], [c('.pos2'), c('.pos5'), c('.pos8')], [c('.pos3'), c('.pos6'), c('.pos9')], [c('.pos1'), c('.pos5'), c('.pos9')], 
[c('.pos3'), c('.pos5'), c('.pos7')]]


let vencedorX = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], 
[3, 5, 7]]

let vencedorO = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], 
[3, 5, 7]]

let jogadas = [[1,3,5], [1,3,9], [1,7,9], [1,4,5], [7,5,9], [6,9,8], [2,5,4], [5,3,9]]
let saveJogada = 0

let BotTurn = true

let m = Math.floor(Math.random() * 2)

if (m === 0) {
  c('.xo').style.width = '90px'
  c('.xo').style.height = '90px'
  c('.xo').style.borderBottom = '5px solid white'
  XorO = 'X'
  BotTurn = false
} else {
  c('.xo1').style.width = '90px'
  c('.xo1').style.height = '90px'
  c('.xo1').style.borderBottom = '5px solid white'
  XorO = 'O'
  BotTurn = true
}

BotTurnFunction()

function clicar(value) {

  let index = options.indexOf(parseInt(value[4]))
  if(index > -1) {
    saveJogada = parseInt(value[4])
    options.splice(index, 1)
  }

  for(let i in vencedorX) {
    let indexVencedor2 = vencedorX[i].indexOf(parseInt(value[4]))
    if(indexVencedor2 > -1) {
      vencedorX[i].splice(indexVencedor2, 1)
    }
  }

  for(let i in jogadas) {
    let indexJogadas = jogadas[i].indexOf(saveJogada)
    if(indexJogadas > -1) {
      jogadas[i].splice(indexJogadas, 1)
    }
  }

  if(XorO === 'X') {
    c(`${value}`).style.color = 'blue'
    c(`${value}`).innerHTML = XorO
    c('.xo1').style.width = '90px'
    c('.xo1').style.height = '90px'
    c('.xo1').style.borderBottom = '5px solid white'

    c('.xo').style.width = '80px'
    c('.xo').style.height = '80px'
    c('.xo').style.borderBottom = '0px'
    
    XorO = 'O'
    BotTurn = true

    venceu()
    
    //console.log(options.length)

    BotTurnFunction()
  }
}

function BotTurnFunction() {
  let checkBotTurn = true

  let cont = 1

  if(BotTurn === true && checkPlayerScore === false) {

    for(let i in vencedorO) {
      if(vencedorO[i].length === 1 && c(`.pos${vencedorO[i][0]}`).innerHTML === '') {
        while(cont > 0) {

          let BotThinking = setTimeout(() => {

            c(`.pos${vencedorO[i][0]}`).style.color = 'orangered'
            c(`.pos${vencedorO[i][0]}`).innerHTML = 'O'
      
            c('.xo').style.width = '90px'
            c('.xo').style.height = '90px'
            c('.xo').style.borderBottom = '5px solid white'
      
            c('.xo1').style.width = '80px'
            c('.xo1').style.height = '80px'
            c('.xo1').style.borderBottom = '0px'
      
            XorO = 'X'

            let index = options.indexOf(vencedorO[i][0])
            if(index > -1) {
              saveJogada = vencedorO[i][0]
              options.splice(index, 1)
            }

            for(let i in jogadas) {
              let indexJogadas = jogadas[i].indexOf(saveJogada)
              if(indexJogadas > -1) {
                jogadas[i].splice(indexJogadas, 1)
              }
            }

            console.log(jogadas)
  
            let indexVencedor2 = vencedorO[i].indexOf(vencedorO[i][0])
            if(indexVencedor2 > -1) {
              vencedorO[i].splice(indexVencedor2, 1)
            }

            venceu(BotThinking)

          }, 2000)
          venceu(BotThinking)

          cont --

        }

        checkBotTurn = false

      }
      }

    for(let i in vencedorX) {
      if(vencedorX[i].length === 1 && c(`.pos${vencedorX[i][0]}`).innerHTML === '') {
        while(cont > 0) {

          let BotThinking = setTimeout(() => {

            c(`.pos${vencedorX[i][0]}`).style.color = 'orangered'
            c(`.pos${vencedorX[i][0]}`).innerHTML = 'O'
      
            c('.xo').style.width = '90px'
            c('.xo').style.height = '90px'
            c('.xo').style.borderBottom = '5px solid white'
      
            c('.xo1').style.width = '80px'
            c('.xo1').style.height = '80px'
            c('.xo1').style.borderBottom = '0px'
      
            XorO = 'X'

            let index = options.indexOf(vencedorX[i][0])
            if(index > -1) {
              saveJogada = vencedorX[i][0]
              options.splice(index, 1)
            }

            for(let l in vencedorO) {
              let indexVencedor3 = vencedorO[l].indexOf(vencedorX[i][0])
              if(indexVencedor3 > -1) {
                vencedorO[l].splice(indexVencedor3, 1)
              }
            }

            for(let i in jogadas) {
              let indexJogadas = jogadas[i].indexOf(saveJogada)
              if(indexJogadas > -1) {
                jogadas[i].splice(indexJogadas, 1)
              }
            }
            
            let indexVencedor2 = vencedorX[i].indexOf(vencedorX[i][0])
            if(indexVencedor2 > -1) {
              vencedorX[i].splice(indexVencedor2, 1)
            }

            venceu(BotThinking)
  
          }, 2000)
          venceu(BotThinking)

          cont --

        }

        checkBotTurn = false

      }

    }

    if(checkBotTurn === true && options.length > 0) {
      let choosePosition1 = Math.floor(Math.random() * jogadas.length)
      let choosePosition2 = Math.floor(Math.random() * jogadas[choosePosition1].length)
      let chooseBestOption = jogadas[choosePosition1][choosePosition2]


      while(chooseBestOption === undefined) {
        choosePosition1 = Math.floor(Math.random() * jogadas.length)
        choosePosition2 = Math.floor(Math.random() * jogadas[choosePosition1].length)
        chooseBestOption = jogadas[choosePosition1][choosePosition2]
        console.log(chooseBestOption)
      }

      /*let choosePosition = Math.floor(Math.random() * options.length)
      saveJogada = options[choosePosition]*/

      let BotThinking = setTimeout(() => {
        c(`.pos${chooseBestOption}`).style.color = 'orangered'
        c(`.pos${chooseBestOption}`).innerHTML = 'O'
  
        c('.xo').style.width = '90px'
        c('.xo').style.height = '90px'
        c('.xo').style.borderBottom = '5px solid white'
  
        c('.xo1').style.width = '80px'
        c('.xo1').style.height = '80px'
        c('.xo1').style.borderBottom = '0px'
  
        XorO = 'X'

        for(let i in vencedorO) {
          let indexVencedor2 = vencedorO[i].indexOf(chooseBestOption)
          if(indexVencedor2 > -1) {
            vencedorO[i].splice(indexVencedor2, 1)
          }
        }

        for(let i in jogadas) {
          let indexJogadas = jogadas[i].indexOf(chooseBestOption)
          if(indexJogadas > -1) {
            jogadas[i].splice(indexJogadas, 1)
          }
        }
  
        let index = options.indexOf(chooseBestOption)
        if(index > -1) {
          options.splice(index, 1)
        }

        venceu(BotThinking)

      }, 2000)
      venceu(BotThinking)
  
    }

  }

}

function venceu(n) {
  for(let i in vencedor) {
    if (vencedor[i][0].innerHTML == 'X' && vencedor[i][1].innerHTML == 'X' && vencedor[i][2].innerHTML == 'X') {
      c('.venceu').innerHTML = 'VOCÊ VENCEU!'
      playerScore ++
      c('.player').innerHTML = playerScore
      checkPlayerScore = true
      winner = true
      clearTimeout(n)
    }
  }
  
  for(let i in vencedor) {
    if (vencedor[i][0].innerHTML == 'O' && vencedor[i][1].innerHTML == 'O' && vencedor[i][2].innerHTML == 'O') {
      c('.venceu').innerHTML = 'BOT VENCEU!'
      botScore ++
      c('.smartBot').innerHTML = botScore
      winner = true
      clearTimeout(n)
    }
  }

  if(options.length === 0 && winner === false) {
    c('.venceu').innerHTML = 'DEU EMPATE!'
    clearTimeout(n)
  }
}

function rec() {

  checkPlayerScore = false

  winner = false

  XorO = ''

  options = [1,2,3,4,5,6,7,8,9]

  for(let i in vencedor) {
    for(let k in vencedor[i]) {
      vencedor[i][k].innerHTML = ''
      vencedor[i][k].style.color = 'none'
      
    }
  }

  vencedorX = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], 
    [3, 5, 7]]
    
  vencedorO = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], 
    [3, 5, 7]]

  jogadas = [[1,3,5], [1,3,9], [1,7,9], [1,4,5], [7,5,9], [6,9,8], [2,5,4], [5,3,9]]
  saveJogada = 0


  if (m === 0) {
    m = 1
    c('.xo1').style.width = '90px'
    c('.xo1').style.height = '90px'
    c('.xo1').style.borderBottom = '5px solid white'

    c('.xo').style.width = '80px'
    c('.xo').style.height = '80px'
    c('.xo').style.borderBottom = '0'


    XorO = 'O'
    BotTurn = true
    BotTurnFunction()
    
  } else {
    m = 0
    c('.xo').style.width = '90px'
    c('.xo').style.height = '90px'
    c('.xo').style.borderBottom = '5px solid white'

    c('.xo1').style.width = '80px'
    c('.xo1').style.height = '80px'
    c('.xo1').style.borderBottom = '0'

    XorO = 'X'
    BotTurn = false
  }

  c('.venceu').innerHTML = ''
    
}
