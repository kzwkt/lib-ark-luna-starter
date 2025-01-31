import { JSX } from "solid-js"

export type XyCore = { zIndex: number, placeX: number, placeY: number, sizeX: number, sizeY: number }
export type XpXy = XyCore & { App: (props: App) => JSX.Element, dialog?: XyCore, view: { as: "restore" } | { as: "maximized" } | { as: "minimized" }, params: any }
export type App = { app: XpXy }
  
export type Prog = {
    prog: string,
    params: any,
    icon: string,
    progName: string
  }

  export type Shortcut = {
    prog: string,
    params: any,
    icon: string
  }

export type SmShortcut = {as: "shortcut", name: string} & Shortcut
export type SmFolder = {as: "folder", name: string, children: Sm[]}
export type Sm = SmShortcut | SmFolder
  