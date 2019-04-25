import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.css']
})
export class UpdatePersonComponent implements OnInit {
  param: any;
  persona: Persona;
  loaded: boolean = false;
  message:string;
  departments = [
    'Alta Verapaz, Cobán',
    'Baja Verapaz, Salamá',
    'Chimaltenango, Chimaltenango',
    'Chiquimula, Chiquimula',
    'El Progreso, Guastatoya',
    'Escuintla, Escuintla',
    'Guatemala, Ciudad de Guatemala',
    'Huehuetenango, Huehuetenango',
    'Izabal, Puerto Barrios',
    'Jalapa, Jalapa',
    'Jutiapa, Jutiapa',
    'Petén, Flores',
    'Quetzaltenango, Quetzaltenango',
    'Quiché, Santa Cruz del Quiché',
    'Retalhuleu, Retalhuleu',
    'Sacatepéquez, La Antigua Guatemala',
    'San Marcos, San Marcos',
    'Santa Rosa, Cuilapa',
    'Sololá, Sololá',
    'Suchitepéquez, Mazatenango',
    'Totonicapán, Totonicapán',
    'Zacapa, Zacapa '   
  ]
  constructor(private activated: ActivatedRoute,
    private rest: PersonaService) {

     }

  ngOnInit() {
    this.param = this.activated.snapshot.params.id;
    this.rest.getOne(this.param)
    .subscribe(res => {
      if(res.person){
        this.loaded = true;
        this.persona = res.person;
        
      }else{
        console.log('No se encontró');
      }
    })
  }

  onSubmit(){
    this.rest.updatePersona(this.persona).subscribe(res => {
     if(res.updated){
       this.message = "Actualizada con éxito"
     }else{
       this.message = "Error al actualizar"
     }
    })
  }

}
