// Funcion para ejecutar el simulador
function Cotizar() {
    while (continuar) {
        let cotizame = Si
        switch (cotizame) {
            case 'Si': 
            usersCreados.push(new User())
            
            usersCreados[0].calcularMtCuota(parseInt(prompt('Ingrese cantidad de cuotas no mayor a 24')))
            console.log(usersCreados[0])
            usersCreados[0].infoCuota()
            break;
            case 'No':
                continuar = false
                break;
            default:
                continuar = false
        }
    }
}