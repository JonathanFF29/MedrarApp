import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propietario',
  templateUrl: './propietario.page.html',
  styleUrls: ['./propietario.page.scss'],
})
export class PropietarioPage implements OnInit {
  public propietario = {
    telefono: "",
    nombre: "",
    cedula: ""
  };
  public listaPropietarios: Array<{}> = [];
  constructor() { }

  ngOnInit() {
  }

  guardar() {
    this.listaPropietarios = JSON.parse(localStorage.getItem("listaPropietarios"));
    if (this.listaPropietarios != null) {
      this.listaPropietarios.push(this.propietario);
      localStorage.setItem("listaPropietarios", JSON.stringify(this.listaPropietarios));
    }else{
      this.listaPropietarios = [];
      this.listaPropietarios.push(this.propietario);
      localStorage.setItem("listaPropietarios", JSON.stringify(this.listaPropietarios));
    }
    this.propietario.cedula = "";
    this.propietario.nombre = "";
    this.propietario.telefono = "";
    alert("Propietario guardado correctamente")
    

  }

}
