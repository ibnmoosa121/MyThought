// Section Divider Component

interface SectionDividerProps {
    type?: "glow" | "fade" | "curve";
    direction?: "top" | "bottom";
    color?: string;
    className?: string;
}

export const SectionDivider = ({
    type = "glow",
    direction = "bottom",
    color = "from-primary/20",
    className = ""
}: SectionDividerProps) => {
    if (type === "glow") {
        return (
            <div className={`absolute left-0 w-full h-px z-20 overflow-visible ${direction === "bottom" ? "bottom-0" : "top-0"} ${className}`}>
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-32 bg-gradient-to-r ${color} to-transparent opacity-30 blur-[60px] rounded-full`} />
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent`} />
            </div>
        );
    }

    if (type === "fade") {
        return (
            <div
                className={`absolute left-0 w-full h-40 z-20 pointer-events-none ${direction === "bottom" ? "bottom-0 bg-gradient-to-t" : "top-0 bg-gradient-to-b"} from-black to-transparent ${className}`}
            />
        );
    }

    return null;
};
