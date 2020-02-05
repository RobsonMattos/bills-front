import { BaseResourceModel } from "src/app/shared/models/base-resource.model";

export class Fatura extends BaseResourceModel {
    constructor(
        public id?: number,
        public mes?: string,
        public dataVencimento?: Date,
        public dataPagamento?: Date,
        public valor?: number) {
        super();
    }

    static fromJson(jsonData: any): Fatura {
        return Object.assign(new Fatura(), jsonData);
    }
}

