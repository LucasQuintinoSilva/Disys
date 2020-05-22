import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {
  public linkedin: string = 'https://www.linkedin.com/in/lucas-quintino-da-silva/'
  public moreInfo: boolean = false;
  public btnLabel: string = 'Mostrar Mais';

  constructor() { }

  ngOnInit(): void {
  }

  public toggleInfo(): void {
    this.moreInfo = !this.moreInfo;
    if(this.moreInfo) {
      this.btnLabel = 'Mostrar Menos';
    } else {
      this.btnLabel = 'Mostrar Mais';
    }
  }
}
