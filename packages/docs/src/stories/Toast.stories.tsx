import { useEffect, useRef, useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'

import { Button, Toast, ToastProps } from '@curso-ignite-ui/react'

const ToastDemo = (props: ToastProps) => {
  const [open, setOpen] = useState(false)

  const timerRef = useRef(0)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <div>
      <Button
        onClick={() => {
          setOpen(false)
          window.clearTimeout(timerRef.current)
          timerRef.current = window.setTimeout(() => {
            setOpen(true)
          }, 100)
        }}
      >
        Click me
      </Button>
      <Toast open={open} onOpenChange={setOpen} {...props} />
    </div>
  )
}

export default {
  title: 'Feedback/Toast',
  component: ToastDemo,
  args: {
    title: 'Toast title',
    description: 'Toast description example',
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
