//1
//creando funcion para obtener mis valores
function number(arr, n){
  var caja= arr.slice(n+1);// cortando mi lista de array desde el indice (n) especificado
  for (var i = 0; i <= n; i++) { //recorriendo mi array hasta el el numero indicado menor o igual a (n)
    caja.push(arr[i])//a los numeros que quedaron en mi variable caja se le va agregando al final del array con push
    //numeros uno por uno hasta llegar al (n) indicado
  };
  return caja;


};
console.log(number([1,2,3,4,5,6,7], 3));

//en mi consola como ejemplo coloco mi lista de numeros de mi array([1,2,3,4,5,6,7]) con el indice
//de la posicion que quiero que rote(3).

//2
function indexLess(arr) {
  var number=100000000;//creando una variable para comparar
  for (var i = 0; i < arr.length; i++) {//recorriendo la lista de arreglo hasta llegar a su maxima cantidad de numeros
    if (arr[i]< number){//tomando el elemento del arreglo con su indice para compararlo con number, si es
      //menor que number, number tiene un nuevo valor
      number=arr[i]
    }
  }
  return arr.indexOf(number)//retornando el indice del numero menor en que se detuvo
};

console.log(indexLess([6,4,5,1]));


//en mi consola como ejemeplo se coloca la lista de arreglos para buscar el numero menor que se obtuvo y retornar su index
