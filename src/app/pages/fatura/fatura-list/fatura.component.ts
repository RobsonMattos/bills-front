import { Component, OnInit } from '@angular/core';
import { FaturaService } from '../fatura.service';
import { Fatura } from '../fatura.model';
import { Router } from '@angular/router';

@Component({
    selector: 'bill-fatura',
    templateUrl: './fatura.component.html',
    styleUrls: ['./fatura.component.css']
})
export class FaturaComponent implements OnInit {

    faturas: Fatura[] = []

    // faturas = [
    //     {
    //       vencimento: '17/01/2019',
    //       pagamento: '17/01/2019',
    //       valor: 1100.19
    //     },
    //     {
    //       vencimento: '17/02/2019',
    //       pagamento: '17/01/2019',
    //       valor: 2200.22
    //     },
    //     {
    //       vencimento: '17/03/2019',
    //       pagamento: '17/01/2019',
    //       valor: 5300
    //     },
    //     {
    //       vencimento: '',
    //       pagamento: '17/01/2019',
    //       valor: 400
    //     },
    //   ]

    constructor(
        private faturaService: FaturaService,
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

}
