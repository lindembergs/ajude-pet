import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-adopt',
  templateUrl: './adopt.component.html',
  styleUrls: ['./adopt.component.css']
})
export class AdoptComponent {

  constructor(private titleService: Title) {

  }

  ngOnInit() {
   this.titleService.setTitle('Ajude Pet - Adote');

  }
}
