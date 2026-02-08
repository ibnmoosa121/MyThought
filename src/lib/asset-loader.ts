/**
 * Asset Loader Utility
 * Handles preloading of images and dynamic components
 */

export const preloadImage = (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve();
        img.onerror = reject;
    });
};

export const preloadImages = async (srcs: string[]): Promise<void[]> => {
    return Promise.all(srcs.map(src => preloadImage(src)));
};

/**
 * Prefetches a route component chunk
 */
export const prefetchRoute = (importFn: () => Promise<any>) => {
    importFn();
};

export const criticalImages = [
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=70&w=1200&auto=format&fit=crop", // Background
    "https://grainy-gradients.vercel.app/noise.svg", // Noise
];

export const homePageImages = [
    "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?q=75&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=75&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=75&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=75&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=75&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=75&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=75&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=75&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=75&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=75&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=75&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=75&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=75&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=75&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=75&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=75&w=600&auto=format&fit=crop"
];

export const serviceImages = [
    'https://images.unsplash.com/photo-1518770660431-4633f4f9de7b?q=80&w=2069&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2069&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1626013261137-ee9872e2fb00?q=80&w=2069&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop'
];
