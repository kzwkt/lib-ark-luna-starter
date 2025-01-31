import { A } from "~/lib/ax";


export function XpStatusBar(props:{children: any}) {
    return (
        <A.StatusBar class="w-full flex [box-shadow:inset_0_2px_3px_grey] bg-[#ece9d8] text-xs h-6 pl-1 gap-0.5 py-0.5 pt-1">
            {props.children}
        </A.StatusBar>
    )
}

export function XpBarSegmentDivider() {
    return (
        <div class="w-[2px] [border-left:1px_solid_#d7d5c5] [border-right:1px_solid_#fafaf5] mx-2"></div>
    )
}