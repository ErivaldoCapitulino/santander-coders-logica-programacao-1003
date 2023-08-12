const adicionaBotao = document.querySelector("#adicionaBotao");
const textoNoInput = document.querySelector("#textoNoInput");
const listaDeTarefa = document.querySelector("#listaDeTarefa");
const idTarefa = document.querySelector("#idTarefa");
const btnPesquisa = document.querySelector("#btnPesquisa");
const pesquisaResultado = document.querySelector("#pesquisaResultado");
const btnListar = document.querySelector("#btnListar");

let tarefas = [];

//  Adicona uma tarefa no array
const adicionaTarefa = (descricao) => {
  tarefas.push({ id: tarefas.length + 1, descricao });
  mostraSeFoiSalvo();
};

// Mostra uma mensagem do salvamento da tarefa e depois executa a função apagarMensagem
const mostraSeFoiSalvo = () => {
  listaDeTarefa.innerHTML = "Tarefa salva com sucesso!";
  listaDeTarefa.setAttribute("class", "corVerde");
  setTimeout(function () {
    listaDeTarefa.classList.remove("corVerde");
    apagarMensagem();
  }, 1000);
};

// Função para apagar a mensagem
function apagarMensagem() {
  listaDeTarefa.innerHTML = "";
}

const atualizarListaTarefas = () => {
  listaDeTarefa.innerHTML = "";
  tarefas.forEach((tarefa) => {
    const li = document.createElement("li");
    li.setAttribute("class", "resultado");
    li.innerHTML = `<p>${tarefa.id} - Descrição: ${tarefa.descricao}</p>`;

    const btnEditar = document.createElement("button");
    btnEditar.setAttribute("class", "btnConfiguracao");
    btnEditar.innerText = "Editar";
    btnEditar.addEventListener("click", () => editarTarefa(tarefa.id));

    const btnRemover = document.createElement("button");
    btnRemover.setAttribute("class", "btnConfiguracao");
    btnRemover.innerText = "Remover";
    btnRemover.addEventListener("click", () => removerTarefa(tarefa.id));

    li.appendChild(btnEditar);
    li.appendChild(btnRemover);

    listaDeTarefa.appendChild(li);
  });
};

const editarTarefa = (id) => {
  const novaDescricao = prompt("Digite a nova descrição da tarefa:");
  if (novaDescricao !== null) {
    const tarefa = tarefas.find((tarefa) => tarefa.id === id);
    if (tarefa) {
      tarefa.descricao = novaDescricao;
      atualizarListaTarefas();
    } else {
      alert("Tarefa não encontrada.");
    }
  }
};

const removerTarefa = (id) => {
  const indexDaTarefa = tarefas.findIndex((tarefa) => tarefa.id === id);
  if (indexDaTarefa !== -1) {
    tarefas.splice(indexDaTarefa, 1);
    atualizarListaTarefas();
  } else {
    alert("Tarefa não encontrada.");
  }
};

const pesquisarTarefasId = (id) => {
  const tarefa = tarefas.find((tarefa) => tarefa.id === id);
  if (tarefa) {
    pesquisaResultado.innerText = `Tarefa encontrada - ID: ${tarefa.id} - Descrição: ${tarefa.descricao}`;
  } else {
    pesquisaResultado.innerText = "Tarefa não encontrada.";
  }
};

adicionaBotao.addEventListener("click", () => {
  const descricao = textoNoInput.value;
  if (descricao.trim() !== "") {
    adicionaTarefa(descricao);
    textoNoInput.value = "";
  }
});

// Remove o resultado da pesquisa por ID quando for selecionar outra o
const removeBtnPesquisa = () => {
  pesquisaResultado.innerText = "";
};

btnPesquisa.addEventListener("click", () => {
  const id = parseInt(idTarefa.value);
  if (!isNaN(id)) {
    pesquisarTarefasId(id);
    idTarefa.value = "";
  } else {
    pesquisaResultado.innerText = "ID inválido.";
  }
});

btnListar.addEventListener("click", () => {
  if (tarefas.length === 0) {
    atualizarListaTarefas();
  } else {
    console.log("Lista de Tarefas:");
    tarefas.forEach((tarefa) => {
      atualizarListaTarefas();
    });
  }
  removeBtnPesquisa();
});

// Chamada inicial para atualizar a lista
atualizarListaTarefas();
