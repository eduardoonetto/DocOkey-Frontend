export interface RootObject {
  status: number;
  message: string;
  session_id: string;
  result: Result;
}

export interface Result {
  user_name?: string;
  user_rut?: string;
  audit?: string;
  institutions?: string[];
}