import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

 constructor(private titleService: Title) {

 }

 ngOnInit() {
  this.titleService.setTitle('Ajude Pet - Página inicial');

 }
}
