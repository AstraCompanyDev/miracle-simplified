import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackGA4Page } from "@/lib/googleAnalytics";
import { trackLuckyOrangePage } from "@/lib/luckyOrange";

const RouteTracker: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname + location.search;

    // GA4
    if (process.env.NODE_ENV === "production") {
      trackGA4Page(path);
    }

    // Lucky Orange
    trackLuckyOrangePage();
  }, [location]);

  return null;
};

export default RouteTracker;
