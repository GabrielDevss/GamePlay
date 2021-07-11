import React,
{
  createContext,
  ReactNode,
  useContext,
  useState
} from 'react';

import * as AuthSession from 'expo-auth-session';
import { 
  REDIRECT_URI,
  RESPONSE_TYPE,
  CDN_IMAGE,
  CLIENT_ID,
  SCOPE 
} from '../config';
import { api } from '../services/api';

type User = {
  id: string;
  username: string;
  fisrtname: string;
  email: string;
  token: string;
  avatar: string;
}

type AuthContextData = {
  user: User;
  singIn: () => Promise<void>;
}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [ user, setUser ] = useState<User>({} as User);
  const [isLonding, setIsLonding] = useState(false);

 async function singIn() {
    try {
        setIsLonding(true);

        const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const response =  AuthSession.startAsync({ authUrl })
      console.log(response);

    }catch {
      throw new Error('Não foi possível autenticar');
    }
  }
  
  return(
    <AuthContext.Provider value={{
      user,
      singIn
    }}>
      { children }
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
export { 
  AuthProvider,
  useAuth
} 
 