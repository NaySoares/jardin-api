type ProductType = 'FRUIT' | 'VEGETABLE' | 'HERB'
interface ICreateProductDTO {
  name: string
  description: string
  price: number
  stock: number
  type: ProductType
  userId?: string
}

export { ICreateProductDTO, ProductType }
