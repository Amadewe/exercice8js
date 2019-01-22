// function myFunction() {
// var age = document.getElementById("age").value;
// if age =(age >= 18){
// var result = ('Vous êtes majeur');
// alert(result);
// } else age =(age < 18){
// 	var result = ('Vous êtes mineur');
// alert(result);
// }
// }

function button() {
var age1 = document.getElementById("age").value;
if (age1 >= 18) {
    alert('Vous êtes majeur');
}
else {
    alert('Vous êtes mineur');
}
}
// // on compare l'age : s'il est superieur ou egal à 18 ans, alors le visiteur est majeur
//
// var majeur = (age >= 18);
// alert('Vous êtes majeurs : ' + majeur);     // on verifie que ça marche ^^
// var mineur = !(age >= 18);
// alert('Vous êtes mineur : ' + majeur);
