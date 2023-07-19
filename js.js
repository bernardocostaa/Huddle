const btn = document.querySelector('.btnFooter')
const input = document.getElementById('input')
const inputForm = document.querySelector('.input-form')


btn.addEventListener('click',(e) => {
    e.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validadorEmail = emailRegex.test(input.value.trim())
    const inputVazio = input.value.trim()

    if(validadorEmail && inputVazio){
        input.classList.remove('error')
        removeMensagemErro()
    }else{
        input.classList.add('error')
        addMensagemErro('Check your email please')
    }
})


function addMensagemErro(msg){
    if(!document.querySelector('.erroText')){
        const spanErro = document.createElement('span')
        spanErro.classList.add('erroText')
        spanErro.innerText = msg
        inputForm.insertAdjacentElement('afterend', spanErro)
    }

}

function removeMensagemErro(){
    const hasErro = document.querySelector('.erroText')
    if(hasErro){
        hasErro.remove()
    }
}


