import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacuna',
  templateUrl: './vacuna.page.html',
  styleUrls: ['./vacuna.page.scss'],
})
export class VacunaPage implements OnInit {

  public vacuna = {
    nombre: "",
    fecha: "",
    dosis: "",
    cedula:""
  };
  public listaMascota: Array<{cedula:String, nombre:String, tipo:String, edad:String, raza:String, propietarios:String}> = [];
  public listaVacuna: Array<{}> = [];
  public listaFiltrada: Array<{}> = [];
  itemBuscar: string = '';
  mascotaSeleccionada:any= null;
  constructor() { }

  ngOnInit() {
    this.listaMascota = JSON.parse(localStorage.getItem("listaMascota"));
    if (this.listaMascota === null) {
      alert("Aviso: aun no tiene mascotas registradass, esto es requerido para poder crear la vacuna")
    }
  }

  buscar(){
    this.listaFiltrada = this.filtrar(this.itemBuscar);
  }

  filtrar(event) {
 
    return this.listaMascota.filter(item => {
      return item.cedula.toLowerCase().indexOf(event.toLowerCase()) > -1;
    });
  }

  seleccionar(id){
   this.mascotaSeleccionada = id;
  }

  guardar(){
    this.vacuna.cedula = this.mascotaSeleccionada.cedula;
    this.listaVacuna = JSON.parse(localStorage.getItem("listaVacuna"));
    if (this.listaVacuna != null) {
      this.listaVacuna.push(this.vacuna);
      localStorage.setItem("listaVacuna", JSON.stringify(this.listaVacuna));
    }else{
      this.listaVacuna = [];
      this.listaVacuna.push(this.vacuna);
      localStorage.setItem("listaVacuna", JSON.stringify(this.listaVacuna));
    }
    this.vacuna.cedula = "";
    this.vacuna.dosis = "";
    this.vacuna.fecha = "";
    this.vacuna.nombre = "";
    alert("Vacuna registrada correctamente")
  }


}
