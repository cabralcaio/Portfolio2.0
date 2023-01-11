import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-detalhes-projeto',
  templateUrl: './detalhes-projeto.component.html',
  styleUrls: ['./detalhes-projeto.component.css']
})
export class DetalhesProjetoComponent {


  constructor(
    @Inject(MAT_DIALOG_DATA) public variavel: string
  ) {}

//   switch (variavel:string){ 
//     case "projeto1":
//         day = "Domingo";
//         break;
//     case 1:
//         day = "Segunda";
//         break;
//     case 2:
//         day = "Terça";
//         break;
// }

}
