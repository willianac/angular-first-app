import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';

interface IimagemProps {
  url: string
  alternativo: string
}

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  photos: IimagemProps[] = []

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.photoService
    .listPhoto()
    .subscribe(photo => this.photos = photo)
  }
}
