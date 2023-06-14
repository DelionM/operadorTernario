const boleto = 'vip';
// let codigoDeAcceso;

/* if (boleto == 'vip') {
codigoDeAcceso = 'VIP-158-985';
} else{
codigoDeAcceso = 'Regula-5421-524';
}
console.log(codigoDeAcceso);
*/  
// el mismo pero con el operador ternario 

const codigoDeAcceso = (boleto == 'vip') ? 'VIP-158-985' : 'Regula-5421-524'; 
console.log(codigoDeAcceso);
//esta es una forma más rapida y sencilla de imprimir en pantalla
(boleto == 'vip') ? console.log ('VIP-158-985') : console.log('Regula-5421-524'); 
