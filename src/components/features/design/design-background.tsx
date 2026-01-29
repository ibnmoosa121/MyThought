"use client";


export const DesignBackground = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black">
            {/* Grain Overlay */}
            <div className="absolute inset-0 opacity-[0.1] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
    );
};
