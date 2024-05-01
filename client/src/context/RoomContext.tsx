import socketIOClient from "socket.io-client";
import React, { createContext, ReactNode } from "react";

const WS = "http://localhost:8080";

interface Props {
    children: ReactNode;
}

export const RoomContext = createContext<null | any>(null);

const ws = socketIOClient(WS);

export const RoomProvider: React.FunctionComponent<Props> = ({ children }) => {
    return (
        <RoomContext.Provider value={{ ws }}>{children}</RoomContext.Provider>
    );
};
