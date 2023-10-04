const envio = document.getElementById('evento');

function toggleEnvio(event){
    if(event.type === 'touchstart') event.preventDefault()
    const envio = document.getElementById('envio');
    envio.classList.toggle('active');
}

envio.addEventListener('click', toggleEnvio);
envio.addEventListener('touchstart', toggleEnvio);
