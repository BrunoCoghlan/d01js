let precio = prompt('Selecciona el valor de tu producto', 400000)
let cantidad = document.querySelector(".cantidad")
let total = document.querySelector(".valor-total")
const precioSpan = document.querySelector(".precio-inicial")


filtro()

precioSpan.innerHTML = precio
cantidad.innerHTML = 0


/* ESPACIO DE FUNCIONES */
/*Funcion de sumar, aumenta la cantidad e imprime el precio total */
function suma() {
    const sumar = Number(cantidad.textContent) + 1
    cantidad.innerHTML = sumar
    total.innerHTML = sumar * precio
    return
}
/*Funcion de restar, disminuye la cantidad e imprime el precio total, evita que se reste menos de 0  */
function resta() {
    if (Number(cantidad.textContent) > 0) {
        const restar = Number(cantidad.textContent) - 1
        cantidad.innerHTML = restar
        total.innerHTML = restar * precio
    } else {
        alert("No puedes seleccionar menos de 0 productos, que pretendes!")
    }
    return
}
/*Funcion de filtro, filtra datos que no sean numeros del gregados por usuarios al promt */
function filtro() {
    if (isNaN(precio)|| precio === 'null') {
        alert('Debes seleccionar un numero')
        precio = prompt('Selecciona el valor de tu producto', 400000)
        return filtro()
    }else{
        return
    }
}