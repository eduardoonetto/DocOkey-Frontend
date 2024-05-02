export interface RootObject {
  id: number
  username: string
  email: string
  password: string
  session_id: string
}
export interface Result {
  user_name?: string;
  user_rut?: string;
  audit?: string;
  institutions?: string[];
}