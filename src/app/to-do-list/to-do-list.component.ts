import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  titleTask: string = "";
  editingIndex: number | null = null;
  editingTitle: string = "";
  tasks: { title: string, status: boolean }[] = [];
index: any;

  constructor() {
    this.loadTasks();
  }

  ngOnInit(): void {
    // Cette méthode peut être utilisée pour une initialisation supplémentaire si nécessaire.
  }

  onClickAddTask() {
    if (this.titleTask.trim()) {
      this.tasks.push({ title: this.titleTask, status: false });
      this.titleTask = "";
      this.saveTasks();
    }
  }

  onClickDeleteTask(indexTask: number) {
    this.tasks.splice(indexTask, 1); 
    this.saveTasks();
  }

  onClickEditTask(indexTask: number) {
    this.editingIndex = indexTask;
    this.editingTitle = this.tasks[indexTask].title;
  }

  onSaveTask(indexTask: number) {
    if (this.editingTitle.trim()) {
      this.tasks[indexTask].title = this.editingTitle;
      this.editingIndex = null;
      this.editingTitle = "";
      this.saveTasks();
    }
  }

  toggleTaskStatus(indexTask: number) {
    if (indexTask >= 0 && indexTask < this.tasks.length) {
      this.tasks[indexTask].status = !this.tasks[indexTask].status;
      this.saveTasks();
    }
  }
  

  onCancelEdit() {
    this.editingIndex = null;
    this.editingTitle = "";
  }

  saveTasks() {
    try {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    } catch (error) {
      console.error('Error saving tasks to localStorage:', error);
    }
  }

   loadTasks() {
    try {
      const savedTasks = localStorage.getItem('tasks');
      if (savedTasks) {
        this.tasks = JSON.parse(savedTasks);
      } else {
        this.tasks = [
          { title: 'Réviser mes examens', status: false },
          { title: 'Écrire mon dossier', status: false },
          { title: 'Faire les courses', status: true }
        ];
      }
    } catch (error) {
      console.error('Error loading tasks from localStorage:', error);
      // Fallback to default tasks in case of error
      this.tasks = [
        { title: 'Réviser mes examens', status: false },
        { title: 'Écrire mon dossier', status: false },
        { title: 'Faire les courses', status: true }
      ];
    }
  }

  reset() {
    this.tasks = [];
    this.saveTasks();
  }
}
