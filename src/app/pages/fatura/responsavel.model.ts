import { BaseResourceModel } from "src/app/shared/models/base-resource.model";

export class Responsavel extends BaseResourceModel {
    constructor(
        public id?: number,
        public nome?: string,
        public valor?: number,
        public email?: string) {
        super();
    }

    static fromJson(jsonData: any): Responsavel {
        return Object.assign(new Responsavel(), jsonData);
    }
}