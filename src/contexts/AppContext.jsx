"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext({
  site: null,
  theme: null,
  config: null,
  pages: null,
  siteMeta: null,
});

export const AppProvider = ({ children, initialSite }) => {
  const [site, setSite] = useState(initialSite?.site || null);
  const [theme, setTheme] = useState(initialSite?.theme || null);
  const [config, setConfig] = useState(initialSite?.config || null);
  const [pages, setPages] = useState(initialSite?.pages || null);
  const [siteMeta, setSiteMeta] = useState(initialSite?.siteMeta || null);

  useEffect(() => {
    if (initialSite) {
      setSite(initialSite.site);
      setTheme(initialSite.theme);
      setConfig(initialSite.config);
      setPages(initialSite.pages);
      setSiteMeta(initialSite.siteMeta);
    }
  }, [initialSite]);

  const contextValue = {
    site,
    theme,
    config,
    pages,
    siteMeta,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
