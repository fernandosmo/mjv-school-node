import { Product } from "../models/products.model";

class ProductRepository {
  getAll() {
    return Product.find()
  }

  getById(id: string) {
    return Product.findById(id)
  }

  create(product: typeof Product) {
    return Product.create(product)
  }

  update(id: string, product: Partial<typeof Product>) {
    return Product.updateOne({ _id: id }, { $set: product })
  }

  delete(id: string) {
    return Product.deleteOne({ _id: id })
  }
}

export default new ProductRepository