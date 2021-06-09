const BotaoConcluir = () => {
  const btnConcluir = document.createElement("button");

  btnConcluir.classList.add("check-button");
  btnConcluir.innerText = "Done";

  btnConcluir.addEventListener("click", concluirTarefa);
  return btnConcluir;
};

const concluirTarefa = (event) => {
  const btnConcluir = event.target;
  const tarefa = btnConcluir.parentElement;

  tarefa.classList.toggle("done");
};

export default BotaoConcluir;
