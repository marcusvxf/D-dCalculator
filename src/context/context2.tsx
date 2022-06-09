/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useMemo } from "react";

type contextProvideProps = {
  children: React.ReactNode;
};

export interface Players {
  level: number;
  qtdd: number;
}
const SecondContext = React.createContext({
  state2: [] as Players[],
  setState2: (player: Players[]) => {}
});

const initial: Players[] = [];

function Context2({ children }: contextProvideProps) {
  const [state2, setState2] = React.useState<Players[]>(initial);
  const contextValue = useMemo(() => {
    return { state2, setState2 };
  }, [state2, setState2]);
  return (
    <SecondContext.Provider value={contextValue}>
      {children}
    </SecondContext.Provider>
  );
}

export { Context2, SecondContext };
