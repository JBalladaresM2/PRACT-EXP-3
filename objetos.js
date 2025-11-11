//  BLOQUE 1: Ejercicios con Objetos Individuales

class ManipulacionNumerica {
    constructor(objeto) {
        this.objeto = objeto
    }

    serieFibonacci() {
        debugger
        const numero = this.objeto.numero
        let anterior = 0
        let actual = 1
        let nuevo
        let serie = []

        for (let i = 0; i < numero; i++) {
            nuevo = anterior + actual
            serie.push(anterior)
            anterior = actual
            actual = nuevo
        }

        return serie
    }

    listaDivisores() {
        const numero = this.objeto.numero
        let lista = []

        for (let i = 1; i <= numero; i++) {
            if (numero % i === 0) {
                lista.push(i)
            }
        }
        
        return lista
    }

    sumaDivisores() {
        const numero = this.objeto.numero
        const divisores = this.listaDivisores(numero)
        let suma = 0

        for (let i = 0; i < divisores.length; i++) {
            suma += divisores[i]
        }

        return suma
    }

    esPerfecto() {
        const numero = this.objeto.numero
        let divisores = []
        let suma = 0

        for (let i = 1; i < numero; i++) {
            if (numero % i === 0) {
                divisores.push(i)
            }
        }
        
        for (let i = 0; i < divisores.length; i++) {
            suma += divisores[i]
        }

        if (suma === numero) {
            return true
        } else {
            return false
        }
    }

    esPrimo() {
        const numero = this.objeto.numero
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                return false
            }
        }

        return true
    }

    invertirDigitos() {
        let numero = this.objeto.numero
        let numero_invertido = 0

        while (numero > 0) {
            let ultimo = numero % 10
            numero_invertido = numero_invertido * 10 + ultimo
            numero = Math.floor(numero / 10)
        }

        return numero_invertido
    }

    contarDigitos() {
        let numero = this.objeto.numero
        let contador = 0

        while (numero > 1) {
            numero = numero / 10
            contador++
        }

        return contador
    }

    obtenerFactorial() {
        const numero = this.objeto.numero
        let fact = 1

        for (let i = 1; i <= numero; i++) {
            fact *= i
        }

        return fact
    }

    sumasSucesivas() {
        const numero = this.objeto.numero
        const veces = this.objeto.veces
        let resultado = 0

        for (let i = 0; i < veces; i++) {
            resultado += numero
        }

        return resultado
    }

    restasSucesivas() {
        let numero = this.objeto.numero
        const numero2 = this.objeto.numero2

        while (numero > numero2) {
            numero -= numero2
        }

        return numero
    }
}

// 1. Serie de Fibonacci de un objeto número
// Descripción:
// Generar los primeros n términos de la serie de Fibonacci, donde n está almacenado en el
// atributo numero.
// Entrada:
// objeto = {"numero": 8}
// Proceso:
// 1. Tomar objeto["numero"].
// 2. Iniciar con 0 y 1.
// 3. Cada nuevo valor se calcula: nuevo = anterior + actual.
// 4. Repetir hasta obtener n términos.
// Ejemplo paso a paso:
// 0, 1 → 1
// 1, 1 → 2
// 1, 2 → 3
// 2, 3 → 5
// 3, 5 → 8
// Salida:
// Serie de Fibonacci (8 términos): 0, 1, 1, 2, 3, 5, 8, 13

function ejercicio_11() {
    const objeto = {"numero": 8}
    const Fibonacci = new ManipulacionNumerica(objeto)
    console.log(`Serie de Fibonacci (${objeto.numero} términos): ${Fibonacci.serieFibonacci().join(", ")}`)
}

// 2. Divisores de un número (objeto)
// Descripción:
// Mostrar todos los divisores del atributo numero.
// Entrada:
// objeto = {"numero": 12}
// Proceso:
// 1. Recorrer del 1 al número.
// 2. Si numero % i == 0, agregarlo a la lista de divisores.
// Salida:
// Divisores de 12: 1, 2, 3, 4, 6, 12

function ejercicio_12() {
    const objeto = {"numero": 12}
    const Divisores = new ManipulacionNumerica(objeto)
    console.log(`Divisores de ${objeto.numero}: ${Divisores.listaDivisores().join(", ")}`) 
}

// 3. Suma de los divisores de un número
// Descripción:
// Calcular la suma total de los divisores positivos del atributo numero.
// Entrada:
// objeto = {"numero": 12}
// Proceso:
// 1. Buscar los divisores de numero.
// 2. Sumar todos los divisores encontrados.
// Ejemplo:
// 1 + 2 + 3 + 4 + 6 + 12 = 28
// Salida:
// Suma de divisores: 28

function ejercicio_13() {
    const objeto = {"numero": 12}
    const SumaDivisores = new ManipulacionNumerica(objeto)
    console.log(`Suma de divisores: ${SumaDivisores.sumaDivisores()}`)
}

// 4. Verificar si el número de un objeto es perfecto
// Descripción:
// Comprobar si el atributo numero es perfecto.
// Entrada:
// objeto = {"numero": 6}
// Proceso:
// 1. Calcular los divisores de numero (sin incluirlo).
// 2. Sumar esos divisores.
// 3. Si la suma es igual al número, es perfecto.
// Ejemplo:
// 1 + 2 + 3 = 6 → Perfecto
// Salida:
// El número 6 es perfecto.

function ejercicio_14() {
    const objeto = {"numero": 6}
    const NumeroPerfecto = new ManipulacionNumerica(objeto)

    if (NumeroPerfecto.esPerfecto()) {
        console.log(`El número ${objeto.numero} es perfecto`)
    } else {
        console.log(`El número ${objeto.numero} no es perfecto`)
    }
}

// 5. Verificar si el número es primo
// Descripción:
// Determinar si el atributo numero solo tiene dos divisores: 1 y él mismo.
// Entrada:
// objeto = {"numero": 11}
// Proceso:
// 1. Recorrer desde 2 hasta numero - 1.
// 2. Si algún valor divide exactamente, no es primo.
// Salida:
// El número 11 es primo.

function ejercicio_15() {
    let objeto = {"numero": 11}
    const NumeroPrimo = new ManipulacionNumerica(objeto)

    if (NumeroPrimo.esPrimo()) {
        console.log(`El número ${objeto.numero} es primo`)
    } else {
        console.log(`El número ${objeto.numero} no es primo`)
    }
}

// 6. Invertir los dígitos de un número
// Descripción:
// Mostrar el número invertido.
// Entrada:
// objeto = {"numero": 1234}
// Proceso:
// 1. Tomar el último dígito con % 10.
// 2. Formar el nuevo número multiplicando por 10 y sumando.
// 3. Dividir entre 10 hasta llegar a 0.
// Ejemplo:
// 1234 → 4 → 43 → 432 → 4321
// Salida:
// Número invertido: 4321

function ejercicio_16() {
    const objeto = {"numero": 1234}
    const NumeroInvertido = new ManipulacionNumerica(objeto)
    console.log(`Número invertido: ${NumeroInvertido.invertirDigitos()}`)
}

// 7. Contar dígitos de un número
// Descripción:
// Determinar cuántos dígitos tiene el atributo numero.
// Entrada:
// objeto = {"numero": 9876}
// Proceso:
// 1. Mientras el número sea mayor a 0, dividir entre 10.
// 2. Aumentar un contador en cada paso.
// Salida:
// El número 9876 tiene 4 dígitos.

function ejercicio_17() {
    const objeto = {"numero": 9876}
    const ContadorDigitos = new ManipulacionNumerica(objeto)
    console.log(`El número ${objeto.numero} tiene ${ContadorDigitos.contarDigitos()} dígitos`)
}

// 8. Factorial de un número
// Descripción:
// Calcular el factorial del atributo numero.
// Entrada:
// objeto = {"numero": 5}
// Proceso:
// 1. Iniciar fact = 1.
// 2. Multiplicar fact = fact × i desde 1 hasta numero.
// Ejemplo:
// 5! = 5 × 4 × 3 × 2 × 1 = 120
// Salida:
// Factorial de 5 = 120

function ejercicio_18() {
    const objeto = {"numero": 5}
    const NumeroFactorial = new ManipulacionNumerica(objeto)
    console.log(`Factorial de ${objeto.numero} = ${NumeroFactorial.obtenerFactorial()}`)
}

// 9. Sumas sucesivas
// Descripción:
// Realizar sumas repetidas entre el atributo numero y veces.
// Entrada:
// objeto = {"numero": 3, "veces": 4}
// Proceso:
// 1. Sumar el número tantas veces como indique veces.
// 2. Acumular el resultado total.
// Ejemplo:
// 3 + 3 + 3 + 3 = 12
// Salida:
// Resultado: 12

function ejercicio_19() {
    const objeto = {"numero": 3, "veces": 4}
    const SumasSucesivas = new ManipulacionNumerica(objeto)
    console.log(`Resultado: ${SumasSucesivas.sumasSucesivas()}`)
}

// 10. Restas sucesivas
// Descripción:
// Restar un número (numero2) repetidamente al atributo numero hasta llegar a 0 o menos.
// Entrada:
// objeto = {"numero": 15, "numero2": 4}
// Proceso:
// 1. Mientras el número sea mayor que 0, restar numero2.
// 2. Mostrar el resultado final.
// Ejemplo:
// 15 − 4 − 4 − 4 = 3
// Salida:
// Resultado final: 3

function ejercicio_20() {
    const objeto = {"numero": 15, "numero2": 4}
    const RestasSucesivas = new ManipulacionNumerica(objeto)
    console.log(`Resultado final: ${RestasSucesivas.restasSucesivas()}`)
}

//  BLOQUE 2: Colección de Objetos (Listas de Números)
// En este bloque, se procesan listas de objetos, aplicando los mismos algoritmos del bloque
// anterior a cada elemento.

// 1. Serie de Fibonacci para varios objetos
// Entrada:
// numeros = [{"numero": 5}, {"numero": 8}, {"numero": 10}]
// Proceso:
// • Para cada objeto, generar la serie de Fibonacci hasta numero.
// Salida:
// 5 → 0, 1, 1, 2, 3
// 8 → 0, 1, 1, 2, 3, 5, 8, 13
// 10 → 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

function ejercicio_21() {
    const numeros = [{"numero": 5}, {"numero": 8}, {"numero": 10}]
    
    for (let i = 0; i < numeros.length; i++) {
        let Fibonacci = new ManipulacionNumerica(numeros[i])
        console.log(`${numeros[i].numero} -> ${Fibonacci.serieFibonacci().join(", ")}`)
    }
}

// 2. Divisores de varios objetos
// Entrada:
// numeros = [{"numero": 6}, {"numero": 10}, {"numero": 15}]
// Proceso:
// • Para cada objeto, calcular sus divisores.
// Salida:
// 6 → 1, 2, 3, 6
// 10 → 1, 2, 5, 10
// 15 → 1, 3, 5, 15

function ejercicio_22() {
    const numeros = [{"numero": 6}, {"numero": 10}, {"numero": 15}]
    
    for (let i = 0; i < numeros.length; i++) {
        let Divisores = new ManipulacionNumerica(numeros[i])
        console.log(`${numeros[i].numero} -> ${Divisores.listaDivisores().join(", ")}`)
    }
}

// 3. Suma de divisores de varios objetos
// Entrada:
// numeros = [{"numero": 6}, {"numero": 12}, {"numero": 28}]
// Proceso:
// • Calcular y sumar los divisores para cada objeto.
// Salida:
// 6 → 12
// 12 → 28
// 28 → 56

function ejercicio_23() {
    const numeros = [{"numero": 6}, {"numero": 12}, {"numero": 28}]

    for (let i = 0; i < numeros.length; i++) {
        let SumaDivisores = new ManipulacionNumerica(numeros[i])
        console.log(`${numeros[i].numero} -> ${SumaDivisores.sumaDivisores()}`)
    }
}

// 4. Detectar números perfectos
// Entrada:
// numeros = [{"numero": 6}, {"numero": 10}, {"numero": 28}, {"numero": 30}]
// Proceso:
// • Comparar cada numero con la suma de sus divisores.
// Salida:
// Números perfectos: 6, 28

function ejercicio_24() {
    const numeros = [{"numero": 6}, {"numero": 10}, {"numero": 28}, {"numero": 30}]
    let numeros_perfectos = []

    for (let i = 0; i < numeros.length; i++) {
        let NumeroPerfecto = new ManipulacionNumerica(numeros[i])
        if (NumeroPerfecto.esPerfecto(numeros[i])) {
            numeros_perfectos.push(numeros[i].numero)
        }
    }

    console.log(`${numeros_perfectos.join(", ")}`)
}

// 5. Números primos en una lista de objetos
// Entrada:
// numeros = [{"numero": 5}, {"numero": 6}, {"numero": 7}, {"numero": 8}, {"numero": 11}]
// Proceso:
// • Para cada numero, verificar si tiene solo dos divisores.
// Salida:
// Primos: 5, 7, 11

function ejercicio_25() {
    const numeros = [{"numero": 5}, {"numero": 6}, {"numero": 7}, {"numero": 8}, {"numero": 11}]
    let numeros_primos = []

    for (let i = 0; i < numeros.length; i++) {
        let NumeroPrimo = new ManipulacionNumerica(numeros[i])
        if (NumeroPrimo.esPrimo(numeros[i])) {
            numeros_primos.push(numeros[i].numero)
        }
    }

    console.log(`${numeros_primos.join(", ")}`)
}

// 6. Invertir los números de varios objetos
// Entrada:
// numeros = [{"numero": 123}, {"numero": 456}, {"numero": 780}]
// Proceso:
// • Extraer los dígitos y mostrarlos en orden inverso.
// Salida:
// 123 → 321
// 456 → 654
// 780 → 87

function ejercicio_26() {
    const numeros = [{"numero": 123}, {"numero": 456}, {"numero": 780}]

    for (let i = 0; i < numeros.length; i++) {
        let NumeroPrimo = new ManipulacionNumerica(numeros[i])
        console.log(`${numeros[i].numero} -> ${NumeroPrimo.invertirDigitos(numeros[i])}`)
    }
}

// 7. Contar dígitos de varios objetos
// Entrada:
// numeros = [{"numero": 45}, {"numero": 678}, {"numero": 12345}]
// Proceso:
// • Dividir cada número entre 10 y contar las iteraciones.
// Salida:
// 45 → 2 dígitos
// 678 → 3 dígitos
// 12345 → 5 dígitos

function ejercicio_27() {
    const numeros = [{"numero": 45}, {"numero": 678}, {"numero": 12345}]

    for (let i = 0; i < numeros.length; i++) {
        let ContadorDigitos = new ManipulacionNumerica(numeros[i])
        console.log(`${numeros[i].numero} -> ${ContadorDigitos.contarDigitos(numeros[i])}`)
    }
}

// 8. Factorial de varios objetos
// Entrada:
// numeros = [{"numero": 3}, {"numero": 4}, {"numero": 5}]
// Proceso:
// • Multiplicar todos los enteros desde 1 hasta numero.
// Ejemplo:
// 5! = 5 × 4 × 3 × 2 × 1 = 120
// Salida:
// 3! = 6
// 4! = 24
// 5! = 120

function ejercicio_28() {
    const numeros = [{"numero": 3}, {"numero": 4}, {"numero": 5}]

    for (let i = 0; i < numeros.length; i++) {
        let NumeroFactorial = new ManipulacionNumerica(numeros[i])
        console.log(`${numeros[i].numero} = ${NumeroFactorial.obtenerFactorial()}`)
    }
}

// 9. Sumas sucesivas en varios objetos
// Entrada:
// numeros = [
//  {"numero": 2, "veces": 4},
//  {"numero": 3, "veces": 4},
//  {"numero": 4, "veces": 4}
// ]
// Proceso:
// • Repetir la suma de cada numero tantas veces como indique veces.
// Salida:
// 2 × 4 = 8
// 3 × 4 = 12
// 4 × 4 = 16

function ejercicio_29() {
    const numeros = [
        {"numero": 2, "veces": 4},
        {"numero": 3, "veces": 4},
        {"numero": 4, "veces": 4}
    ]

    for (let i = 0; i < numeros.length; i++) {
        let SumasSucesivas = new ManipulacionNumerica(numeros[i])
        console.log(`${numeros[i].numero} x ${numeros[i].veces} = ${SumasSucesivas.sumasSucesivas()}`)
    }
}

// 10. Restas sucesivas en varios objetos
// Entrada:
// numeros = [
//  {"numero": 15, "numero2": 4},
//  {"numero": 22, "numero2": 4},
//  {"numero": 30, "numero2": 4}
// ]
// Proceso:
// • Restar numero2 sucesivamente a numero hasta que el resultado sea menor.
// Salida:
// 15 → 3
// 22 → 2
// 30 → 2

function ejercicio_30() {
    const numeros = [
        {"numero": 15, "numero2": 4},
        {"numero": 22, "numero2": 4},
        {"numero": 30, "numero2": 4}
    ]

    for (let i = 0; i < numeros.length; i++) {
        let restasSucesivas = new ManipulacionNumerica(numeros[i])
        console.log(`${numeros[i].numero} -> ${restasSucesivas.restasSucesivas()}`)
    }
}