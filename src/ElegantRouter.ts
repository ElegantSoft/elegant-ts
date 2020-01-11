import { Router, RequestHandler } from "express";
import { ElegantController } from "./ElegantController";
import { Document } from "mongoose";

interface RegisteredRoutes {
  path: string;
  handlers: Array<RequestHandler>;
}

class ElegantRouter<ModelInterface extends Document> {
  private router: Router;

  constructor(
    Controller: ElegantController<ModelInterface>,
    registeredRoutes?: Array<RegisteredRoutes>
  ) {
    this.router = Router();
    console.log(registeredRoutes);
    if (registeredRoutes) {
      registeredRoutes.forEach(rr => {
        this.registerGet(rr.path, ...rr.handlers);
      });
    }

    this.router.get("/", Controller.renderAdminIndex);
    this.router.get("/create", Controller.renderCreatePage);
    this.router.get("/edit/:id", Controller.renderAdminEdit);
    this.router.get("/paginate", Controller.paginate);
    this.router.get("/:id", Controller.show);
    this.router.post("/", Controller.create);
    this.router.put("/:id", Controller.edit);
    this.router.delete("/:id", Controller.remove);
  }

  public routes = (): Router => {
    return this.router;
  };

  private registerGet = (
    path: string,
    ...handlers: Array<RequestHandler>
  ): void => {
    this.router.get(path, ...handlers);
  };
}

export default ElegantRouter;
