import { Model, Document } from "mongoose";
export declare const elegantPaginate: <ModelInterface extends Document>(model: Model<ModelInterface, {}>, filter: object, page: number, limit: number, sort: object, populate: string[], selected: object) => Promise<{
    data: ModelInterface[];
    pages: number;
    totalItems: number;
    lastPage: number;
    nextPage: number;
}>;
//# sourceMappingURL=helpers.d.ts.map