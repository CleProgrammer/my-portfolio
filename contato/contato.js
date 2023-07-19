c = (cl) => document.querySelector(cl)

c('.header-right .menu.jogos').addEventListener('mouseover', ()=>{
    c('.header-right .jogosModal').style.display = 'block'
})

c('.screen').addEventListener('click', ()=>{
    c('.header-right .jogosModal').style.display = 'none'
})