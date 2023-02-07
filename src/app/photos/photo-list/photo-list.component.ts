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
export class PhotoListComponent implements OnInit  {
  photos: IimagemProps[] = [];
  values:string = "";
  filteredPhotos: IimagemProps[] = [];

  constructor(private photoService: PhotoService) { }

  filter(event: KeyboardEvent) {
    let letter = (event.target as HTMLInputElement).value
    if(letter) {
      this.filteredPhotos = this.photos.filter(photo => photo.alternativo.toLowerCase().includes(letter)) 
    }
  }
  
  ngOnInit(): void {
    this.photoService
    .listPhoto()
    .subscribe(photo => {
      this.photos = photo
      this.filteredPhotos = photo
    })
  }
}
