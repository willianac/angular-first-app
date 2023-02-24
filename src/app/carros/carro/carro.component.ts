import { Component, Input } from '@angular/core';

const API = "http://localhost:3000"

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent {
  private urlOriginal: string = ""

  @Input() description: string = ""
  @Input() set url(url:string) {
    if(url.startsWith("data")) {
      this.urlOriginal = url
    } else {
      this.urlOriginal = API + "/imgs/" + url
    }
  }
}
