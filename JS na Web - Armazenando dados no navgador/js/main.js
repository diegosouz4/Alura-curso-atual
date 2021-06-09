import BotaoConcluir from "./componentes/concluiTarefa.js";
import BotaoRemove from "./componentes/deletaTarefa.js";

const criarTarefa = (event) => {
  event.preventDefault();
  const listaDeTarefas = document.querySelector("[data-list]");
  const inputNovaTarefa = document.querySelector("[data-form-input]");
  const valueNovaTarefa = inputNovaTarefa.value;

  const novaTarefa = document.createElement("li");
  novaTarefa.classList.add("task");

  const conteudo = `<p class="content">${valueNovaTarefa}</p>`;
  novaTarefa.innerHTML = conteudo;

  listaDeTarefas.appendChild(novaTarefa);
  novaTarefa.appendChild(BotaoConcluir());
  novaTarefa.appendChild(BotaoRemove());
  inputNovaTarefa.value = " ";
};

const botaoNovaTarefa = document.querySelector("[data-form-button]");

botaoNovaTarefa.addEventListener("click", criarTarefa);
