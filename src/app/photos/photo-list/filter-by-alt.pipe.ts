import { Pipe, PipeTransform } from "@angular/core";
import { IimagemProps } from "../photo/photo.service";

@Pipe({
    name : "filterByAlt"
})
export class FilterByAlt implements PipeTransform{
    transform(photos: IimagemProps[], alternativoQuery:string) {
        alternativoQuery = alternativoQuery.trim().toLowerCase();

        if(alternativoQuery) {
            return photos.filter(photo => photo.alternativo.toLowerCase().includes(alternativoQuery))
        } else {
            return photos
        }
    }
}