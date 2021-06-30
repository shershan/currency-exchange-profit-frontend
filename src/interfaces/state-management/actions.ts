export interface ActionEmpty {
  type: string,
}

export interface Action<T> extends ActionEmpty{
  payload: T
}
