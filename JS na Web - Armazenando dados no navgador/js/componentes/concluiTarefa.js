const concluirTarefa = (atualiza, id) => {
  const tarefasSalvas = JSON.parse(localStorage.getItem("tarefas"));
  tarefasSalvas[id].concluida = !tarefasSalvas[id].concluida;
  localStorage.setItem("tarefas", JSON.stringify(tarefasSalvas));
  atualiza();
};

const BotaoConcluir = (atualiza, id) => {
  const btnConcluir = document.createElement("button");

  btnConcluir.classList.add("check-button");
  btnConcluir.innerText = "Done";

  btnConcluir.addEventListener("click", () => concluirTarefa(atualiza, id));
  return btnConcluir;
};

export default BotaoConcluir;
