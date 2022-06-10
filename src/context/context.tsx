/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useMemo, useState } from "react";

type contextProvideProps = {
  children: React.ReactNode;
};

export interface Monster {
  name: string;
  dif: number;
  exp: number;
  life: number;
  qtdd: number;
}

// type propUserContext = {
//   state: appContextInterface;
//   setState: React.Dispatch<React.SetStateAction<appContextInterface>>;
// };

// const initialState = {
//   state: [],
//   setState: () => {}
// };

const firstContext = React.createContext({
  state: [] as Monster[],
  setState: (state: Monster[]) => {}
});

const initial: Monster[] = [];

function Context({ children }: contextProvideProps) {
  const [state, setState] = useState(initial);

  const contextValue = useMemo(() => {
    return { state, setState };
  }, [state, setState]);
  return (
    <firstContext.Provider value={contextValue}>
      {children}
    </firstContext.Provider>
  );
}

export { firstContext, Context };
