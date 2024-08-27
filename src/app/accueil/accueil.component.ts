import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent {
  totalTask: number = 0;
  tasksCompleted: number = 0;
  tasksInProgress: number = 0;
  tasks: any[] = [];

  ngOnInit() {
    const SaveTask = localStorage.getItem('tasks');
    if (SaveTask) {
      this.tasks = JSON.parse(SaveTask);
      this.totalTask = this.tasks.length;
      this.tasksCompleted = this.tasks.filter(task => task.status).length;
      this.tasksInProgress = this.totalTask - this.tasksCompleted;
    } else {
      this.totalTask = 0;
      this.tasksCompleted = 0;
      this.tasksInProgress = 0;
      this.tasks = [];
    }
  }
}
