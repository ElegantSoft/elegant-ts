import { Router, RequestHandler } from "express";
import { ElegantController } from "./ElegantController";
import { Document } from "mongoose";

enum methods {
  get = "get",
  post = "post",
  put = "put",
  delete = "delete"
}
interface RegisteredRoutes {
  method: string;
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
    if (registeredRoutes) {
      registeredRoutes.forEach(rr => {
        switch (rr.method) {
          case methods.get:
            this.registerGet(rr.path, ...rr.handlers);
            break;
          case methods.put:
            this.registerPut(rr.path, ...rr.handlers);
            break;
          case methods.post:
            this.registerPost(rr.path, ...rr.handlers);
            break;
          case methods.delete:
            this.registerDelete(rr.path, ...rr.handlers);
            break;
          default:
            break;
        }
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

  private registerPost = (
    path: string,
    ...handlers: Array<RequestHandler>
  ): void => {
    this.router.post(path, ...handlers);
  };

  private registerPut = (
    path: string,
    ...handlers: Array<RequestHandler>
  ): void => {
    this.router.put(path, ...handlers);
  };

  private registerDelete = (
    path: string,
    ...handlers: Array<RequestHandler>
  ): void => {
    this.router.delete(path, ...handlers);
  };
}

export default ElegantRouter;
