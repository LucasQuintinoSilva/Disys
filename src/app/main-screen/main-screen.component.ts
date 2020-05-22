import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {
  public currentScreen: string = 'Carrossel';

  constructor() { }

  ngOnInit(): void {
  }

  public changeScreen(goTo: string): void {
    this.currentScreen = goTo;
  }
}
