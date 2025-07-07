import { cn } from "@/lib/utils";
  import React from "react";

  export interface OrbitingCirclesProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
  startAngle?: number; // NEW
}

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 70,
  speed = 1,
  startAngle = 0, // NEW
  ...props
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed;
  const childArray = React.Children.toArray(children);

  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-black/10 stroke-1 dark:stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      {childArray.map((child, index) => {
        const angle = startAngle + (360 / childArray.length) * index; // MODIFIED
        return (
          <div
            key={index}
            style={
              {
                "--duration": calculatedDuration,
                "--radius": radius,
                "--angle": angle,
                "--icon-size": `${iconSize}px`,
              } as React.CSSProperties
            }
            className={cn(
              `absolute flex size-[var(--icon-size)] transform-gpu animate-orbit items-center justify-center rounded-full`,
              { "[animation-direction:reverse]": reverse },
              className
            )}
            {...props}
          >
            {child}
          </div>
        );
      })}
    </>
  );
}
