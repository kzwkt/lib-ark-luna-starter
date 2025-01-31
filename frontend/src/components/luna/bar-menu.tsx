import { A } from "~/lib/ax";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";


export function XpBarMenu(props: { name: string, children: any }) {
    return (
        <DropdownMenu placement='right-start'>
            <DropdownMenuTrigger >
                <A.ItemLabel class="py-0 px-2 hover:cursor-default hover:bg-[#1660e8] hover:text-white">{props.name}</A.ItemLabel>
            </DropdownMenuTrigger>
            <DropdownMenuContent style={{ "box-shadow": "rgb(100, 100, 100) 2px 2px 1px" }} class='outline-none text-sm mt-4 -ml-4 rounded-none bg-white border-[#808080] border p-0.5 '>
                {props.children}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export function XpBarMenuItem(props: { children?: any, onClick?: () => any, disabled?: true }) {
    return (
        <DropdownMenuItem disabled={props.disabled} onClick={props.onClick} class='p-0 text-xs focus:bg-[#1660e8] focus:text-white rounded-none group' >
            <span class='w-4 text-center'></span>{props.children}
        </DropdownMenuItem>
    )
}

export function XpBarMenuCheckboxItem(props: { children?: any, onClick?: () => any, boolean: boolean }) {
    return (
        <DropdownMenuItem onClick={props.onClick} class='p-0 text-xs focus:bg-[#1660e8] focus:text-white rounded-none group' >
            <span class='w-4 text-center'>{props.boolean ? <img class='group-focus:invert pl-1 [image-rendering:pixelated]' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAI0lEQVR42mNgwA3+45P4j03Ff3TJ/9gk0AX+Y7MLpwRO1wEA1lcU7C7/FKUAAAAASUVORK5CYII=" alt="" /> : ""}</span>{props.children}
        </DropdownMenuItem>
    )
}

export function XpBarMenuDivider() {
    return (
        <DropdownMenuSeparator class="mx-0.5 border-[#aca899]" />
    )
}