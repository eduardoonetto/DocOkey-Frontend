export interface Login {
  id: number
  rut: string
  username: string
  email: string
  session_id: string
}

export interface Register {
  msg: string
  status: string
}

//listar instituciones donde es admin: /roles_by_rut_admin
export interface roles_by_rut_admin {
  instituciones: string[]
  status ?: number
}