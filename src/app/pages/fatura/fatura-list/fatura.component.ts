import { Component, OnInit } from '@angular/core';
import { FaturaService } from '../fatura.service';
import { Fatura } from '../fatura.model';
import { Router } from '@angular/router';
import { ResponsavelService } from '../responsavel.service';
import { Responsavel } from '../responsavel.model';
import toastr from "toastr";

@Component({
    selector: 'bill-fatura',
    templateUrl: './fatura.component.html',
    styleUrls: ['./fatura.component.css']
})
export class FaturaComponent implements OnInit {

    faturas: Fatura[] = []
    responsaveis: Responsavel[];

    constructor(
        private faturaService: FaturaService,
        private responsavelService: ResponsavelService,
        private router: Router) { }

    ngOnInit() {
        this.faturaService.getAll().subscribe(
            resources => {
                this.faturas = resources;
            },
            error => alert(`Erro ao carregar a lista ${error}`)
        )
    }

    click() {
        console.log("Teste click");
        this.router.navigate(['lancamentos']);
    }

    getResponsaveis(fatura) {

        this.responsavelService.getPorFatura(fatura.id).subscribe(
            resources => this.responsaveis = resources.sort((a, b) => b.id - a.id),
            error => toastr.error(`Erro ao carregar a lista de lançamentos: ${error}`)
        )
    }
}
