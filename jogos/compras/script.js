const c = cl => document.querySelector(cl)

//Modal
let adicModalProduct = ''
let quantProduct = 1
let precoProductModal = [[0], [0]]

//Nº de Produtos no Cart
let numProducts = [[1],[2], [3], [4], [5], [6]]
let precoSpan = ''

//MyId
let myId = [[],[], [], [], [], [], []]

function adicionar(i) {
    let boxNum = c(`${i}`).getAttribute('myId')
    if(boxNum === myId[1] || boxNum === myId[2] || boxNum === myId[3] || boxNum === myId[4] || boxNum === myId[5] || boxNum === myId[6]) {
        c('.principal-box-block').style.display = 'block'
    } else {
        c('.principal-box-block').style.display = 'none'
        c('.back-modal').style.display = 'block'
        c('.modal').style.display = 'block'
        adicModalProduct = i
        infoModal()
    }
}

function infoModal() {
    quantProduct = 1
    let cloneBoxProduct = c(adicModalProduct).cloneNode(true)
    c('.modal').insertBefore(cloneBoxProduct, c('.modal .close-modal'))
    precoProductModal[0] = parseInt(c('.modal .soma-preco').innerHTML = c('.modal span').innerHTML)
    precoProductModal[1] = parseInt(c('.modal .soma-preco').innerHTML = c('.modal span').innerHTML)
    somaCartId = precoProductModal[1] = parseInt(c('.modal .soma-preco').innerHTML = c('.modal span').innerHTML)
    c('.modal .soma-preco').innerHTML = `R$${c('.modal span').innerHTML}`
    precoSpan = c('.modal span').innerHTML
    c('.modal .adic-car').remove()
    c('.modal span').remove()
    c('.modal .modal-quant').innerHTML = quantProduct
}

function modalSoma(i) {
    if(i === '.modal-mais') {
        quantProduct ++
        c('.modal .modal-quant').innerHTML = quantProduct
        precoProductModal[0] += precoProductModal[1]
        c('.modal .soma-preco').innerHTML = `R$${precoProductModal[0]}`
    } else if(i === '.modal-menos' && quantProduct > 1) {
        quantProduct --
        c('.modal .modal-quant').innerHTML = quantProduct
        precoProductModal[0] -= precoProductModal[1]
        c('.modal .soma-preco').innerHTML = `R$${precoProductModal[0]}`
    }
}

function closeModal() {
    cleanCloseModal()
}

function cleanCloseModal() {
    c('.back-modal').style.display = 'none'
    c('.modal').style.display = 'none'
    adicModalProduct = ''
    c('.modal #box').remove()
    quantProduct = 1
}

function cancelarProductModel() {
    cleanCloseModal()
}

function adicCart() {
    let cloneModal = c('.modal').cloneNode(true)
    myId[numProducts[0]] = c(`.modal #box`).getAttribute('myId')
    if(numProducts.length > 0) {
        let newDiv = document.createElement('div')
        newDiv.classList.add(`cart-box${numProducts[0]}`)
        c('.cart-box0').appendChild(newDiv)
        c(`.modal-cart .cart-box${numProducts[0]}`).appendChild(cloneModal)
        c(`.modal-cart .cart-box${numProducts[0]} .modal-menos`).setAttribute('onclick', `modalSomaCart("-${numProducts[0]}")`)
        c(`.modal-cart .cart-box${numProducts[0]} .modal-mais`).setAttribute('onclick', `modalSomaCart("+${numProducts[0]}")`)
        c(`.modal-cart .cart-box${numProducts[0]} .close-modal`).setAttribute('onclick', `cancelBoxCart(".cart-box${numProducts[0]}")`)
        c(`.modal-cart .cart-box${numProducts[0]}`).setAttribute('id', 'cartBox')
        somaCartId = parseInt(c(`.modal-cart .cart-box${numProducts[0]} .soma-preco`).innerHTML.replace('R$', ''))
        somaCartId2[numProducts[0]] = somaCartId
        quantProductId[numProducts[0]] = quantProduct
        precoProductModalId[numProducts[0]][1] = parseInt(precoSpan)
        precoProductModalId[numProducts[0]][0] = somaCartId2[numProducts[0]]

        c('.modal-cart').style.marginRight = '0'
        removeTrash()
        cleanCloseModal()
        numProducts.shift()
        precoTotal()
    }
}

//Modal-cart soma
let quantProductId = [[1], [1], [1], [1], [1], [1], [1], [1]]
let precoProductModalId = [[[0], [0]], [[0], [0]], [[0], [0]], [[0], [0]], [[0], [0]], [[0], [0]], [[0], [0]]]
let somaCartId = 0
let somaCartId2 = [[0], [0], [0], [0], [0], [0], [0], [0]]
function modalSomaCart(i) {
    precoProductModalId[i[1]][0] = somaCartId2[i[1]]
    if(i === `+${i[1]}`) {
        quantProductId[i[1]] ++
        c(`.modal-cart .cart-box${i[1]} .modal-quant`).innerHTML = quantProductId[i[1]]
        somaCartId2[i[1]] = precoProductModalId[i[1]][0] + precoProductModalId[i[1]][1]
        c(`.modal-cart .cart-box${i[1]} .soma-preco`).innerHTML = `R$${somaCartId2[i[1]]}`
        precoTotal()
    } else if(i === `-${i[1]}` && quantProductId[i[1]] > 1) {
        quantProductId[i[1]] --
        c(`.modal-cart .cart-box${i[1]} .modal-quant`).innerHTML = quantProductId[i[1]]
        somaCartId2[i[1]] = precoProductModalId[i[1]][0] - precoProductModalId[i[1]][1]
        c(`.modal-cart .cart-box${i[1]} .soma-preco`).innerHTML = `R$${somaCartId2[i[1]]}`
        precoTotal()
    }
}

function precoTotal() {
    let soma = 0
    for(let i = 0;i < somaCartId2.length; i++) {
        soma += parseInt(somaCartId2[i])
    }

    if(numProducts.length < 6) {
        c('.modal-cart .cart-preco-total').innerHTML = `Preço Total: R$` + soma
    } else {
        c('.modal-cart .cart-preco-total').innerHTML = ''
    }
    removeaddPadding()
}

function cancelBoxCart(i) {
    itemCancelBoxCart = i
    c(`${i}`).remove()
    myId.splice(i[9], 1)

    somaCartId2[i[9]] = 0
    precoProductModalId[i[9]][1] = 0
    precoProductModalId[i[9]][0] = 0
    quantProductId[i[9]] = 1
    numProducts.push([parseInt(i[9])])
    if(numProducts.length === 6) {
        c('.modal-cart').style.marginRight = '-40vw'
        numProducts = [[1],[2], [3], [4], [5], [6]]
        myId = [[],[], [], [], [], [], []]
        somaCartId2 = [[0], [0], [0], [0], [0], [0], [0], [0]]
    }
    precoTotal()
}

//Cancelar Cart-Buy
function cancelarCart() {
    while(c('#cartBox')) {
        c('#cartBox').remove()
        c('.modal-cart').style.marginRight = '-40vw'
    }
    for(let i in precoProductModalId) {
        precoProductModalId[i][0] = [0]
        precoProductModalId[i][1] = [0]
    }
    somaCartId2 = [[0], [0], [0], [0], [0], [0], [0], [0]]
    numProducts = [[1],[2], [3], [4], [5], [6]]
    myId = [[],[], [], [], [], [], []]
    precoTotal()
}


//Funções adicionais
function removeTrash() {
    c('.modal-cart .cancel-adic').remove()
    c('.modal-cart .preco').remove()
}

function closeBlockProducts() {
    c('.principal-box-block').style.display = 'none'
}

function removeaddPadding() {
    if(numProducts.length < 6) {
        c('.principal').style.padding = '0'
    } else {
        c('.principal').style.padding = '0px 100px 0px 100px'
    }
}
