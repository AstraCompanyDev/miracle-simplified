declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

// export const initGA = (): void => {
//   const gaId = import.meta.env.VITE_GA_ID;
//   if (!gaId) {
//     console.warn("GA ID not found in .env");
//     return;
//   }

//   if (typeof window.gtag !== "function") {
//     console.warn("gtag not loaded yet.");
//     return;
//   }

//   window.gtag("js", new Date());
//   window.gtag("config", gaId, { anonymize_ip: true });
// };

export const initGoogleAnalytics = (measurementId: string) => {
  if (!measurementId) return;

  // Add GA script
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Add gtag config
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  // @ts-ignore
  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", measurementId);
};

export const trackGA4Page = (path: string): void => {
  const gaId = import.meta.env.VITE_GA_ID;
  if (!gaId || typeof window.gtag !== "function") return;

  window.gtag("config", gaId, {
    page_path: path,
    page_location: window.location.href,
  });
};
