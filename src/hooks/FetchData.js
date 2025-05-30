import { useState, useEffect } from "react";
import { getData } from "../services/getEvents";

export default function spotlightPerformanceData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getDataFromJson() {
      const data = await getData("performanceSpotlight");
      setData(data);
      setLoading(false);
    }

    getDataFromJson();
  }, []);

  return { data, loading };
}
