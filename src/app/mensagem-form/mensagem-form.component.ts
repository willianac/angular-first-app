import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mensagem-form',
  templateUrl: './mensagem-form.component.html',
  styleUrls: ['./mensagem-form.component.css']
})
export class MensagemFormComponent {
  @Input() mensagem: string = ""
}
