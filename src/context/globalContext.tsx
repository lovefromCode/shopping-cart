import React, { createContext, ReactNode, useState } from 'react'

//* Simple usecase
// interface UserContextProps {
//   user: string;
//   setUser: (user: string) => void;
// }

// interface UserContextProviderProps {
//   children: ReactNode;
// }

// const initialState: UserContextProps = {
//   user: "",
//   setUser: () => { 
//     console.log("user1");

//   }
// }
// export const UserContext = createContext<UserContextProps>(initialState);


// export const UserProvider = ({ children }: UserContextProviderProps) => {
//   const [user, setUserState] = useState("");

//   const setUser = (user: string) => {
//     setUserState(user);
//     console.log("user 2");

//   };

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };


//* -------------- SECOND CASE ------------
interface CartItem {
  id: number | undefined,
  category: string | undefined
  description: string | undefined
  price: number | undefined
  title: string | undefined
  rating: number | undefined
  image: string | undefined
}

interface ContextProps {
  cartItem: CartItem[],
  globalChangeState: (value: ContextProps) => void,
}


interface GlobalContextProviderProps {
  children: ReactNode;
}

const initialState: ContextProps = {
  cartItem: [{
    id: undefined,
    category: undefined,
    description: undefined,
    price: undefined,
    title: undefined,
    rating: undefined,
    image: undefined,
  }],
  globalChangeState: () => {},
};

export const GlobalContextObj = createContext<ContextProps>(initialState);

export const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
  const [state, setState] = useState<ContextProps>(initialState);
  const globalChangeState = (value: ContextProps) => {
    setState(prevState => {
      return {
        ...prevState,
        ...value,
      };
    });
  }

  return (
    <GlobalContextObj.Provider value={{ ...state, globalChangeState }}> {children} </GlobalContextObj.Provider>
  );
};



