export interface Block {
  fn: string
  args: any[]
  body: Block[]
}

export interface State {
  blocks: Block[]
  spec: string
  sim: any[]
}
