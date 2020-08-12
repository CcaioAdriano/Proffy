
//Procurar o botão 
document.querySelector("#add-time")
//quando clicar no botão
.addEventListener('click', cloneField)

//executar uma ação 
function cloneField() {

    //clonar item
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //pegar campos. Que campos??
    const fields = newFieldContainer.querySelectorAll('input')


    //para cada campo, limpar
    fields.forEach(function(field){
        field.value = ""
    })


    //Colocar na pagina: onde ?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)


}
