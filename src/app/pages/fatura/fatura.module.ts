import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FaturaComponent } from './fatura-list/fatura.component';

import { FaturaRoutingModule } from './fatura-routing.module';
// import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';

import { SharedModule } from 'src/app/shared/shared.module';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { FaturaService } from './fatura.service';
import { FaturaFormComponent } from './fatura-form/fatura-form.component';
import { FaturaFormModalComponent } from './fatura-form/fatura-form-modal/fatura-form-modal.component';
import { CalendarModule } from 'primeng/calendar';
import {ChartModule} from 'primeng/chart';

registerLocaleData(ptBr)

@NgModule({
    declarations: [
        FaturaComponent, 
        FaturaFormComponent,
        FaturaFormModalComponent
    ],
    imports: [
        FaturaRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        CurrencyMaskModule,
        CalendarModule,
        ChartModule
    ],
    providers: [{ provide: LOCALE_ID, useValue: 'pt' }, FaturaService]
})
export class FaturaModule { }
