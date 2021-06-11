import { ordenaData, removeDatasRepetidas } from "../service/data.js";
import { criaData } from "./criaData.js";

export const carregaTarefas = () => {
  const lista = document.querySelector("[data-list]");
  const tarefasSalvas = JSON.parse(localStorage.getItem("tarefas")) || [];

  lista.innerHTML = "";
  const dataUnicas = removeDatasRepetidas(tarefasSalvas);
  ordenaData(dataUnicas);

  dataUnicas.forEach((dia) => {
    lista.appendChild(criaData(dia));
  });
};
