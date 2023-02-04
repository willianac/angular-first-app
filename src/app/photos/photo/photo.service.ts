import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"

interface IimagemProps {
    url: string
    alternativo: string
}

@Injectable({providedIn: "root"})  
export class PhotoService {

    constructor(private http: HttpClient) {}

    listPhoto() {
        const observable = this.http.get<IimagemProps[]>('http://localhost:3000/photos')
        return observable 
    }
}