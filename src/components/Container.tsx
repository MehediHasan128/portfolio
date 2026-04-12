import type { ReactNode } from "react";
import { cn } from "../lib/utils";

const Container = ({ children, className }: { children: ReactNode;  className?: string}) => {
    return <div className={cn("2xl:w-[90%] mx-auto py-20", className)}>{children}</div>;
};

export default Container;