import { useState, useEffect } from "react";

export default function RefreshPanel() {
  const [refreshKey, setRefreshKey] = useState(0);
  const [lastRefresh, setLastRefresh] = useState("Never");

  useEffect(() => {
    if (refreshKey === 0) return;
    setLastRefresh(new Date().toLocaleTimeString());
  }, [refreshKey]);

  function handleRefresh() {
    setRefreshKey(refreshKey + 1);
  }

  return (
    <div>
      <p>Last refreshed: {lastRefresh}</p>
      <button onClick={handleRefresh}>Refresh</button>
    </div>
  );
}
