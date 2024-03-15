import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  ngOnInit(): void {
    AOS.init();
  }

}
