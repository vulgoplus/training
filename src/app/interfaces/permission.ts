export interface IPermission {
  id: number
  name: string
}

export interface IRole {
  id: number
  name: string
  color: string
  permissions: IPermission[]
}
