import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils" // Lưu ý: Chỉnh lại đường dẫn tới utils cho đúng cấu trúc thư mục của bạn nếu cần

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-[7px] font-medium transition-all duration-150 ease-out outline-none select-none disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-accent text-white hover:bg-accent-hover",
        outline: "border border-border-strong text-text bg-transparent hover:border-accent hover:text-accent",
        ghost: "text-text-secondary hover:text-text hover:bg-surface-alt",
        surface: "bg-surface text-accent shadow-raised hover:shadow-floating",
        destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20",
        link: "text-accent underline-offset-4 hover:underline",
      },
      size: {
        default: "text-[14px] px-4 py-2",
        sm: "text-[13px] px-3 py-1.5",
        lg: "text-[15px] px-5 py-2.5",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }