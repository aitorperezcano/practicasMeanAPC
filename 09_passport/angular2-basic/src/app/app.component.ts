import { Component } from '@angular/core';
import { BasicService } from "app/basic.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BasicService]
})
export class AppComponent {
  title = 'app works!';

  constructor(private service: BasicService) {
    service.getResultado().subscribe(
      (resultado) =>
      { this.title = "<br>Resultado: " + resultado; },
      error => console.error(error),
      () => {
        console.log("Eureka");
        this.title += "Eureka!"
      }
    );
  }
}
