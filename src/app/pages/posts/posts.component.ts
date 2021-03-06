import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  mensajes: any;

  constructor( private dataService: DataService) { }

  ngOnInit(): void { //Cuando la pagina es cargada por primera vez

    this.mensajes = this.dataService.getPosts(); 
      // .subscribe( (posts: any[])  => { //Nos subscribimos al observable
      //   console.log(posts)
      //   this.mensajes = posts;
      // });
  }

  listenClick( id: number ) {
    console.log('Click en: ', id) //recibimos la variable y la mostramos
  }

}
