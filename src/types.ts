export interface SocketClient extends WebSocket {
    [key: string]: any;
}

export interface Action<Type = any, Payload = any> {
    type: Type;
    payload?: Payload;
}
