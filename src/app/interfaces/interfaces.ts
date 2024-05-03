export interface Login {
  id: number
  username: string
  email: string
  password: string
  session_id: string
}

export interface Register {
  msg: string
  status: string
}
