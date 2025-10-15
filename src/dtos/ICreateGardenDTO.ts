type GardenStatus = 'AVAILABLE' | 'RESERVED'
interface ICreateGardenDTO {
  name: string
  description: string
  latitude: number // '-25.4284'
  longitude: number // '-49.2733'
  address?: string
  status?: GardenStatus
  size: number
  price: number
  userId?: string
}

export { ICreateGardenDTO, GardenStatus }
