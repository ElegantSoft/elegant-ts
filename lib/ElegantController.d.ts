import { Model, Document } from "mongoose";
import { Request, Response } from "express";
export declare class ElegantController<ModelInterface extends Document> {
    private model;
    private label;
    protected paginationSelectedItems: object | undefined;
    constructor(model: Model<ModelInterface>, label: string);
    test(): void;
    /**
     * Make Pagination for Model
     * @param {req} Request
     * @param {res} Response
     */
    paginate: (req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response) => Promise<Response>;
    /**
     * Create new Model
     * @param {req} Request
     * @param {res} Response
     */
    create: (req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response) => Promise<Response>;
    /**
     * Edit Model
     * @param {req} Request
     * @param {res} Response
     */
    edit: (req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response) => Promise<Response>;
    /**
     * show Model by Id
     * @param {req} Request
     * @param {res} Response
     */
    show: (req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response) => Promise<Response>;
    /**
     * remove Model by Id
     * @param {req} Request
     * @param {res} Response
     */
    remove: (req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response) => Promise<Response>;
    renderCreatePage: (req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response) => void;
    renderAdminIndex: (req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response) => void;
    renderAdminEdit: (req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response) => Promise<void>;
}
export default ElegantController;
//# sourceMappingURL=ElegantController.d.ts.map