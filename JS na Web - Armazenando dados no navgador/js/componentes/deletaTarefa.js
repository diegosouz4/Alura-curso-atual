const removeTarefa = (atualiza, id) => {
  const index = id;
  const tarefasSalvas = JSON.parse(localStorage.getItem("tarefas"));
  tarefasSalvas.splice(index, 1);
  localStorage.setItem("tarefas", JSON.stringify(tarefasSalvas));
  atualiza();
};

const BotaoRemove = (atualiza, id) => {
  const btnRemover = document.createElement("button");

  btnRemover.classList.add("delete-button");
  btnRemover.innerText = "Remove";

  btnRemover.addEventListener("click", () => removeTarefa(atualiza, id));
  return btnRemover;
};

export default BotaoRemove;
