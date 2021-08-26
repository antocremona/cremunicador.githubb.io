// Class para obtener datos del user
class User {
    constructor(nombre, email, edad, mtcobertura, cuotas, mtCuota) {
        this.nombre = prompt('Ingrese su nombre');
        this.email = prompt('Ingrese su email');
        this.edad = parseInt(prompt('Ingrese su edad'));
        this.mtcobertura = parseInt(prompt('Ingrese el monto de cobertura (Hasta USD 100K)'));
        this.iva = 1.21
        this.mtCuota = mtCuota
    }

    //Métodos para validar los parámetros
    calcularMtCuota(cuotas) {
        if (this.mtcobertura > 0 && this.mtcobertura <= 100000 && cuotas > 0 && cuotas <= 24) {
            this.mtCuota = (this.mtcobertura / cuotas) * this.iva
        } else {
            alert('Alguno de los parámetros ingresados es incorrecto')
        }
    }

    infoCuota () {
        alert(this.nombre + ' el monto de su cuota es: ' + this.mtCuota)
    }
}





