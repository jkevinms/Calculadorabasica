function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b == 0) {
        alert("Error: No se puede dividir por cero.");
        return null;
    }
    return a / b;
}

function mostrarMenu() {
    let opcion;
    do {
        opcion = prompt("Calculadora Básica\nSeleccione una operación:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir\n5. Salir");
        if (opcion >= 1 && opcion <= 4) {
            let num1 = parseFloat(prompt("Ponga el primer numero:"));
            let num2 = parseFloat(prompt("Ponga el segundo numero:"));
            let resultado;

            switch (opcion) {
                case "1":
                    resultado = sumar(num1, num2);
                    break;
                case "2":
                    resultado = restar(num1, num2);
                    break;
                case "3":
                    resultado = multiplicar(num1, num2);
                    break;
                case "4":
                    resultado = dividir(num1, num2);
                    break;
            }
            if (resultado != null) {
                alert("El resultado es: " + resultado);
            }
        } else if (opcion != "5") {
            alert("Opción no válida. Intente de nuevo.");
        }
    } 
    while (opcion != "5");
    alert("Adios!!!!");
}

window.onload = function() {
    document.getElementById("mensaje").textContent = "La calculadora se ejecutará en la consola del navegador.";
    mostrarMenu();
};