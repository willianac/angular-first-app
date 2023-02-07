import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core"
import { PhotoComponent } from "./photo/photo.component";
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { FilterByAlt } from "./photo-list/filter-by-alt.pipe";

@NgModule({
    declarations: [PhotoComponent, PhotoListComponent, PhotoFormComponent, FilterByAlt],
    imports: [HttpClientModule, CommonModule, FormsModule]
})
export class PhotosModule {}