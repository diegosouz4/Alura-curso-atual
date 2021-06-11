import { handleNovatarefa } from "./componentes/criaTarefa.js"
import { carregaTarefas } from "./componentes/carregaTarefas.js"
const botaoNovaTarefa = document.querySelector("[data-form-button]");

botaoNovaTarefa.addEventListener("click", handleNovatarefa);
carregaTarefas();
