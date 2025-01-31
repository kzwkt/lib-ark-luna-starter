import { readdir, readFile, rm } from "fs/promises"
import { DESTINATION_SETTINGS } from "../../destination.settings.js"

import {Prog, Shortcut, Sm, SmFolder, SmShortcut} from "../../frontend/src/Types.js" 
import { Dirent } from "fs"

export const api = {
    
    apiHealthCheckConnect: async (props: {}) => {
        return { message: DESTINATION_SETTINGS.version } as const
    },
    loadDesktopProgs: async (props:{}) => {
        const progs = await readdir(`${__dirname}/../../data/Desktop`)
        const progList = [] as Prog[]
        const progPinList = [] as Prog[]
        for (const progName of progs) {
            if (progName.endsWith(".xp.json")) {
                const prog = await readFile(`${__dirname}/../../data/Desktop/${progName}`, "utf-8")
                progList.push(Object.assign(JSON.parse(prog), {progName}))
            } else if (progName.endsWith(".ti.json")) {
                const prog = await readFile(`${__dirname}/../../data/Desktop/${progName}`, "utf-8")
                progPinList.push(Object.assign(JSON.parse(prog), {progName}))

            }
        }
        const progImg = JSON.parse(await readFile(`${__dirname}/../../data/Desktop/Background.di.json`, "utf-8"))
        const progOpener = JSON.parse(await readFile(`${__dirname}/../../data/Desktop/Opener.di.json`, "utf-8")) as {extensions: Record<string, {prog: string, icon: string}>}
        
        const progStartMenu = await startMenuTree()
        
        return {progList, progImg, progPinList, progOpener, progStartMenu}
    },
    
    deleteDesktopProg: async (props: {progName: string}) =>{
        await rm(`${__dirname}/../../data/Desktop/${props.progName}`)
        return {}
    }
}



async function startMenuTree() {
    const startMenuProgs = await readdir(`${__dirname}/../../data/StartMenu`, {withFileTypes: true})
    const progStartMenu = [] as Sm[]
    // console.log(startMenuProgs)
    for (const ps of startMenuProgs) {
        if (ps.isFile() && !ps.name.endsWith(".xp.json")) continue
        progStartMenu.push(await startMenuRecursive(ps))
    }
    return progStartMenu
}

async function startMenuRecursive(possibleShortcut: Dirent): Promise<Sm> {
    // console.log(possibleShortcut)
    if (possibleShortcut.isDirectory()) { 
        const children = [] 
        const psChildren = await readdir(`${possibleShortcut.path}/${possibleShortcut.name}`, {withFileTypes: true})
        for (const ps of psChildren) {
            if (ps.isFile() && !ps.name.endsWith(".xp.json")) continue
            children.push(await startMenuRecursive(ps))
        }
        return {
            name: possibleShortcut.name,
            as: "folder",
            children
        } as SmFolder
    } else {
        const shortcut = JSON.parse(await readFile(`${possibleShortcut.path}/${possibleShortcut.name}`, "utf-8"))
        return {
            name: possibleShortcut.name,
            as: "shortcut",
            ...shortcut
        } as SmShortcut
        
    }

}