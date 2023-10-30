import {ReactNode} from "react";

export interface TabProps {
    path: string,
    order: number,
    setActiveLink: (activeLink: string ) => void,
    activeLink: string,
    title? : string,
    children: ReactNode
}