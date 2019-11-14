import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  public listaMascota: Array<{ cedula: String, nombre: String, tipo: String, edad: String, raza: String, propietarios: String }> = [];
  public listaFiltrada: Array<{}> = [];
  public listaVacuna: Array<{ cedula: String, dosis: String, fecha: String, nombre: String}> = [];
  public listaVacunaFiltrada: Array<{}> = [];
  itemBuscar: string = '';
  mascotaSeleccionada:any= null;
  constructor() {

  }

  ngOnInit() {
    this.listaMascota = JSON.parse(localStorage.getItem("listaMascota"));
    if (this.listaMascota === null) {
      alert("Aviso: aun no tiene mascotas registradas")
    }
  }

  buscar() {
    this.listaFiltrada = this.filtrar(this.itemBuscar);
  }

  filtrar(event) {
    return this.listaMascota.filter(item => {
      return item.cedula.toLowerCase().indexOf(event.toLowerCase()) > -1;
    });
  }

  seleccionar(mascota){
    this.mascotaSeleccionada = mascota;
    this.listaVacunaFiltrada = [];
    this.listaVacuna = JSON.parse(localStorage.getItem("listaVacuna"));  
    this.listaVacuna.forEach(element => {
      if(element.cedula === mascota.cedula){
        this.listaVacunaFiltrada.push(element);
      }
    });

  }

  eliminar(){
    this.listaMascota.forEach( (item, index) => {
      if(item.cedula ===  this.mascotaSeleccionada.cedula) this.listaMascota.splice(index,1);
    });
    this.mascotaSeleccionada = null;
    this.listaVacunaFiltrada = [];
    this.buscar();
  }
}
