import { Component, Input } from '@angular/core';
import { ICarro } from '../carros';

@Component({
  selector: 'app-grade-fotos-carros',
  templateUrl: './grade-fotos-carros.component.html',
  styleUrls: ['./grade-fotos-carros.component.css']
})
export class GradeFotosCarrosComponent {
  @Input() carros!: ICarro[]

}
