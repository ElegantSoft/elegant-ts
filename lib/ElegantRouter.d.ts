import { Router, RequestHandler } from "express";
import { ElegantController } from "./ElegantController";
import { Document } from "mongoose";
interface RegisteredRoutes {
    path: string;
    handlers: Array<RequestHandler>;
}
declare class ElegantRouter<ModelInterface extends Document> {
    private router;
    constructor(Controller: ElegantController<ModelInterface>, registeredRoutes?: Array<RegisteredRoutes>);
    routes: () => Router;
    private registerGet;
}
export default ElegantRouter;
//# sourceMappingURL=ElegantRouter.d.ts.map