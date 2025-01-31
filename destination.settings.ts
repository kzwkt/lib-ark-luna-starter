export const DESTINATION_SETTINGS = {
    appName: "Ark Luna SDK" as const,
    appPath: "lib-ark-luna-starter" as const,
    get repoUrl() {
        return `https://github.com/arksouthern/${this.appPath}` as const
    },
    get runUrl() {
        return `http://arksouthern.com/app/${this.appPath}` as const
    },
    version: "v2.1.1"
} satisfies {
    /** GITHUB SAFE APP NAME, LETTERS ONLY */
    appName: string
    appPath: string
    repoUrl: string
    runUrl: string
    version: `v${any}`
}