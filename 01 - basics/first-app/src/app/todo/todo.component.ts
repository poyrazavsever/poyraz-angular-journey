import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Todo tipini tanımlıyoruz
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  // Signal'lar Angular 21'in yeni reaktif sistemidir
  todos = signal<Todo[]>([
    { id: 1, text: 'Angular öğren', completed: false },
    { id: 2, text: 'Todo app yap', completed: false },
  ]);

  newTodoText = signal('');
  filter = signal<'all' | 'active' | 'completed'>('all');

  // Yeni todo ekle
  addTodo() {
    const text = this.newTodoText().trim();
    if (text) {
      const newTodo: Todo = {
        id: Date.now(),
        text: text,
        completed: false,
      };
      this.todos.update((todos) => [...todos, newTodo]);
      this.newTodoText.set('');
    }
  }

  // Todo'yu tamamla/tamamlanmamış yap
  toggleTodo(id: number) {
    this.todos.update((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  }

  // Todo'yu sil
  deleteTodo(id: number) {
    this.todos.update((todos) => todos.filter((todo) => todo.id !== id));
  }

  // Filtrelenmiş todo'ları döndür
  filteredTodos() {
    const filter = this.filter();
    const todos = this.todos();

    if (filter === 'active') {
      return todos.filter((todo) => !todo.completed);
    } else if (filter === 'completed') {
      return todos.filter((todo) => todo.completed);
    }
    return todos;
  }

  // Tamamlanmamış todo sayısı
  activeCount() {
    return this.todos().filter((todo) => !todo.completed).length;
  }

  // Tamamlanmış todo'ları temizle
  clearCompleted() {
    this.todos.update((todos) => todos.filter((todo) => !todo.completed));
  }

  // Filtreyi değiştir
  setFilter(filter: 'all' | 'active' | 'completed') {
    this.filter.set(filter);
  }
}
