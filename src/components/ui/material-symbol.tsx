import React from "react";
import { cn } from "@/lib/utils";

export interface MaterialSymbolProps extends React.HTMLAttributes<HTMLSpanElement> {
    icon: string;
    size?: number | string;
    fill?: boolean;
    weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;
    grade?: -25 | 0 | 200;
    opticalSize?: 20 | 24 | 40 | 48;
}

export const MaterialSymbol = React.forwardRef<HTMLSpanElement, MaterialSymbolProps>(
    ({ icon, className, size, fill, weight, grade, opticalSize, style, ...props }, ref) => {
        const fontVariationSettings = [
            fill ? "'FILL' 1" : "'FILL' 0",
            weight ? `'wght' ${weight}` : undefined,
            grade ? `'GRAD' ${grade}` : undefined,
            opticalSize ? `'opsz' ${opticalSize}` : undefined,
        ]
            .filter(Boolean)
            .join(", ");

        return (
            <span
                ref={ref}
                className={cn("material-symbols-outlined select-none", className)}
                style={{
                    fontSize: size,
                    fontVariationSettings,
                    ...style,
                }}
                {...props}
            >
                {icon}
            </span>
        );
    }
);

MaterialSymbol.displayName = "MaterialSymbol";
