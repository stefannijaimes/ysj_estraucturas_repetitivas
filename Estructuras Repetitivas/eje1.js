// 1. Total que 10 personas deben pagar en un almacén de llantas.
// $800 por llanta si compra menos de 5, $700 si compra 5 o más.
 
let totalAlmacen = 0
for (let persona = 1; persona <= 10; persona = persona + 1) {

const llantas = parseInt(prompt(`Persona ${persona}: digite la cantidad de llantas`))
    let precioLlanta
    if (llantas < 5) {
        precioLlanta = 800
    } else {
        precioLlanta = 700
    }
    const pago = llantas * precioLlanta
    console.log(`Persona ${persona} paga: $${pago}`)
    totalAlmacen = totalAlmacen + pago
   }

   console.log(`Total que pagan las 10 personas: $${totalAlmacen}`)