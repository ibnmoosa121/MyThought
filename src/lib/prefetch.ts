/**
 * Utility functions for intent-based page prefetching.
 * Prefetches the code split chunks of lazy-loaded pages on user hover.
 */

export const prefetchPages = {
  software: () => import('../pages/software'),
  consultancy: () => import('../pages/consultancy'),
  talent: () => import('../pages/talent'),
  design: () => import('../pages/design'),
  ventures: () => import('../pages/ventures'),
  fintech: () => import('../pages/fintech'),
  'ai-analytics': () => import('../pages/ai-analytics'),
  logistics: () => import('../pages/logistics'),
  'about-us': () => import('../pages/about-us'),
  blog: () => import('../pages/blog'),
  contact: () => import('../pages/contact'),
  portfolio: () => import('../pages/portfolio'),
};

export const prefetchPage = (key: string) => {
  const prefetcher = prefetchPages[key as keyof typeof prefetchPages];
  if (prefetcher) {
    prefetcher().catch((err) => console.warn(`Failed to prefetch page: ${key}`, err));
  }
};
