import type { DesignPalette } from "../../../data/design-palettes";

export const DesignBackground = ({ palette }: { palette: DesignPalette }) => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black">
            {/* Dynamic Background Glows */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] rounded-full blur-[150px] opacity-[0.05] transition-colors duration-1000"
                style={{ backgroundColor: palette.bgGlow[0] }}
            />
            {/* Grain Overlay */}
            <div className="absolute inset-0 opacity-[0.1] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
    );
};
