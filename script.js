c = (cl) => document.querySelector(cl)
let totalSlides = document.querySelectorAll('.slider--item').length
let time = 5000
let currentSlide = 0

/*Slider-principal Title*/
let title1 = ['O', 'l', 'á', ', ', 'e', 'u ', 's', 'o', 'u ', 'C', 'l', 'e', 'b', 's', 'o', 'n', ', ', 'd', 'e', 's', 'e', 'n', 'v', 'o', 'l', 'v', 'e', 'd', 'o', 'r ', 'f', 'r', 'o', 'n', 't', '-', 'e', 'n', 'd']
let title2 = ['O', 'l', 'á', ', ', 'e', 'u ', 's', 'o', 'u ', 'C', 'l', 'e', 'b', 's', 'o', 'n', ', ', 'd', 'e', 's', 'e', 'n', 'v', 'o', 'l', 'v', 'e', 'd', 'o', 'r ', 'f', 'r', 'o', 'n', 't', '-', 'e', 'n', 'd']
let titlejunto = ''

function loopWrite() {
    c('.slider .slider--width .slider-principal .slider-principal--sub-title').style.opacity = '0'
    if(title2.length > 0) {
        let meuInterval = setInterval(()=>{
            titlejunto += title2[0]
            c('.slider .slider--width .slider-principal .slider-principal--title').innerHTML = titlejunto + '_'
            title2.shift()
            if(title2.length === 0) {
                clearInterval(meuInterval)
                title2 = title1
                titlejunto = ''
                setTimeout(()=>{
                    c('.slider .slider--width .slider-principal .slider-principal--sub-title').style.opacity = '100%'
                },1000)
            }
    },250)}
} loopWrite()

/*Escolher Slide*/
function clearToggle() {
    let all = document.querySelectorAll('#slide')
    for(let i = 4;i >= 0;i--) {
        all[i].classList.remove('slideBackground')
    }
}

function slide(e) {
    switch (e) {
        case 'slide1':
            clearToggle()
            c('.slider .slider--width').style.marginLeft = '0vw'
            c(`.${e}`).classList.toggle('slideBackground')
            break
        
        case 'slide2':
            clearToggle()
            c('.slider .slider--width').style.marginLeft = '-100vw'
            c(`.${e}`).classList.toggle('slideBackground')
            break
        
        case 'slide3':
            clearToggle()
            c('.slider .slider--width').style.marginLeft = '-200vw'
            c(`.${e}`).classList.toggle('slideBackground')
            break

        case 'slide4':
            clearToggle()
            c('.slider .slider--width').style.marginLeft = '-300vw'
            c(`.${e}`).classList.toggle('slideBackground')
            break
        
        case 'slide5':
            clearToggle()
            c('.slider .slider--width').style.marginLeft = '-400vw'
            c(`.${e}`).classList.toggle('slideBackground')
            break
    }
}

/*Jogos*/
c('.header-right .menu.jogos').addEventListener('mouseover', ()=>{
    c('.header-right .jogosModal').style.display = 'block'
})

c('.screen').addEventListener('click', ()=>{
    c('.header-right .jogosModal').style.display = 'none'
})

/*Section Informações*/
c('.box1').addEventListener('click', ()=>{
    c('.box1').classList.toggle('flip')
    c('.box1').style.opacity = '0'

    c('.box2').classList.toggle('flip')
    c('.box2').style.opacity = '0'

    setTimeout(()=>{
        c('.box1').style.display = 'none'
        c('.box2').style.display = 'none'
        c('.box-modal').style.display = 'block'
        c('.box-modal').style.display = 'flex'
        setTimeout(()=>{
            c('.box-modal').style.opacity = '100%'
        },50)
    },2500)
})

c('.box2').addEventListener('click', ()=>{

    c('.box1').classList.toggle('flip')
    c('.box1').style.opacity = '0'

    c('.box2').classList.toggle('flip')
    c('.box2').style.opacity = '0'

    setTimeout(()=>{
        c('.box1').style.display = 'none'
        c('.box2').style.display = 'none'
        c('.box-modal').style.display = 'block'
        c('.box-modal').style.display = 'flex'
        setTimeout(()=>{
            c('.box-modal').style.opacity = '100%'
        },50)
    },2500)
})

c('.backtoBox1').addEventListener('click', ()=>{
    c('.box-modal').classList.toggle('flip')
    c('.box-modal').style.opacity = '0'

    setTimeout(()=>{
        c('.box1').style.display = 'block'
        c('.box1').style.display = 'flex'
        c('.box1').classList.toggle('flip')
        c('.box1').style.opacity = '100%'
        c('.box2').style.display = 'block'
        c('.box2').style.display = 'flex'
        c('.box2').classList.toggle('flip')
        c('.box2').style.opacity = '100%'
        c('.box-modal').style.display = 'none'
    },1)
    c('.box-modal').classList.toggle('flip')
})

/*Modal Imagem Grande*/
let all = document.querySelectorAll('#cert-bigModal--img')

let atualwidth = document.body.clientHeight
for(let i = 3;i >= 0; i--) {
    all[i].addEventListener('click', (e)=>{
        let cloneImg = e.target.cloneNode()
        c('.modal-img--cert').appendChild(cloneImg)
        c('.modal-img--cert').style.display = 'block'
        c('.modal-img--cert').style.display = 'flex'
    })
}

c('.buttonClose').addEventListener('click', ()=>{
    c('.modal-img--cert').style.display = 'none'
    c('.modal-img--cert img').remove()
})

function dayOrnight() {
    if(c('.dayOrnight').id === 'luaAtiva') {
        document.body.style.backgroundColor = 'white'
        c('.header-principal').style.backgroundColor = 'white'
        c('.header-right .menu-principal').style.color = 'gray'
        c('.section2 .section-desc .about-me').style.color = 'gray'
        c('.div-footer').style.backgroundColor = 'white'
        c('.div-footer').style.color = 'gray'
        c('.div-footer').style.fontWeight = '500'
        c('.header-left img').src = './images/cb-logo-blue.png'
        c('.dayOrnight').style.backgroundImage = 'url(https://images.emojiterra.com/google/android-nougat/512px/2600.png)'
        c('.dayOrnight').id = 'solAtivo'
    } else {
        document.body.style.backgroundColor = 'black'
        c('.header-principal').style.backgroundColor = 'black'
        c('.header-right .menu-principal').style.color = 'white'
        c('.section2 .section-desc .about-me').style.color = 'white'
        c('.div-footer').style.backgroundColor = 'black'
        c('.div-footer').style.color = 'white'
        c('.div-footer').style.fontWeight = '500'
        c('.header-left img').src = './images/cb-icon.png'
        c('.dayOrnight').style.backgroundImage = 'url(https://images.vexels.com/media/users/3/205504/isolated/preview/f4cc22d8e599e53114df6f53cbfaa39a-ilustracao-de-lua-de-satelite.png)'
        c('.dayOrnight').id = 'luaAtiva'
    }
}
