export type DesignPalette = {
    name: string;
    colors: string[];
    bgGlow: string[];
};

export const designPalettes: DesignPalette[] = [
    {
        name: "Electric",
        colors: ["#6366F1", "#D946EF", "#F43F5E", "#F59E0B", "#22D3EE"],
        bgGlow: ["#6366F1", "#F43F5E"]
    },
    {
        name: "Cyberpunk",
        colors: ["#ff0055", "#00ff9f", "#00b8ff", "#bd00ff", "#ff8c00"],
        bgGlow: ["#ff0055", "#00b8ff"]
    },
    {
        name: "Midnight",
        colors: ["#2C3E50", "#4CA1AF", "#2c3e50", "#000000", "#ffffff"],
        bgGlow: ["#4CA1AF", "#2C3E50"]
    },
    {
        name: "Aurora",
        colors: ["#F2994A", "#F2C94C", "#27AE60", "#2D9CDB", "#9B51E0"],
        bgGlow: ["#27AE60", "#9B51E0"]
    },
    {
        name: "Lava",
        colors: ["#f12711", "#f5af19", "#ff4b1f", "#ff9068", "#f00000"],
        bgGlow: ["#f12711", "#f5af19"]
    }
];
