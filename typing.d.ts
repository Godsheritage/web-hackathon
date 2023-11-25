export interface ServerToClientEvents {
  serverMsg: (data: { msg: string; }) => void;
}
export interface ClientToServerEvents {
  clientMsg: (data: { msg: string;  }) => void;
}
