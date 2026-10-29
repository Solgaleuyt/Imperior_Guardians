const Permissao_inicial = document.getElementById("Permissao_inicial");
const video_intro = document.getElementById("fundo_intro");
const audio_intro = document.getElementById("audio_intro");
const btn_som = document.getElementById("btn_som");
const barra_som = document.getElementById("barra_som");

let som = 1, som_img = "desativado";
Permissao_inicial.onclick = () => {
    Permissao_inicial.style.display = "none";
    video_intro.play();
    audio_intro.play();
}

btn_som.onclick = () => {
    audio_intro.muted = !audio_intro.muted;
    btn_som.style.backgroundImage = audio_intro.muted ? 'url("IMAGENS/SomDESATIVADO.jpg")' :  'url("IMAGENS/SomATIVO.jpg")';
}