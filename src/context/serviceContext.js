import { createContext, useState } from "react";

const ServiceContext = createContext();

export function ServiceProvider({ children }) {
  const [service, setService] = useState(74);

  return (
    <ServiceContext.Provider value={{ service, setService }}>
      {children}
    </ServiceContext.Provider>
  );
}

export default ServiceContext;
