import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    (<textarea
      className={cn(
        "flex h-[80px] w-full rounded-md    px-4 py-5 text-base  focus:border-[#00ff99] placeholder:text-white/60 bg-[#1c1c22]   font-light",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Textarea.displayName = "Textarea"

export { Textarea }
