declare global {
  interface Window {
    LOQ?: Array<any>;
  }
}

export const trackLuckyOrangePage = (): void => {
  try {
    if (window.LOQ && Array.isArray(window.LOQ)) {
      window.LOQ.push(["pageview"]);
    } else {
      // Initialize LOQ if not ready
      window.LOQ = [["pageview"]];
    }
  } catch (error) {
    console.warn("Lucky Orange tracking failed:", error);
  }
};
