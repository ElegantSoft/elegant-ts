import { Model, Document } from "mongoose";

export const elegantPaginate = async <ModelInterface extends Document>(
  model: Model<ModelInterface>,
  filter: object,
  page: number,
  limit: number,
  sort: object,
  populate: Array<string>,
  selected: object
) => {
  const skip = (page - 1) * limit;
  const select = selected || {};
  let data = await model
    .find(filter)
    .select(select)
    .populate(populate)
    .limit(limit)
    .skip(skip)
    .sort(sort);

  const count = await model.find(filter).countDocuments();
  const pages = Math.ceil(count / limit) == 0 ? 1 : Math.ceil(count / limit);

  return {
    data,
    pages,
    totalItems: count,
    lastPage: pages,
    nextPage: page + 1
  };
};
