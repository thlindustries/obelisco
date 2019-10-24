import { Component, OnInit, HostListener, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})


export class HomeComponent implements OnInit {

  
  constructor() { }

  
  @ViewChild('objetivo', {static: false}) objetivo: ElementRef;
  @ViewChild('missao', {static: false}) missao: ElementRef;
  @ViewChild('servicos', {static: false}) servicos: ElementRef;

  ngOnInit() {
    window.scrollTo(0,0);
  }
  ngAfterViewInit()
  {
    
  }

  cont=0;
  @HostListener('window:scroll', [])
  onWindowScroll() 
  {
    if(this.cont<60)
    {
      this.cont=this.cont+1;
    }
    if(this.cont>=15)
    {
      this.teste(this.cont)
    }
  }
  teste(cont) 
  {
    if(cont>=15)
    {
      this.objetivo.nativeElement.setAttribute("class", "col-lg-8 text-center bounceIn animated");
    }
    if(cont>=40)
    {
      this.missao.nativeElement.setAttribute("class", "row justify-content-center bounceIn animated");
    }
    if(cont>=50)
    {
      this.servicos.nativeElement.setAttribute("class", "page-section bg-light bounceInUp animated");
    }
  }

}
