import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor() { }
  //ACTIVAR PARA EL LOADING
  loading = false;
  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 6000);
    }

}
