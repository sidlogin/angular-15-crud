import { Component, OnInit } from '@angular/core';
import {Task} from '../../Task';

import {TaskService} from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks: Task[]) => this.tasks = tasks);
  }

  deleteTask(task: Task) {
    console.log('Delete Task: ', task);
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => this.tasks = this.tasks.filter((t) => t.id !== task.id)
      )
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task: Task) => this.tasks.push(task));
  }

}
