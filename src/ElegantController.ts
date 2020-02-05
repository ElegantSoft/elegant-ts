import { Model, Document } from "mongoose";
import { Request, Response } from "express";
import { elegantPaginate } from "./helpers";

export class ElegantController<ModelInterface extends Document> {
  private model: Model<ModelInterface>;
  private label: string;

  protected paginationSelectedItems: object | undefined;

  constructor(model: Model<ModelInterface>, label: string) {
    this.model = model;
    this.label = label;
  }

  /**
   * Make Pagination for Model
   * @param {req} Request
   * @param {res} Response
   */

  public paginate = async (req: Request, res: Response): Promise<Response> => {
    try {
      const limit: number = parseInt(req.query.limit) || 10;
      const page: number = parseInt(req.query.page) || 1;
      const data = await elegantPaginate<ModelInterface>(
        this.model,
        {},
        page,
        limit,
        { createdAt: -1 },
        [],
        this.paginationSelectedItems || {}
      );
      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
      return res.json({ error });
    }
  };

  /**
   * Create new Model
   * @param {req} Request
   * @param {res} Response
   */
  public create = async (req: Request, res: Response): Promise<Response> => {
    const { newModel } = req.body;
    try {
      const createdModel = await this.model.create(newModel);
      return res.status(200).json({ message: "created2", model: createdModel });
    } catch (error) {
      console.log(error);
      return res.json({ error });
    }
  };

  /**
   * Edit Model
   * @param {req} Request
   * @param {res} Response
   */
  public edit = async (req: Request, res: Response): Promise<Response> => {
    const { newModel } = req.body;
    try {
      const updatedModel = await this.model.findByIdAndUpdate(
        newModel._id,
        newModel
      );
      return res
        .status(200)
        .json({ message: "updated", newModel: updatedModel });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ err });
    }
  };

  /**
   * show Model by Id
   * @param {req} Request
   * @param {res} Response
   */
  public show = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const model = await this.model.findById(id);
      return res.json({ model });
    } catch (error) {
      return res.status(404).json({ message: "not found" });
    }
  };

  /**
   * remove Model by Id
   * @param {req} Request
   * @param {res} Response
   */
  public remove = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await this.model.findOneAndDelete(id);
      return res.status(200).json({ message: "deleted" });
    } catch (error) {
      return res.status(404).json({ message: "not found" });
    }
  };

  public renderCreatePage = (req: Request, res: Response) => {
    const title = "انشاء ";
    res.render(`admin/${this.label}/create`, { title });
  };
  public renderAdminIndex = (req: Request, res: Response) => {
    const title = "الكل";
    res.render(`admin/${this.label}/index`, { title });
  };
  public renderAdminEdit = async (req: Request, res: Response) => {
    const { id } = req.params;
    const oldModel = await this.model.findById(id);
    const title = "تعديل";
    res.render(`admin/${this.label}/edit`, {
      title,
      oldModel: JSON.stringify(oldModel)
    });
  };
}

export default ElegantController;
