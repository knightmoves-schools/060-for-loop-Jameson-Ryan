let todos = ['first todo', 'second todo', 'third todo']

function markAsDone() {
  for(let i = 0; i < 4; i++) {
    todos[i] = 'done - ' + todos[i];
    return todos;
  }
}



