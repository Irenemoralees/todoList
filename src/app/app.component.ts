import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputTaskComponent } from "./components/input-task/input-task.component";
import { ListTaskComponent } from "./components/list-task/list-task.component";
import { Task } from './interfaces/task';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputTaskComponent, ListTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
listTask : Task[] = [{text: "Ir al gym", state: true}, {text: "Hacer la cama", state: false}]
}
