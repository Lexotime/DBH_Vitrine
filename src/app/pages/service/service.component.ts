import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  public seeMenu = false;

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
