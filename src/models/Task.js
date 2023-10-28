class Task {
  constructor(text, completed = false) {
    this.id = Date.now() + Math.floor(Math.random() * 100);
    this.text = text;
    this.completed = completed;
  }

  toggle() {
    return this.completed = !this.completed;
  }
}

export default Task;