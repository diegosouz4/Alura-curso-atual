import BotaoConcluir from "./concluiTarefa.js";
import BotaoRemove from "./deletaTarefa.js";
import { carregaTarefas } from "./carregaTarefas.js";

export const handleNovatarefa = (event) => {
  event.preventDefault();
  const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
  const inputNovaTarefa = document.querySelector("[data-form-input]");
  const calendario = document.querySelector("[data-form-date]");

  const data = moment(calendario.value);
  const horario = data.format('HH:mm');
  const valueNovaTarefa = inputNovaTarefa.value;
  const dataformatada = data.format("DD/MM/YYYY");
  const concluida = false;

  const dados = {
    data: dataformatada,
    tarefa: valueNovaTarefa,
    horario,
    concluida
  };

  const trafefasAtualizadas = [...tarefas, dados];

  localStorage.setItem("tarefas", JSON.stringify(trafefasAtualizadas));

  inputNovaTarefa.value = " ";
  carregaTarefas();
};

export const Tarefa = ({ horario, tarefa, concluida }, id) => {
  const novaTarefa = document.createElement("li");
  const conteudo = `<p class="content">${horario} * ${tarefa}</p>`;
  if (concluida) {
    novaTarefa.classList.add("done");
  }
  novaTarefa.classList.add("task");
  novaTarefa.innerHTML = conteudo;

  novaTarefa.appendChild(BotaoConcluir(carregaTarefas,id));
  novaTarefa.appendChild(BotaoRemove(carregaTarefas, id));

  return novaTarefa;
};
