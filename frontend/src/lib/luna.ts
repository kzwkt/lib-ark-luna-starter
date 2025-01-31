import {lazy} from "solid-js"
import { store, zIndex } from "~/Store"
import { mx } from "./mx"
import { App } from "~/Types"

const 
usePromise = <T = any>(): {promise: Promise<T>, resolve: Function, reject: Function} => {
    let resolve
    let reject
    const promise = new Promise((s,j) => {resolve = s; reject = j})
    // @ts-ignore
    return {promise, resolve, reject}
}

export const

openApp = (props: {program: string, params: {openPath: string} | {openUrl: string}}) => {
    const App = lazy(() => import(`../programs/v1/${props.program.replace("@", "").replace("/", ".")}/frontend`))
    store.open.push({
        App, 
        zIndex: ++zIndex.value,
        view: {as: "restore"},
        placeX: 3, placeY: 12, sizeX: 38, sizeY: 40,
        params: props.params
    })
}
,
closeAppWindow = (props: App) => {
    store.open.splice(store.open.findIndex(a => a.zIndex == props.app.zIndex), 1)
}
,
queryFileOpener = (props: {openPath: string}) => {
    const opener = Object.entries(store.desktopOpener.extensions)
        .find(([ext]) => props.openPath.endsWith(`.${ext}`))

    return opener 
        ? {as: "opener" as const, ext: opener[0], opener: opener[1]}
        : {as: "unknownType" as const}
}
,
openFile = (props: {openPath: string}) => {
    const opener = queryFileOpener(props)
    mx(opener)({
        opener: x => openApp({program: x.opener.prog, params: props}),
        unknownType: x => openApp({program: "@arksouthern/luna.note", params: props})
    })(opener)
}
,
openFilePicker = async (props:{exts?: string[], isMulti?: true, startingDir?: string}) => {
    const {promise, resolve, reject} = usePromise()
    //@ts-ignore
    openApp({program: "@arksouthern/luna.explore.open", params: {...props, resolve, reject}})
    return await promise as string[]
},
openFileCreator = async (props:{exts?: string[], isMulti?: true, startingDir?: string}) => {
    const {promise, resolve, reject} = usePromise()
    //@ts-ignore
    openApp({program: "@arksouthern/luna.explore.create", params: {...props, resolve, reject}})
    return await promise as string[]
}