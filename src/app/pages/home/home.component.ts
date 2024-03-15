import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public seeMenu = false;

  constructor(){}

  ngOnInit(): void {
    AOS.init();
  }

  toggleMenu(){
    this.seeMenu = ! this.seeMenu;
    if(this.seeMenu){
      document.body.style.setProperty('overflow', 'hidden');
    }else{
      document.body.style.setProperty('overflow', 'scroll');
    }
  }

}
