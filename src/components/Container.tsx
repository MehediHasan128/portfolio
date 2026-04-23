import type { ReactNode } from "react";
import { cn } from "../lib/utils";

const Container = ({ children, className }: { children: ReactNode;  className?: string}) => {
    return <div className={cn("w-[95%] md:w-[90%] mx-auto pt-20 md:pt-42", className)}>{children}</div>;
};

export default Container;