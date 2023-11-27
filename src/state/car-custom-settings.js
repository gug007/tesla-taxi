import React, { useEffect, useState } from "react";

const CarCustomSettingsContext = React.createContext(null);

const CarCustomSettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    leaseLength: localStorage.getItem("leaseLength")
      ? +localStorage.getItem("leaseLength")
      : 6,
  });

  useEffect(() => {
    localStorage.setItem("leaseLength", settings?.leaseLength);
  }, [settings]);

  return (
    <CarCustomSettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </CarCustomSettingsContext.Provider>
  );
};

export default CarCustomSettingsProvider;

export const useCarCustomSetting = () => {
  const context = React.useContext(CarCustomSettingsContext);
  if (!context) {
    throw new Error(
      "useCarCustomSetting must be used within a CarCustomSettingsProvider"
    );
  }
  return context;
};
