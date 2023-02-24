import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { UserAuthService } from "./user/user-auth.service";
import { environment } from "src/environments/environment.development";

const API = environment.apiURL

@Injectable({providedIn: "root"})
export class AutenticacaoService {
    
    constructor(private http: HttpClient, private userAuth: UserAuthService) {}

    autenticar(usuario: string, senha: string): Observable<HttpResponse<any>> {
        return this.http.post(API + "/user/login", {
            userName: usuario,
            password: senha
        }, {
            observe : "response"
        }).pipe(
            tap((res) => {
                const authToken = res.headers.get("x-access-token") ?? ""
                this.userAuth.salvaToken(authToken)
            })
        )
    }
}