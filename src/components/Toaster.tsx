// Tremor Toaster [v0.0.0]
import React from "react"

import { useToast } from "@/hooks/useToast"

import { Toast, ToastProvider, ToastViewport } from "./Toast"

const Toaster = () => {
  const { toasts } = useToast()

  return (
    <ToastProvider swipeDirection="right">
      {toasts.map(({ id, ...props }) => {
        return <Toast key={id} {...props} />
      })}
      <ToastViewport />
    </ToastProvider>
  )
}

export { Toaster }