import type { Component, ComponentProps, JSX, ValidComponent } from "solid-js"
import { splitProps } from "solid-js"

import * as NumberFieldPrimitive from "@kobalte/core/number-field"
import type { PolymorphicProps } from "@kobalte/core/polymorphic"

import { cn } from "~/lib/utils"

const NumberField = NumberFieldPrimitive.Root

const NumberFieldGroup: Component<ComponentProps<"div">> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <div
      class={cn(
        "relative rounded-md ",
        local.class
      )}
      {...others}
    />
  )
}

type NumberFieldLabelProps<T extends ValidComponent = "label"> =
  NumberFieldPrimitive.NumberFieldLabelProps<T> & {
    class?: string | undefined
  }

const NumberFieldLabel = <T extends ValidComponent = "label">(
  props: PolymorphicProps<T, NumberFieldLabelProps<T>>
) => {
  const [local, others] = splitProps(props as NumberFieldLabelProps, ["class"])
  return (
    <NumberFieldPrimitive.Label
      class={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        local.class
      )}
      {...others}
    />
  )
}

type NumberFieldInputProps<T extends ValidComponent = "input"> =
  NumberFieldPrimitive.NumberFieldInputProps<T> & {
    class?: string | undefined
  }

const NumberFieldInput = <T extends ValidComponent = "input">(
  props: PolymorphicProps<T, NumberFieldInputProps<T>>
) => {
  const [local, others] = splitProps(props as NumberFieldInputProps, ["class"])
  return (
    <NumberFieldPrimitive.Input
      class={cn(
        "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none  disabled:opacity-50 data-[invalid]:border-error-foreground data-[invalid]:text-error-foreground",
        local.class
      )}
      {...others}
    />
  )
}

type NumberFieldIncrementTriggerProps<T extends ValidComponent = "button"> =
  NumberFieldPrimitive.NumberFieldIncrementTriggerProps<T> & {
    class?: string | undefined
    children?: JSX.Element
  }

const NumberFieldIncrementTrigger = <T extends ValidComponent = "button">(
  props: PolymorphicProps<T, NumberFieldIncrementTriggerProps<T>>
) => {
  const [local, others] = splitProps(props as NumberFieldIncrementTriggerProps, [
    "class",
    "children"
  ])
  return (
    <NumberFieldPrimitive.IncrementTrigger
      class={cn(
        "absolute right-[2px] top-[2px] inline-flex  items-center justify-center",
        local.class
      )}
      {...others}
    >
      {local.children ?? (
        <div aria-disabled={others.disabled} class="group">
          <img class="group-aria-disabled:grayscale [image-rendering:pixelated] fill-current text-current group-active:hidden group-hover:hidden group-aria-disabled:block" src="src/assets/tickerup.png"/>
          <img class="[image-rendering:pixelated] fill-current text-current hidden group-active:block group-aria-disabled:hidden" src="src/assets/tickerupactive.png"/>
          <img class="[image-rendering:pixelated] fill-current text-current hidden group-hover:block group-active:hidden group-aria-disabled:hidden" src="src/assets/tickeruphover.png"/>
        </div>
      )}
    </NumberFieldPrimitive.IncrementTrigger>
  )
}

type NumberFieldDecrementTriggerProps<T extends ValidComponent = "button"> =
  NumberFieldPrimitive.NumberFieldDecrementTriggerProps<T> & {
    class?: string | undefined
    children?: JSX.Element
  }

const NumberFieldDecrementTrigger = <T extends ValidComponent = "button">(
  props: PolymorphicProps<T, NumberFieldDecrementTriggerProps<T>>
) => {
  const [local, others] = splitProps(props as NumberFieldDecrementTriggerProps, [
    "class",
    "children"
  ])
  return (
    <NumberFieldPrimitive.DecrementTrigger
      class={cn(
        "absolute bottom-[2px] right-[2px] inline-flex  items-center justify-center",
        local.class
      )}
      {...others}
    >
      {local.children ?? (
                <div aria-disabled={others.disabled} class="group">
                <img class="group-aria-disabled:grayscale aria-disabled:grayscale [image-rendering:pixelated] fill-current text-current group-active:hidden group-hover:hidden group-aria-disabled:block" src="src/assets/tickerdown.png"/>
                <img class="[image-rendering:pixelated] fill-current text-current hidden group-active:block group-aria-disabled:hidden" src="src/assets/tickerdownactive.png"/>
                <img class="[image-rendering:pixelated] fill-current text-current hidden group-hover:block group-active:hidden group-aria-disabled:hidden" src="src/assets/tickerdownhover.png"/>
              </div>
      )}
    </NumberFieldPrimitive.DecrementTrigger>
  )
}

type NumberFieldDescriptionProps<T extends ValidComponent = "div"> =
  NumberFieldPrimitive.NumberFieldDescriptionProps<T> & {
    class?: string | undefined
  }

const NumberFieldDescription = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, NumberFieldDescriptionProps<T>>
) => {
  const [local, others] = splitProps(props as NumberFieldDescriptionProps, ["class"])
  return (
    <NumberFieldPrimitive.Description
      class={cn("text-sm text-muted-foreground", local.class)}
      {...others}
    />
  )
}

type NumberFieldErrorMessageProps<T extends ValidComponent = "div"> =
  NumberFieldPrimitive.NumberFieldErrorMessageProps<T> & {
    class?: string | undefined
  }

const NumberFieldErrorMessage = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, NumberFieldErrorMessageProps<T>>
) => {
  const [local, others] = splitProps(props as NumberFieldErrorMessageProps, ["class"])
  return (
    <NumberFieldPrimitive.ErrorMessage
      class={cn("text-sm text-error-foreground", local.class)}
      {...others}
    />
  )
}

export {
  NumberField,
  NumberFieldGroup,
  NumberFieldLabel,
  NumberFieldInput,
  NumberFieldIncrementTrigger,
  NumberFieldDecrementTrigger,
  NumberFieldDescription,
  NumberFieldErrorMessage
}
