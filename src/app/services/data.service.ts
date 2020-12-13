import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { tap } from 'rxjs/operators';


@Injectable({
	providedIn: 'root' //Especificamos el alcanze del servicio
})
export class DataService {

  	constructor (private http: HttpClient ) { }

  	getPosts() {
		return this.http.get('https://jsonplaceholder.typicode.com/posts') //Obtenemos los datos, retorna un observable
		      .pipe( tap( console.log ) ); 
  }
}