 document.addEventListener('DOMContentLoaded',function(){
    var valeur = document.getElementById('myInput');
    var textRetour = document.getElementById('return');
    var button = document.querySelector('button');
    var champButton = document.getElementById('champ-button');
    let buttonRestart = document.getElementById('restart');
    let divrestart = document.getElementById('divRestart');
    let buttonRejouer = document.getElementById('rejouer');
    let divrejouer = document.getElementById('divRejouer');

    let clickcount =0;
    let maxClick=5;
// limitation en Click button go
    function handleclick (){
        clickcount++;
        if (clickcount> maxClick){
            champButton.style.display='none'
            textRetour.textContent =`Il fallait trouver le nombre ${ randomNumber} 😔` ;
            textRetour.style.color='red';
            divrestart.style.display='block';
        }
       
    }
// bouton pour recommencer
    buttonRestart.addEventListener('click',function(){
            champButton.style.display='flex';
            divrestart.style.display='none';
            divrejouer.style.display='none';
            textRetour.textContent ="";
            clickcount = 0;
            valeur.value = '';
            button.textContent = 'Go';
            randomNumber= Nb();
           
    })

    // bouton pour rejouer
    buttonRejouer.addEventListener('click',function(){
        champButton.style.display='flex';
        divrejouer.style.display='none';
        textRetour.textContent ="";
        clickcount = 0;
        valeur.value = '';
        button.textContent = 'Go';
        randomNumber= Nb();
       
})

//fonction nombre a deviner
function Nb (){
    const chiffre = '0123456789';
    let NombreHasard ='';
    for (i=0;i<2;i++){
        NombreHasard += chiffre[Math.floor(Math.random()*10)];

    }
    return parseInt(NombreHasard,10)
}

let randomNumber = Nb(); 
// fonction bouton Click avec des condition 

    button.addEventListener('click',function(){

        let nombre = valeur.value ;
        

        if (nombre ==''){
            textRetour.textContent ="Veillez entrer le nombre"
            textRetour.style.color='red'
            valeur.value = '';
        } else {
            nombre = parseInt(nombre, 10); // Convertir en nombre
            if (isNaN(nombre)) {
                textRetour.textContent = "Veuillez entrer un nombre valide";
                textRetour.style.color = 'red';
            }else if(nombre === randomNumber){
                textRetour.textContent="Bravo ,Vous avez Réussi !🎉";
                textRetour.style.color='green';
                valeur.value = '';
                champButton.style.display='none';
                divrejouer.style.display='flex';
                
                
            }else if(nombre < randomNumber){
                textRetour.textContent = `le nombre est supérieur à ${nombre}`
                textRetour.style.color='gray'
            }else{
                textRetour.textContent = `le nombre est inférieur à ${nombre}`
                textRetour.style.color='gray'
            }
        }

        valeur.value = '';
        handleclick();    
    });
})