import { useContext } from "react";

import { VoteContext } from "../context/VoteContext";

export const useVote = () => {
  const context = useContext(VoteContext);

  if (context === undefined) {
    throw new Error("useVote() must be used inside a VoteContextProvider");
  }

  return context;
};
