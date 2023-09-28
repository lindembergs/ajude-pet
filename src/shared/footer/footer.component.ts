import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  data = new Date
   dataAtual(){
    return this.data.getFullYear()
   }
scrollToTop(){
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
}
