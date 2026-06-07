const sumAll = function(inicio, fin) {

    if(inicio>fin){
    let temp = inicio;
    inicio = fin;
    fin = temp;
    }
    let suma = 0;

   for (let i=inicio; i<=fin;i++){
    suma += i;
   }
   return suma;
};

// Do not edit below this line
module.exports = sumAll;
