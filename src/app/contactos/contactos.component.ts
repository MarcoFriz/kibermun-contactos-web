import {
  Component,
  OnInit,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Contacto } from '../models/contacto';
import { ContactosService } from '../services/contactos.service';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ContactosComponent implements OnInit {
  contactos: Contacto[] = [
    // {
    //   id: '1',
    //   nombre: 'Juan',
    //   apellido: 'Perez',
    //   telefono: '123456789',
    // },
    // {
    //   id: '2',
    //   nombre: 'Pedro',
    //   apellido: 'Perez',
    //   telefono: '123456789',
    // },
    // {
    //   id: '3',
    //   nombre: 'Diego',
    //   apellido: 'Perez',
    //   telefono: '123456789',
    //   email: 'fsdfsd@ewe.com',
    // },
  ];
  contacto: Contacto = {
    id: null,
    nombre: '',
    apellido: '',
    telefono: '',
  };
  constructor(private _dialog: MatDialog, private service: ContactosService) {}

  ngOnInit(): void {
    this.service.read().subscribe((contactos) => {
      this.contactos = contactos;
    });
  }

  onAgregarContacto(referencia: TemplateRef<any>) {
    this.contacto = {
      id: null,
      nombre: '',
      apellido: '',
      telefono: '',
    };
    this._dialog.open(referencia);
  }

  onSave(contacto: Contacto) {
    if (contacto.id) {
      // this.contactos.push(contacto);
      this.service.update(contacto).subscribe((contacto) => {
        this.service.read().subscribe((contactos) => {
          this.contactos = contactos;
        });
      });
      return;
    }
    // this.contactos.push(contacto);
    this.service.create(contacto).subscribe((contacto) => {
      this.service.read().subscribe((contactos) => {
        this.contactos = contactos;
      });
    });
  }

  onBorrarContacto(contacto: Contacto) {
    this.service.delete(contacto.id as string).subscribe(() => {
      this.service.read().subscribe((contactos) => {
        this.contactos = contactos;
      });
    });
  }

  onEditarContacto(contacto: Contacto, referencia: TemplateRef<any>) {
    this.contacto = contacto;
    this._dialog.open(referencia);
  }
}
