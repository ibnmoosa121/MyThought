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
            <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E')]" />
        </div>
    );
};
