import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/persona';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  persona: Persona;
  message: string;
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
  constructor(public rest: PersonaService) {
    this.persona = new Persona('', '', '', '', '', null, '', '', '', '','', null, '', '', '','','', null, null, null)
   }

  ngOnInit() {
    console.log(this.persona)
    this.rest.getPersonas()
  }

  onSubmit(){
    console.log(this.persona)
    this.rest.setPersona(this.persona).subscribe(res => {
      if(res.personaSave && res.personaSave._id){
        this.message = "Registro completado correctamente";
        console.log(res.personaSave._id)
      }else{
        this.message = "No se puede registrar";
      }
    }, (err) => {
      console.log(<any>err)
    })
  }

}
