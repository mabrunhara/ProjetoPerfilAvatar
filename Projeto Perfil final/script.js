alert("Olá!Seja Bem-vindo. Pronto para ter o seu perfil?") 

let p1=prompt("Primeiro, digite seu nome:");

let p2=prompt("Digite uma HABILIDADE especial:");

let p3=prompt("Digite uma FRAQUEZA que você possui:"); 

let p4=prompt("Digite um grande OBJETIVO que você quer cumprir");

let msg=document.getElementById('msg')

msg.innerHTML = `<p>Olá ${p1} sua habilidade especial é a/o ${p2} sua fraqueza de ${p3} não te impede de conquistar seu grande objetivo de ${p4}</p>`