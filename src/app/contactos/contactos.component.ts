import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ContactosComponent implements OnInit {
  contactos = [
    {
      nombre: 'Juan',
      apellido: 'Perez',
      telefono: '123456789',
    },
    {
      nombre: 'Pedro',
      apellido: 'Perez',
      telefono: '123456789',
    },
    {
      nombre: 'Diego',
      apellido: 'Perez',
      telefono: '123456789',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  onAgregarContacto() {
    console.log('Contacto Agregado');
  }
}
