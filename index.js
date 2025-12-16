let todos = ['one', 'two', 'three']

function markAsDone() {
  for(let i = 0; i < 4; i++) {
    todos[i] = 'done - ' + todos[i];
  }
}

