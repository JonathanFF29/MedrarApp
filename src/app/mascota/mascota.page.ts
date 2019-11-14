import { Component, OnInit } from '@angular/core';
import { ArrayType } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.page.html',
  styleUrls: ['./mascota.page.scss'],
})
export class MascotaPage implements OnInit {
  public mascota = {
    cedula: "",
    nombre: "",
    tipo: "",
    edad:"",
    raza:"",
    propietario:""
  };
  public listaMascota: Array<{}> = [];
  public listaPropietarios: Array<{}> = [];
  constructor() { }

  ngOnInit() {
    this.listaPropietarios = JSON.parse(localStorage.getItem("listaPropietarios"));
    if(this.listaPropietarios === null){
      alert("Aviso: aun no tiene propietarios registrados, esto es requerido para poder crear la mascota")
    }
  }

  guardar() {
    this.listaMascota = JSON.parse(localStorage.getItem("listaMascota"));
    if (this.listaMascota != null) {
      this.listaMascota.push(this.mascota);
      localStorage.setItem("listaMascota", JSON.stringify(this.listaMascota));
    }else{
      this.listaMascota = [];
      this.listaMascota.push(this.mascota);
      localStorage.setItem("listaMascota", JSON.stringify(this.listaMascota));
    }
    this.mascota.cedula = "";
    this.mascota.edad = "";
    this.mascota.nombre = "";
    this.mascota.propietario = "";
    this.mascota.raza = "";
    this.mascota.tipo = "";
    alert("Mascota guardado correctamente")

  }


}
