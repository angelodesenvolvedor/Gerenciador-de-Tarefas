// Definindo uma interface chamada 'Tarefa' para representar uma tarefa.
interface Tarefa {
  id: number; // Identificador único da tarefa.
  descricao: string; // Descrição da tarefa.
  concluida: boolean; // Indica se a tarefa foi concluída ou não.
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
