import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'my Angular project';

  isAuth = false;

  // lastUpdate = new Date();
  lastUpdate = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    }
  );

  appareils = [
    {
      name: 'Guitar Amp',
      status: 'éteint',
    },
    {
      name: 'Alim Console',
      status: 'éteint',
    },
    {
      name: 'Bar Light',
      status: 'allumé',
    },
  ];

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  onAllumer(): void {
    console.log('On allume tout !');
  }

  ngOnInit(): void {
  }
}