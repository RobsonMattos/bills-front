import { Component, OnInit, Input, ElementRef, ViewChild, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/app/pages/categoria/categoria.service';
import { Categoria } from 'src/app/pages/categoria/categoria.model';
import toastr from 'toastr';
import { Lancamento } from 'src/app/pages/lancamento/lancamento.model';
import { LancamentoService } from 'src/app/pages/lancamento/lancamento.service';
import { Fatura } from '../../fatura.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'bill-fatura-form-modal',
  templateUrl: './fatura-form-modal.component.html',
  styleUrls: ['./fatura-form-modal.component.css']
})
export class FaturaFormModalComponent implements OnInit {

  @Output() fechar = new EventEmitter();
  msg = 'fechou';

  @Input() currentAction: string;
  @Input() fatura: Fatura;
  @Input() lancamento: Lancamento;
  categorias: Categoria[];
  @ViewChild("categoria") categoriaField: ElementRef;

  operacao = 'new';

  public resourceForm: FormGroup;
  protected route: ActivatedRoute;
  protected router: Router;

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

  constructor(
    private fb: FormBuilder,
    private categoriaService: CategoriaService,
    private lancamentoService: LancamentoService
  ) { }

  protected buildFaturaForm() {
    this.resourceForm = this.fb.group({
      id: [''],
      categoria: ['', [Validators.required]],
      estabelecimento: ['', [Validators.required, Validators.minLength(2)]],
      data: ['', [Validators.required]],
      valor: ['', [Validators.required]],
      fatura: [''],
      parcela: [''],
      quantidadeParcelas: ['', [Validators.required, Validators.min(1)]],
      responsavel: ['', [Validators.required]],
      observacao: ['']
    });
  }

  ngOnInit() {
    this.buildFaturaForm();
    this.loadCategoria();
  }

  ngOnChanges() {
    if (this.lancamento != undefined) {
      this.resourceForm.patchValue(this.lancamento);
      this.operacao = 'edit';
    }
  }

  submitForm() {
    if (this.currentAction == 'edit') {
      this.editLancamento();
    }
    else {
      this.createLancamento();
    }
  }

  loadCategoria() {
    this.categoriaService.getAll().subscribe(
      categorias => {
        this.categorias = categorias;
      },
      error => toastr.error(error)
    )
  }

  protected createLancamento() {
    this.resourceForm.value.fatura = this.fatura.id;
    const resource: Lancamento = Object.assign(new Lancamento(), this.resourceForm.value);
    
    this.lancamentoService.create(resource).subscribe(
      value => {
        toastr.success(`Lançamento salvo com sucesso!`);
        this.resourceForm.reset();
      },
      erro => toastr.error(`Erro ao salvar registro! ${erro}`)
    );
  }

  public editLancamento() {
    this.resourceForm.value.fatura = this.fatura.id;
    const resource: Lancamento = Object.assign(new Lancamento(), this.resourceForm.value);
    
    this.lancamentoService.update(resource).subscribe(
      value => {
        toastr.success(`Lançamento salvo com sucesso!`);
        this.fecharModal();
      },
      erro => toastr.error(`Erro ao salvar registro! ${erro}`)
    );
  }

  fecharModal() {
    this.fechar.emit(this.msg);
  }
}
