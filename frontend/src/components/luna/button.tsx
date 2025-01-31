import { ValidComponent, splitProps } from "solid-js";
import { ButtonProps } from "../ui/button";
import { PolymorphicProps } from "@kobalte/core/polymorphic";
import { cn } from "~/lib/utils";
import * as ButtonPrimitive from "@kobalte/core/button"

const baseClassLarge = `box-border border border-[#003c73] bg-[linear-gradient(180deg,#fff,#ecebe5_86%,#d8d0c4)] px-4 rounded-[3px] min-w-[80px] min-h-[10px]
hover:[box-shadow:inset_-1px_1px_#fff0cf,inset_1px_2px_#fdd889,inset_-2px_2px_#fbc761,inset_2px_-2px_#e5a01a]
active:bg-[linear-gradient(180deg,#cdcac3,#e3e3db_8%,#e5e5de_94%,#f2f2f1)] hover:cursor-default
active:[box-shadow:inset_-1px_1px_#fff0cf,inset_1px_2px_#fdd889,inset_-2px_2px_#fbc761,inset_2px_-2px_#e5a01a]
focus:[box-shadow:inset_-1px_1px_#cee7ff,inset_1px_2px_#98b8ea,inset_-2px_2px_#bcd4f6,inset_1px_-1px_#89ade4,inset_2px_-2px_#89ade4]
disabled:bg-none disabled:bg-[#f5f4ea]  disabled:text-[#a1a192] hover:disabled:[box-shadow:none] disabled:border-[#c9c7ba]`
const baseClass = `box-border border border-[#003c73] bg-[linear-gradient(180deg,#fff,#ecebe5_86%,#d8d0c4)] px-6 rounded-sm py-0.5 min-w-[100px] min-h-[23px]
	hover:[box-shadow:inset_-1px_1px_#fff0cf,inset_1px_2px_#fdd889,inset_-2px_2px_#fbc761,inset_2px_-2px_#e5a01a]
	active:bg-[linear-gradient(180deg,#cdcac3,#e3e3db_8%,#e5e5de_94%,#f2f2f1)] hover:cursor-default
	active:[box-shadow:inset_-1px_1px_#fff0cf,inset_1px_2px_#fdd889,inset_-2px_2px_#fbc761,inset_2px_-2px_#e5a01a]
	focus:[box-shadow:inset_-1px_1px_#cee7ff,inset_1px_2px_#98b8ea,inset_-2px_2px_#bcd4f6,inset_1px_-1px_#89ade4,inset_2px_-2px_#89ade4]
	disabled:bg-none disabled:bg-[#f5f4ea]  disabled:text-[#a1a192] hover:disabled:[box-shadow:none] disabled:border-[#c9c7ba] `
export const XpButton = <T extends ValidComponent = "button">(
  props: PolymorphicProps<T, ButtonProps<T>>
) => {
  const [local, others] = splitProps(props as ButtonProps, ["variant", "size", "class"])
  return (
    <ButtonPrimitive.Root
      class={cn(baseClass, local.class)}
      {...others}
    />
  )
}