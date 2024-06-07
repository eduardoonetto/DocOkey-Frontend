export interface Login {
  id: number
  rut: string
  username: string
  email: string
  session_id: string
  status ?: string
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

export type Documents = Document[]

export interface Document {
  id: number
  nombre: string
  institucion: string
}

export interface SignDocument {
  audit: string
  msg: string
  status: string
  document_id: number
}


export interface Metadata {
  id: number
  status: string
  nombre: string
  thumbnail: string
  documento_b64: string
  institucion: string
  logo: string
  signers: Signer[]
}

export interface Signer {
  id: number
  signer_rut: string
  signer_role: string
  signer_institucion: string
  signer_name: string
  signer_email: string
  signer_type: string
  audit?: string
  fecha_firma?: string
  habilitado: number
  tipo_accion: number
}