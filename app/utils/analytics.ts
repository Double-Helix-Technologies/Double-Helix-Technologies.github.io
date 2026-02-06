export function track(eventName: string, props?: Record<string, any>) {
  // Lightweight analytics wrapper - currently just logs
  // Easy to replace with actual analytics later
  console.log(`[Analytics] ${eventName}`, props || {});
  
  // Future: Replace with actual analytics
  // if (typeof window !== 'undefined' && window.gtag) {
  //   window.gtag('event', eventName, props);
  // }
}
