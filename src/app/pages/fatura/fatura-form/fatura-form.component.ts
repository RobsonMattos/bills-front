import { Component, OnInit, AfterContentChecked, Injector, ViewChild, ElementRef } from '@angular/core';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/BaseResourceFormComponent';
import { Fatura } from '../fatura.model';
import { FaturaService } from '../fatura.service';
import { LancamentoService } from '../../lancamento/lancamento.service';
import { Validators } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import toastr from "toastr";
import { Lancamento } from '../../lancamento/lancamento.model';

@Component({
    selector: 'bill-fatura-form',
    templateUrl: './fatura-form.component.html',
    styleUrls: ['./fatura-form.component.css']
})
export class FaturaFormComponent extends BaseResourceFormComponent<Fatura> implements OnInit, AfterContentChecked {
    currentActionModal = 'edit'
    showModal: boolean = false;
    lancamento: Lancamento;
    lancamentos: Lancamento[] = [];
    fatura: Fatura;
    @ViewChild('dataPagamento') dataPagamentoField: ElementRef = null;
    
    ptBR = {
        firstDayOfWeek: 0,
        dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
        dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
        dayNamesMin: ['Do', 'Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa'],
        monthNames: [
            'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
            'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
        ],
        monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        today: 'Hoje',
        clear: 'Limpar'
    };

    meses = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
        'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    constructor(
        private faturaService: FaturaService,
        private lancamentoService: LancamentoService,
        protected injector: Injector) {
        super(injector);
    }

    ngOnInit() {
        this.setCurrentAction();
        this.buildFaturaForm()
        this.loadFatura();
    }


    ngAfterContentChecked() {
        this.setPageTitle();
    }

    protected buildFaturaForm() {
        this.resourceForm = this.fb.group({
            id: [''],
            mes: [null, Validators.required],
            dataVencimento: [null, Validators.required],
            dataPagamento: [null],
            valor: ['', Validators.required]
        });
    }

    // submitForm() {
    //     this.submittingForm = true;
    //     if (this.currentAction == "new")
    //         this.createResource();
    //     else // currentAction == "edit"
    //         this.updateResource();
    // }

    // protected setCurrentAction() {
    //     if (this.route.snapshot.url[0].path == "new")
    //         this.currentAction = "new";
    //     else
    //         this.currentAction = "edit";
    // }

    protected createResource() {
        const resource: Fatura = Object.assign(new Fatura(), this.resourceForm.value);
        
        this.faturaService.create(resource)
            .subscribe(
                resource => this.actionsForSuccess(resource),
                error => this.actionsForError(error)
            )
    }

    loadFatura() {
        if (this.currentAction == "edit") {

            this.route.paramMap.pipe(
                switchMap(params => this.faturaService.getById(+params.get("id")))
            ).subscribe(
                (fatura) => {
                    this.fatura = fatura;
                    this.resourceForm.patchValue(this.fatura); // binds loaded resource data to resourceForm
                    this.loadLancamentos();
                },
                (error) => toastr.error(`Ocorreu um erro no servidor, tente mais tarde. ${error}`)
            )
        }
    }

    loadLancamentos() {
        this.lancamentoService.getAllByFatura(this.fatura.id).subscribe(
            resources => this.lancamentos = resources.sort((a, b) => b.id - a.id),
            error => toastr.error(`Erro ao carregar a lista de lançamentos: ${error}`)
        )
    }

    updateLancamento(lancamento) {
        this.currentAction = "edit";
        this.lancamento = lancamento;
    }

    deleteResource(lancamento) {
        this.lancamentoService.deletar(lancamento.id).subscribe(
            resource => {
                this.loadLancamentos();
                this.actionsForSuccess(resource
            )},
            error => this.actionsForError(error)
        );
    }

    novolancamento() {
        // console.log('novo');
        this.currentActionModal = 'new'
    }
}