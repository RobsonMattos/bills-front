import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { Lancamento } from './lancamento.model';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class LancamentoService {

    url = `${environment.API_PATH}/lancamentos`;

    constructor(
        private http: HttpClient) { }

    public getAll() {
        return this.http.get(this.url).pipe(
            map(this.jsonDataToResources),
            catchError(this.handleError)
        );
    }

    public getById(id: number): Observable<Lancamento> {
        const url = `${this.url}/${id}`;
        
        return this.http.get<Lancamento>(url).pipe(
            map(this.jsonDataToResource.bind(this)),
            catchError(this.handleError)
        );
    }

    update(lancamento: Lancamento): Observable<Lancamento> {
        const url = `${this.url}/${lancamento.id}`;

        return this.http.put<Lancamento>(url, lancamento);
    }

    public create(lancamento: Lancamento) {
        return this.http.post(this.url, lancamento);
    }

    public deletar(id: number) {
        return this.http.delete(`${this.url}/${id}`);
    }

    getAllByFatura(faturaId: number) {
        return this.http.get(`${this.url}/fatura/${faturaId}`).pipe(
            map(this.jsonDataToResources),
            catchError(this.handleError)
        );
    }

    protected jsonDataToResources(jsonData: any[]): Lancamento[] {
        const resources: Lancamento[] = [];

        jsonData.forEach(
            element => resources.push(Lancamento.fromJson(element))
        );
        return resources;
    }

    protected jsonDataToResource(jsonData: any): Lancamento {
        return Lancamento.fromJson(jsonData);
    }

    protected handleError(error: any): Observable<any> {
        console.log('ERRO NA REQUISIÇÃO => ', error);
        return throwError(error);
    }
}

