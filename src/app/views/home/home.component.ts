import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  counterAnimation(n1:number, id: string) {
    let time = 50
    let upto=0;
    if(id == "counter3"){
      time = 100
    }

    let counts=setInterval(updated,time);
        function updated(){
            let count: any= document.getElementById(id);
            if(id == "counter3") {
              count.innerHTML=`${++upto}mil`;
              if(upto===n1 || upto > 51)
            {
                clearInterval(counts);
            }
            } else {
              count.innerHTML=`${++upto}%`;
              if(upto===n1 || upto > 99)
            {
                clearInterval(counts);
            }
            }
            
        }

  }

  @ViewChild('counter')myElement!: ElementRef;

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        // Código a ser executado quando o elemento for exibido na tela
        this.counterAnimation(97, "counter")
        console.log("view element")
        this.counterAnimation(51428, "counter3")
        this.counterAnimation(81, "counter2");
      }
    });
    observer.observe(this.myElement.nativeElement);
  }

}
