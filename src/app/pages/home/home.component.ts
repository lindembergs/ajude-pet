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
  this.titleService.setTitle('Ajude Pet - home');

 }

  urlMain = 'https://scontent.fjpa5-1.fna.fbcdn.net/v/t1.6435-9/95656648_1605517829600298_4852976052756021248_n.jpg?stp=dst-jpg_s960x960&_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeGWP9eYlGRTG0C8ZNDQcYaUrWOQcHsr0i2tY5BweyvSLYZsclUhH9QG3kxWy3tiSQKMJTexOS1aLyT6UedbF7pr&_nc_ohc=GT6YTfg4iisAX-xnJPB&_nc_ht=scontent.fjpa5-1.fna&oh=00_AfAauyM3zICZ3Jr2ihKDyujGgPjIhJ6yJQDfDQ7ApaeVsA&oe=65356B60';
  cardImagem1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS8Zp-OuTjxN9jIvIoLPF5ZXzaCS3IQGWVrQ&usqp=CAU';
  qrcode = 'https://scontent.fjpa5-1.fna.fbcdn.net/v/t39.30808-6/385004332_2099110460420434_5802087777063996757_n.jpg?stp=dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=49d041&_nc_ohc=qucKsLjvSSsAX90PZpV&_nc_ht=scontent.fjpa5-1.fna&oh=00_AfAotuP8Q9QQqGu3z9utljlIpVQRbZlF4wPSZrMUHlk59w&oe=651DBA19';
  imagemContato = 'https://cdn.pixabay.com/photo/2022/01/29/13/40/smartphone-6977553_640.jpg';
  imagemDoe = 'https://media.istockphoto.com/id/1303308191/pt/foto/hungry-brown-dog-with-empty-bowl-waiting-for-feeding.webp?b=1&s=612x612&w=0&k=20&c=Zr218p5ACPGaO3Hv9l2sP0zbpOPdspEsnKQ8dZmtkbA=';
  imagemAdote = 'https://cdn.pixabay.com/photo/2018/09/23/11/04/dog-3697190_640.jpg';
}
