import React, { createContext, ReactNode, useContext, useEffect } from 'react';
import { useState } from 'react';
import { useGet } from '../services';
interface AuthProviderProps {
   children: ReactNode;
}
interface AuthContextData {
   authState: PropContext;
   setAuthState: React.Dispatch<React.SetStateAction<PropContext>>;
   userId: number | null;
}
interface PropContext {
   token: string;
   type: string;
}
interface CostumerId {
   costumer: userIdProp;
}
interface userIdProp {
   id: number;
}
const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
   const [authState, setAuthState] = useState({} as PropContext);
   const [userId, setUserId] = useState<number | null>(null);

   useEffect(() => {
      (async () => await fetchData())();
   }, [authState]);

   const { fetchData, data: dataId } = useGet<CostumerId>('/auth', {
      headers: {
         Authorization: ` Bearer ${authState.token}`,
      },
   });

   useEffect(() => {
      dataId?.costumer?.id && setUserId(dataId.costumer.id);
   }, [dataId]);
   return (
      <AuthContext.Provider value={{ authState, setAuthState, userId }}>
         {children}
      </AuthContext.Provider>
   );
}
function useAuth() {
   const context = useContext(AuthContext);
   return context;
}
export { AuthProvider, useAuth };
