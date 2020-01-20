function validar() {
    var result = document.getElementById("resultado");
    var pgb = document.getElementById("pgb");  
    var nome = document.getElementById("nome");  
    
    if (nome.value) {

        event.preventDefault();

        for (var i = 1; i < 101; i++) {
            setTimeout(function(){
                pgb.value = i;
            }, 100);
        }   

        result.innerHTML = "Agendado com Sucesso!!!";
        
        setTimeout(function(){
            result.innerHTML = "";
            pgb.value = 0;
        }, 6000);
       
    }
}    