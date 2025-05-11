import React from "react";

type BadgeProps = React.ComponentPropsWithoutRef<"span">;

// interface BadgeProps extends React.ComponentPropsWithoutRef<"span"> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, className, ...props }: BadgeProps, forwardedRef) => {
    return (
      <span
        ref={forwardedRef}
        className={`z-10 block w-fit rounded-lg border border-blue-500/20 bg-blue-100/50 px-3 py-1.5 font-semibold uppercase leading-4 tracking-tighter sm:text-sm ${className ?? ""}`}
        {...props}
      >
        <span className="bg-gradient-to-b from-blue-400 to-blue-500 bg-clip-text text-transparent">
          {children}
        </span>
      </span>
    );
  }
);

Badge.displayName = "Badge";

export { Badge, type BadgeProps };
