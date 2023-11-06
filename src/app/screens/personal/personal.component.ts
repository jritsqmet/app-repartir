import { Component } from '@angular/core';
import { PersonalService } from 'src/app/services/personal/personal.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent {

  constructor( private servicio : PersonalService){}

  dataPersonal : any;

  ngOnInit(){
    this.servicio.getPersonal().subscribe( personal =>{ 
      this.dataPersonal = personal
    } )
  }

}
