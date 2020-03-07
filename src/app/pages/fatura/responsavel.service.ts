import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { Fatura } from './fatura.model';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { map, catchError, retry } from 'rxjs/operators';
import { Responsavel } from './responsavel.model';

@Injectable({
    providedIn: 'root'
})
export class ResponsavelService {
    
    url = `${environment.API_PATH}/responsaveis`;

    constructor(
        private http: HttpClient) { }

    // public getAll() {
    //     return this.http.get<Fatura[]>(this.url);
    // }

    // public getById(id: number) {
    //     const url = `${environment.API_PATH}/faturas/${id}`;
    //     return this.http.get(url).pipe(
    //         map(this.jsonDataToResource.bind(this)),
    //         catchError(this.handleError)
    //     );
    // }

    public getPorFatura(id: number) {
        return this.http.get(`${this.url}/fatura/${id}`).pipe(
            map(this.jsonDataToResources),
            catchError(this.handleError)
        );
    }

    // update(fatura: Fatura): Observable<Fatura> {
    //     const url = `${environment.API_PATH}/faturas/${fatura.id}`;

    //     // return this.http.put(url, categoria).pipe(
    //     //   map(() => categoria),
    //     //   catchError(this.handleError)
    //     // );
    //     console.log(fatura);

    //     return this.http.put<Fatura>(url, fatura);
    // }

    // public create(fatura: Fatura) {
    //     const url = `${environment.API_PATH}/faturas`;
    //     return this.http.post<Fatura>(url, fatura)
    //         .pipe(retry(1), catchError(this.handleError))
    // }

    protected jsonDataToResources(jsonData: any[]): Responsavel[] {
        const resources: Responsavel[] = [];

        jsonData.forEach(
            element => resources.push(Responsavel.fromJson(element))
        );

        console.log(resources);
        return resources;
    }

    protected jsonDataToResource(jsonData: any): Responsavel {
        return Responsavel.fromJson(jsonData);
    }

    protected handleError(error: any): Observable<any> {
        console.log('ERRO NA REQUISIÇÃO => ', error);
        return throwError(error);
    }
}

