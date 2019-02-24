export interface Block {
  fn: string
  args: any[]
  body: Block[]
  state?: any
}

export interface State {
  blocks: Block[]
  spec: string
}
