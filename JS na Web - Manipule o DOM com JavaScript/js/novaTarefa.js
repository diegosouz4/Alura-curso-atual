let inputNovaTarefa = document.querySelector(".form-input");
const botaoNovaTarefa = document.querySelector(".form-button");
const form = document.querySelector(".form");
const list = document.querySelector(".list");

botaoNovaTarefa.addEventListener("click", function (e) {
  e.preventDefault();
  if (inputNovaTarefa.value.length > 0) {
    const li = document.createElement("li");
    let p = document.createElement("p");

    p.textContent = inputNovaTarefa.value;
    p.classList.add("content");
    li.classList.add("task");

    li.appendChild(p);
    list.appendChild(li);

    form.reset();
    console.log("Criando uma nova tarefa...");
  } else {
    inputNovaTarefa.value = "digite uma tarefa!";
  }
});
