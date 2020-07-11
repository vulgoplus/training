export interface IProduct {
  id?: number
  code?: string
  supplier_id: number
  name: string
  historical_cost?: number
  price?: number
  type?: string
  status?: boolean
  discription?: string
}

export interface IVariant {
  id?: number
  code?: string
  product_id: string
  name?: string
  historical_cost?: number
  price?: number
  status?: boolean
}

export interface IWarehouseImport {
  id?: number
  code?: string
  warehouse: number
  supplier_id?: number
  creator: string
  deliver?: string
  total_amount?: number
  total_cost?: number
  status?: boolean
}

export interface IInventory {
  id?: number
  code?: string
  created?: Date
  creator: string
  warehouse: number
  actual_inventory?: number
  difference?: number
  status?: boolean
}

export interface IWarehouse {
  id?: number
  name?: string
  phone?: number
  city?: string
  district?: string
  address?: string
  is_main?: boolean
}

export interface ICombo {
  id?: number
  code?: string
  name: string
  start_date?: Date
  end_date?: Date
  total_price: number
  price: number
  note?: string
  status?: boolean
}

export interface IUser {
  name: string
  address?: string
  email?: string
}

export interface ITransporter {
  name: string
  address?: string
  email?: string
  phone: string
  debt: string
}

export interface CustomerTag {
  customer_id?: number
  tag_id?: number
}
