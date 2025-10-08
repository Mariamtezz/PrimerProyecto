import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [NgIf],
  templateUrl: './contador.html',
  styleUrl: './contador.css'
})
export class Contador {

  numero:number = 0;

  incrementar(){
    if(this.numero<2){
      this.numero++;
    }else{
      this.numero=0;
    }

  }

}
