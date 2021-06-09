const BotaoRemove = () => {
  const btnRemover = document.createElement("button");

  btnRemover.classList.add("delete-button");
  btnRemover.innerText = "Remove";

  btnRemover.addEventListener("click", removeTarefa);
  return btnRemover;
};

const removeTarefa = (event) => {
  const alvo = event.target;
  const tarefa = alvo.parentElement;

  tarefa.remove();
};

export default BotaoRemove;
