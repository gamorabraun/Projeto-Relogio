/* HORÁRIO DE BRASÍLIA */

function atualizarHorario() {
const agora = new Date();

const horario = agora.toLocaleTimeString("pt-BR", {
timeZone: "America/Sao_Paulo",
hour: "2-digit",
minute: "2-digit",
second: "2-digit",
hour12: false
});

document.getElementById("horario").textContent = horario;
}

atualizarHorario();

setInterval(atualizarHorario, 1000);


/* VERIFICAÇÃO DE IDADE */

const formulario = document.getElementById("formulario");
const campoIdade = document.getElementById("idade");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(evento) {
evento.preventDefault();

const idade = Number(campoIdade.value);

if (
campoIdade.value.trim() === "" ||
!Number.isInteger(idade) ||
idade < 0 ||
idade > 120
) {
mensagem.textContent = "Digite uma idade válida.";
mensagem.className = "negado";
return;
}

if (idade < 18) {
mensagem.textContent =
"Acesso negado! Você precisa ter 18 anos ou mais.";

mensagem.className = "negado";
} else {
mensagem.textContent =
"Acesso permitido! Você pode entrar no evento.";

mensagem.className = "permitido";
}
});


/* MUDAR TEMA */

const botaoTema = document.getElementById("mudarTema");

botaoTema.addEventListener("click", function() {
document.body.classList.toggle("escuro");
});