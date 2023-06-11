import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import React, { FC, forwardRef, HTMLAttributes } from "react";

export const paragraphVariants = cva(
  "max-w-prose text-slate-700  mb-2 text-center",
  {
    variants: {
      size: {
        default: "text-base sm:text-lg",
        sm: "text-sm sm:text-base",
        lg: "text-lg sm:text-xl",
        xl: "text-xl sm:text-2xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className={cn(paragraphVariants({ size, className }))}
      >
        {children}
      </p>
    );
  }
);
Paragraph.displayName = "Paragraph";
export default Paragraph;
