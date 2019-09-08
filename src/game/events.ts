export const enum IN_EVENT {
    JOIN = 'JOIN',
    LEAVE = 'LEAVE',
}

export interface JoinEvent {
    name: string;
    avatar: string;
}

export const enum OUT_EVENT {
    CONNECTED = 'CONNECTED',
    PLAYER_INFO = 'PLAYER_INFO',
}
