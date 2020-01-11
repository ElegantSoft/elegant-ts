import { Router, RequestHandler } from "express";
import { ElegantController } from "./ElegantController";
import { Document } from "mongoose";
interface RegisteredRoutes {
    method: string;
    path: string;
    handlers: Array<RequestHandler>;
}
declare class ElegantRouter<ModelInterface extends Document> {
    private router;
    constructor(Controller: ElegantController<ModelInterface>, registeredRoutes?: Array<RegisteredRoutes>);
    routes: () => Router;
    private registerGet;
    private registerPost;
    private registerPut;
    private registerDelete;
}
export default ElegantRouter;
//# sourceMappingURL=ElegantRouter.d.ts.map