import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-[48px] w-full rounded-md    px-4 py-5 text-base  focus:border-[#00ff99] placeholder:text-white/60 bg-[#1c1c22]   font-light",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
