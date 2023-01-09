
class calculadora {
    construct() {

    }

    sumar = (num1, num2) => {
        return parseInt(num1) + parseInt(num2);
    }

    restar = (num1, num2) => {
        return parseInt(num1) - parseInt(num2);
    }

    multiplicar = (num1, num2) => {
        return parseInt(num1) * ParseInt(num2);
    }
    dividir = (num1, num2) => {
        return parseInt(num1) / parseInt(num2);
    }

    potenciar(num, exp) {
        let numero = num;
        for (var i = 1; i < exp; i++) {
            nuermo = numero * num;
        }
        return numero;
    }

    raizCuadrada(num) {
        return Math.sqrt(num);
    }
    raizCubica(num) {
        return Math.cbrt(num);

    }

}

const caclulate = new calculadora();

alert("que operacion deseas realizar");
let operacion = prompt('1: sumar, 2: restar,3:multiplicar, 4: dividir, 5: potenciacion, 6:raiz cuadrada, 7: raiz cubica');


if (operacion == 1) {
    let numero1 = prompt("primer nuermo para sumar");
    let numero2 = prompt("segundo numero para sumar");
    resultado = caclulate.sumar(numero1, numero2);
    alert(`tu resultado es ${resultado}`);
}

else if (operacion == 2) {
    let numero1 = prompt('primer nuermo para restar');
    let numero2 = prompt('segundo numero para restar');
    resultado = caclulate.restar(numero1, numero2)
    alert(`tu resultado es $ {resultado}`);
}

else if (operacion == 3) {
    let numero1 = prompt('primer nuermo para multiplicar');
    let numero2 = prompt('segundo numero para multiplicar');
    resultado = caclulate.multiplicar(numero1, numero2)
    alert(`tu resultado es $ {resultado}`);
}

else if (operacion == 4) {
    let numero1 = prompt("primer nuermo para dividir");
    let numero2 = prompt("segundo numero para dividirr");
    resultado = calculate.dividir(numero1, numero2)
    alert(`tu resultado es $ {resultado}`);
}

else if (operacion == 5) {
    let numero1 = prompt("numero a potenciar");
    let numero2 = prompt("exponente");
    resultado = calculate.potenciar(numero1, numero2)
    alert(`tu resultado es $ {resultado}`);
}

else if (operacion == 6) {
    let numero1 = prompt("conocer la raiz cuadrada de");
    resultado = calculate.raizCuadrada(numero1)
    alert(`tu resultado es $ {resultado}`);
}

else if (operacion == 7) {
    let numero1 = prompt("conocer la raiz cubica de");
    resultado = calculate.dividir(numero1)
    alert(`tu resultado es $ {resultado}`);
}

else {
    alert("no se ha encontrado la operacion")
}

