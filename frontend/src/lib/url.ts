// import type * as TAPI from "../../../backend/api/v1.js";
import {type api as TAPI} from "../../../backend/api/v1.js"

export const apiRoot = `/api`;
export const apiBasic = apiRoot + "/v1";

let port = ""
let ip = ""

export async function fetchJson(url = "", body = {}, options = {}) {
    return fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        ...options
    }).then(r => r.text()).then(text => JSON.parse(text || '{}'));
} ;


export function setPort(props:{port: string}) {
    port = props.port
}
export function setIp(props:{ip: string}) {
    ip = props.ip
}

export function getRoot() {
    let root = ""
    if (ip) root+= ip
    if (port) root+= ":"+port
    return root
}

type Props<F> = F extends (props: infer P) => any ? P : never;

export type APIProps = {[K in keyof typeof TAPI]: Props<typeof TAPI[K]> };

// @ts-ignore
export const API: typeof TAPI = new Proxy({}, {
	get: (_, p: string) => (props: any) => fetchJson(`${getRoot()}${apiRoot}/v1/${p}`, props)
});

// @ts-ignore
export const createApi: <T>(progId: string) => T = (progId: string) => new Proxy({}, {
	get: (_, p: string) => (props: any) => fetchJson(`${getRoot()}${apiRoot}/v1/${progId.replace("@", "").replace("/", ".")}/${p}`, props)
})

