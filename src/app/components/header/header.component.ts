import { Component, OnInit } from '@angular/core';
import {UiService} from '../../services/ui.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit  {
  title: string = 'Task Tracker';
  showAddTask: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value: boolean) => this.showAddTask = value)
  }

  ngOnInit(): void {}

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

}
