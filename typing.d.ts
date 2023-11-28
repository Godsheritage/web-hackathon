export interface ServerToClientEvents {
  serverMsg: (data: { msg: string; room: string; sender_id:number }) => void;
}
export interface ClientToServerEvents {
  clientMsg: (data: { msg: string; room:string; sender_id:number  }) => void;
}
