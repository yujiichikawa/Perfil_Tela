const editar = document.getElementById('editar')
const sair_edit = document.getElementById('sair-edit')    
const compartilhar = document.getElementById('compartilhar')
const sair_comp = document.getElementById('sair-comp')

const img_foto = document.getElementById('img-perfil')
const arquivo = document.getElementById('flImage')

const atualizar = document.getElementById('atualizar-perfil')

editar.addEventListener('click', editando)
sair_edit.addEventListener('click', sair_edicao)
compartilhar.addEventListener('click', compartilhando)
sair_comp.addEventListener('click', sair_compartilhar)

img_foto.addEventListener('click', ()=>{
    arquivo.click();
})

arquivo.addEventListener('change', ()=>{

    if(arquivo.files.length<=0){
        return;
    }

    let ler = new FileReader();
    ler.onload = () => {
        img_foto.src = ler.result
    } 

    ler.readAsDataURL(arquivo.files[0])
})

atualizar.addEventListener('click', ()=>{    
    const nome_value = document.querySelector('input[name="nome"]').value
    const nome_usuario_value = document.querySelector('input[name="nome-usuario"]').value
    const sobre_mim_value = document.querySelector('input[name="sobre-mim"]').value
    const localizacao_value = document.querySelector('input[name="localizacao"]').value
    
    console.log(nome_value+nome_usuario_value+sobre_mim_value+localizacao_value)

    const nome = document.getElementsByClassName('nome')[0]
    nome.innerHTML = nome_value
    const nome_usuario = document.getElementsByClassName('nome-usuario')[0]
    nome_usuario.innerHTML = '@'+nome_usuario_value.toLowerCase()
    const sobre_mim = document.getElementsByClassName('frase')[0]
    sobre_mim.innerHTML = sobre_mim_value
    const local = document.getElementsByClassName('local')[0]
    local.innerHTML = localizacao_value

    let day = new Date()
    alert('Atualizado as '+ day.getHours()+':'+day.getMinutes())

    document.querySelector('input[name="nome"]').value = ''
    document.querySelector('input[name="nome-usuario"]').value = ''
    document.querySelector('input[name="sobre-mim"]').value = ''
    document.querySelector('input[name="localizacao"]').value = ''
})

function editando(){
    let edita = document.getElementById('container-edit')
    edita.style.display = 'block'
}

function sair_edicao(){
    let edita = document.getElementById('container-edit')
    edita.style.display = 'none'
}

function compartilhando(){
    let compartilhar = document.getElementById('container-compartilhar')
    compartilhar.style.display = 'block'
}

function sair_compartilhar(){
    let compartilhar = document.getElementById('container-compartilhar')
    compartilhar.style.display = 'none'
}
