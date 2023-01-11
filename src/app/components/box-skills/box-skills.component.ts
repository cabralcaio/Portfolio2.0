import { Component } from '@angular/core';

@Component({
  selector: 'app-box-skills',
  templateUrl: './box-skills.component.html',
  styleUrls: ['./box-skills.component.css']
})
export class BoxSkillsComponent {
  public itemMain: boolean = true
  public itemHtml:boolean = false
  public itemJava:boolean = false
  public itemJs:boolean = false
  public itemAngular:boolean = false

  ocultar (number: number){
    if(number == 1){ this.itemHtml = true } 
    if(number == 2){ this.itemJava = true } 
    if(number == 3){ this.itemJs = true } 
    if(number == 4){ this.itemAngular = true } 
    this.itemMain = false
  }

  mostrar () {
    this.itemMain = true
    this.itemAngular = false
    this.itemHtml = false
    this.itemJava = false
    this.itemJs = false
  }

}
