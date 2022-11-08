import { createContext, useContext, useState } from "react";

const LoadingContext = createContext();
export const useLoading = () => useContext(LoadingContext);

const ProviderContext = ({children}) => {
  const [loading, setLoading] = useState(false);

  const show = () => {
    setLoading(true)
  }

  const close = () => {
    setLoading(false)
  }

  return (
    <LoadingContext.Provider value={{loading, close, show}}>
      {children}
    </LoadingContext.Provider>
  );
};

export default ProviderContext;
