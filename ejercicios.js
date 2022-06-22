//Ejercicios Básicos

//EJERCICIO 1

let buttonHtml = document.getElementById("Ej1");

buttonHtml.addEventListener("click", function (e) {
  main1();
});

function main1() {
  let n1 = Number(prompt("ingrese un número"));
  let n2 = Number(prompt("ingrese un segundo número"));
  let suma = sumar(n1, n2);
  igualar(n1, n2, suma);
}

function sumar(n1, n2) {
  var suma = n1 + n2;
  console.log(suma);
  return suma;
}

function igualar(n1, n2, suma) {
  if (n1 == n2) {
    resultado1 = suma * 3;
    console.log(resultado1);
    alert(resultado1);
  } else alert(suma);
}

//EJERCICIO 2

let buttonHtml2 = document.getElementById("Ej2");

buttonHtml2.addEventListener("click", function (e) {
  main2();
});

function main2() {
  let n3 = Number(prompt("ingrese un numero"));
  let diferenciaAbs = diferencia(n3);
  condicional(n3, diferenciaAbs);
}

function diferencia(n3) {
  let difAbs = n3 % 51;
  console.log(difAbs);
  return difAbs;
}

function condicional(n3, difAbs) {
  if (n3 > 51) {
    resultado2 = difAbs * 3;
    console.log(resultado2);
    alert(resultado2);
  }
}

//EJERCICIO 3

let buttonHtml3 = document.getElementById("Ej3");

buttonHtml3.addEventListener("click", function (e) {
  main3();
});

function main3() {
  let n4 = Number(prompt("ingrese un numero"));
  let n5 = Number(prompt("ingrese un segundo numero"));
  igualar2(n4, n5);
}

function igualar2(n4, n5) {
  let resultado31 = n4 + n5;
  console.log(resultado31);
  if (n4 == 30) {
    alert("True");
  } else if (n5 == 30) {
    alert("True");
  } else if (resultado31 == 30) {
    alert("True");
  } else alert("False");
}

//EJERCICIO 4

let buttonHtml4 = document.getElementById("Ej4");

buttonHtml4.addEventListener("click", function (e) {
  main4();
});

function main4() {
  let n6 = Number(prompt("ingrese un número"));
  comparar(n6);
}

function comparar(n6) {
  if (n6 == 10 || n6 == 100 || n6 == 200) {
    alert("True");
  } else alert("False");
}

//EJERCICIO 5

let buttonHtml5 = document.getElementById("Ej5");

buttonHtml5.addEventListener("click", function (e) {
  main5();
});

function main5() {
  let n7 = Number(prompt("ingrese un numero"));
  let multiplode7 = multiplo7(n7);
  let multiplode3 = multiplo3(n7);
  multiplo(n7, multiplode7, multiplode3);
}

function multiplo7(n7) {
  resultado51 = n7 % 7;
  return resultado51;
}

function multiplo3(n7) {
  resultado52 = n7 % 3;
  return resultado52;
}

function multiplo(n7, resultado51, resultado52) {
  if (resultado51 == 0) {
    alert("es multiplo de 7");
  } else if (resultado52 == 0) {
    alert("es multiplo de 3");
  } else alert(n7 + "no es multiplo de 3 o 7");
}

//EJERCICIO 6

let buttonHtml6 = document.getElementById("Ej6");

buttonHtml6.addEventListener("click", function (e) {
  main6();
});

function main6() {
  let n8 = Number(prompt("ingrese un número"));
  let n9 = Number(prompt("ingrese otro numero"));
  rango1(n8, n9);
}

function rango1(n8, n9) {
  if (n8 <= 200 && n8 >= 100 && n9 >= 100 && n9 <= 200) {
    alert("ambos están en rango");
  } else if ((n8 <= 200 && n8 >= 100) || (n9 <= 200 && n9 >= 100)) {
    alert("hay un número en rango");
  } else alert("ninguno está en rango");
}

//EJERCICIO 7

let buttonHtml7 = document.getElementById("Ej7");

buttonHtml7.addEventListener("click", function (e) {
  alert((resultado = "troleado"));
});

//EJERCICIO 8

let buttonHtml8 = document.getElementById("Ej8");

buttonHtml8.addEventListener("click", function (e) {
  main8();
});

function main8() {
  let n10 = Number(prompt("ingrese un número"));
  let n11 = Number(prompt("ingrese otro numero"));
  let n12 = Number(prompt("ingrese un terer numero"));
  rango2(n10, n11, n12);
}

function rango2(n10, n11, n12) {
  if (
    n10 >= 20 &&
    n10 <= 50 &&
    n11 >= 20 &&
    n11 <= 50 &&
    n12 >= 20 &&
    n12 <= 50
  ) {
    alert("Todos los Valores están en rango");
  } else alert("Algún valor no está en rango");
}

//EJERCICIO 9

let buttonHtml9 = document.getElementById("Ej9");

buttonHtml9.addEventListener("click", function (e) {
  main9();
});

function main9() {
  let n13 = Number(prompt("ingrese un número"));
  let n14 = Number(prompt("ingrese otro numero"));
  rango3(n13, n14);
}

function rango3(n13, n14) {
  if (n13 >= 20 && n13 <= 50) {
    alert(n13 + "está en rango");
  } else if (n14 >= 20 && n14 <= 50) {
    alert(n14 + "está en rango");
  } else alert("Ninguno está en rango");
}

// //Ejercicios Medios

//// -          Crear un array con los siguientes valores:  1,3,”a”,[1,2]
//// -          Pedir al usuario números hasta que ingrese la letra q. guardar los números en un array
//// -          Mostrar los números ingresados por el usuario multiplicados por 2
//// -          Mostrar los elementos del array que son primos
//// -          Devolver si existe un elemento dentro del array
//// -          Filtrar todos los elementos que no sean de tipo numerico
// -          Ordenar los elementos de menor a mayor

let buttonHtml10 = document.getElementById("Ej10");

buttonHtml10.addEventListener("click", function (e) {
  main10();
});

function main10() {
  function1();
  let Datos = IngresarDatos();
  multiplicar(Datos);
  numerosPrimos(Datos);
  let ingresado2 = prompt(
    "ingrese el número o la palabra que desea buscar en los valores ingresados anteriormente"
  );
  buscarElemento(Datos, ingresado2);
  filtradoDeElementos(Datos);
  ordenados(Datos);
}

function function1() {
  let numbers = [1, 3, "a", [1, 2]];
  console.log(numbers);
}

function IngresarDatos() {
  let acceso = true;
  let array = [];
  while (acceso) {
    let ingresado1 = prompt("ingrese valores y finalice con la letra q");
    console.log(array);
    if (ingresado1 != "q") {
      array.push(ingresado1);
    } else {
      acceso = false;
      //si quiero ver cada vez que se guarda el array le pongo el console.log(array) de la linea 279
    }
  }
  console.log(array);

  return array;
}

function multiplicar(array) {
  for (i = 0; i < array.length; i++) {
    const arrayMulti = array[i] * 2;
    alert(
      "Los valores ingresados fueron duplicados y este es su restulado" +
        arrayMulti
    );
  }
}

function numerosPrimos(array) {
  for (i = 0; i < array.length; i++) {
    const arrayMulti = array[i] * 1;

    let esNumeroPrimo = true;
    for (let i = 2; i < arrayMulti / 2; i++)
      if (arrayMulti % i === 0) {
        esNumeroPrimo = false;
      }
    if (esNumeroPrimo) {
      alert("Es un numero primo" + arrayMulti);
    } else {
      alert("no es un numero primo" + arrayMulti);
    }
  }
}

function buscarElemento(array, ingresado2) {
  const found = array.find((item) => item == ingresado2);
  if (ingresado2 == found) {
    alert("lo encontré");
  } else {
    alert("no se encontraron coincidencias");
  }
}

function filtradoDeElementos(array) {
  elementosNoNumericos = array.filter((elemento) => isNaN(elemento));
  console.log(elementosNoNumericos);
  alert(elementosNoNumericos);
}

function ordenados(array) {
  elementosNumericos = array.filter((elemento2) => !isNaN(elemento2));
  console.log(elementosNumericos);
  elementosNumericos.sort((a, b) => {
    return a - b;
  });
  console.log(elementosNumericos);
  alert("Elementos ordenados de menor a mayor" + elementosNumericos);
}

//EJERCICIOS DICCIONARIO

let buttonHtml11 = document.getElementById("Ej11");

buttonHtml11.addEventListener("click", function (e) {
  main11();
});

function main11() {
  let nombre = prompt("Ingresar su Nombre");
  let apellido = prompt("Ingresar su Apellido");
  let dni = Number(prompt("Ingresar su Número de DNI"));
  datos(nombre, apellido, dni);
}

function datos(nombre, apellido, dni) {
  let datos = { Nombre: nombre, Apellido: apellido, DNI: dni };
  if (dni % 2 == 0) {
    datos.dniPar = "DNI par";
    alert("Numero de DNI par");
  }

  console.log(datos);

  delete datos.Nombre;
  delete datos.Apellido;

  console.log(datos);

  let cadena = JSON.stringify(datos);

  console.log(cadena);
}
