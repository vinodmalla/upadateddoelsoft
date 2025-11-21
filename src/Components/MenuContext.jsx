// MenuContext.js
import { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState("");

  // Sync with URL automatically
  useEffect(() => {
    if (location.pathname === "/") setActiveMenu("home");
    else if (location.pathname === "/chooseus") setActiveMenu("chooseus");
    else if (location.pathname === "/solutions") setActiveMenu("solutions");
    else if (location.pathname === "/softwareDevelopment") setActiveMenu("solutions");
    else if (location.pathname === "/mobileDevelopment") setActiveMenu("solutions");
    else if (location.pathname === "/salesforce") setActiveMenu("solutions");
    else if (location.pathname === "/servicesweb") setActiveMenu("solutions");
    else if (location.pathname === "/servicesuiux") setActiveMenu("solutions");
    else if (location.pathname === "/digitalaccessibilit") setActiveMenu("solutions");
    else if (location.pathname === "/servicesmicrosoft") setActiveMenu("solutions");
      else if (location.pathname === "/servicesmulesoft") setActiveMenu("solutions");
        else if (location.pathname === "/servicesiot") setActiveMenu("solutions");
          else if (location.pathname === "/salesforce") setActiveMenu("solutions");
          else if (location.pathname === "/servicesembedded") setActiveMenu("solutions");
          else if (location.pathname === "/servicesqa") setActiveMenu("solutions");
          else if (location.pathname === "/talenthub") setActiveMenu("talenthub");
          else if (location.pathname === "/itstaffing") setActiveMenu("talenthub");
          else if (location.pathname === "/contract") setActiveMenu("talenthub");
          else if (location.pathname === "/permanent") setActiveMenu("talenthub");
          else if (location.pathname === "/excutive") setActiveMenu("talenthub");
          else if (location.pathname === "/rpo") setActiveMenu("talenthub");
    else if (location.pathname==="/insights") setActiveMenu("insights");
    else if (location.pathname==="/carrers") setActiveMenu("carrers");
    else if (location.pathname==="/contact") setActiveMenu("contact");
    else setActiveMenu("");
  }, [location.pathname]);

  return (
    <MenuContext.Provider value={{ activeMenu, setActiveMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
