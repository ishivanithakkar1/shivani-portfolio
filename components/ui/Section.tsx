import { ComponentPropsWithoutRef, ReactNode } from "react";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
    children: ReactNode;
};

export function Section({
    children,
    className = "",
    ...props
}: SectionProps) {
    return (
        <section
            className={`py-24 lg:py-32 ${className}`}
            {...props}
        >
            {children}
        </section>
    );
}