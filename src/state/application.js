import React, { useCallback, useEffect, useState } from "react";

import { REACT_APP_SERVER_URL } from "../config";

const ApplicationContext = React.createContext(null);

const ApplicationProvider = ({ id, children }) => {
  const [application, setApplications] = useState();
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  const refetch = useCallback(() => {
    setCounter((v) => v + 1);
  }, [setCounter]);

  useEffect(() => {
    fetch(`${REACT_APP_SERVER_URL}/v1/app/applications/${id}`)
      .then((response) => response.json())
      .then((response) => {
        setApplications(response.data.attributes);
        setLoading(false);
      });
  }, [id, counter, setApplications, setLoading]);

  return (
    <ApplicationContext.Provider value={{ application, refetch, loading }}>
      {children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationProvider;

export const useApplication = () => {
  const context = React.useContext(ApplicationContext);
  if (!context) {
    // throw new Error("useApplication must be used within a ApplicationProvider");
  }
  return context;
};
