const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

function criaTd() {
  const td = document.createElement("td");
  return td;
}

inputTarefa.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

function limpaImput() {
  inputTarefa.value = "";
  inputTarefa.focus();
}

function criaBotaoApagar(td) {
  td.innerText += " ";
  const botaoApagar = document.createElement("button");
  botaoApagar.innerText = "Apagar";
  // botaoApagar.classList.add("apagar");
  botaoApagar.setAttribute("class", "apagar");
  td.appendChild(botaoApagar);
}

function criaBotaoEditar(td) {
  const botaoEditar = document.createElement("button");
  botaoEditar.innerText = "Editar";
  botaoEditar.classList.add("editar");
  td.appendChild(botaoEditar);
}

function criaTarefa(textoInput) {
  const td = criaTd();
  td.innerHTML = textoInput;
  tarefas.appendChild(td);
  limpaImput();
  criaBotaoApagar(td);
  criaBotaoEditar(td);
  salvarTarefas();
}

// 1º
btnTarefa.addEventListener("click", function () {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});

document.addEventListener("click", function (e) {
  const el = e.target;

  if (el.classList.contains("apagar")) {
    el.parentElement.remove();
    salvarTarefas();
  }
});

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll("td");
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace("Apagar", "").trim();
    tarefaTexto = tarefaTexto.replace("Editar", "").trim();
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem("tarefas", tarefasJSON);
  console.log(tarefasJSON);
}

function addicionaTarefasSalvas() {
  const tarefas = localStorage.getItem("tarefas");
  const listaDeTarefas = JSON.parse(tarefas);

  for (let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }
}

addicionaTarefasSalvas();
