interface Tarefa {
  id: number; 
  descricao: string; 
  concluida: boolean; 
}

// Criando uma função para imprimir os detalhes de uma tarefa.
function imprimirDetalhesTarefa(tarefa: Tarefa): void {
  console.log(`Tarefa ${tarefa.id}: ${tarefa.descricao} (${tarefa.concluida ? 'Concluída' : 'Pendente'})`);
}

// Criando uma tarefa.
const minhaTarefa: Tarefa = {
  id: 1,
  descricao: 'Estudar TypeScript',
  concluida: false
};

// Imprimindo os detalhes da tarefa.
imprimirDetalhesTarefa(minhaTarefa);
