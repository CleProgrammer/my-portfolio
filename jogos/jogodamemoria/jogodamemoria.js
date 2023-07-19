let selectCard = ''
let nameBackCard = ''
let sepCard = []
let cont = 0

for(let i in num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]) {
    let card = document.querySelector(`#card${num[i]}`)
    card.addEventListener('click', (e)=>{
        selectCard += `${e.path[1].id} `
        sepCard = selectCard.split(' ')
        let flip = document.querySelector(`#${sepCard[0]}`)
        card.classList.toggle('flip')
        nameBackCard += `${e.path[1].getAttribute('name')} `
        let sep = nameBackCard.split(' ')
        let sep1 = nameBackCard.split(' ')
        cont ++
        if(sep1[0] === sep1[1]) {
            selectCard = ''
            nameBackCard = ''
            cont = 0
        } else if(sep[0] !== sep[1] && cont === 2) {
            setTimeout(()=>{
                flip.classList.add('flip')
                e.path[1].classList.add('flip')
            },700)
            selectCard = ''
            nameBackCard = ''
            cont = 0
        }
    })
}
