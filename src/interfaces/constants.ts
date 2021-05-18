export enum UserRole {
  CREATOR = 0,
  COLLABORATOR = 1,
  NORMAL = 2,
}

export enum EditorType {
  APP = 'app',
  BLOCK = 'block',
  PRESET = 'preset',
  TEMPLATE = 'template',
}

export type Nullable<T> = T | null

export interface FilterParams {
  [x: string]: any
}

export interface ListParam {
  pageNo: number
  pageSize: number
  filter?: string
}

export interface ListData<T> {
  items: T[]
  total: number
}

export interface EntityMap<T> {
  [uniqId: string]: T | undefined
}

// export type EntityMap = Record<K, T = any>

export interface LooseMap {
  [x: string]: any
}
