import { useReducer, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

import { exampleState } from "../common/constants";

export const VoteContext = createContext();

const initialState = exampleState;
// If you want to start with an empty lists - change initial state here:
// const initialState = {
//    voters: [],
//    candidates: []
// };

export const voteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CANDIDATE":
      return {
        ...state,
        candidates: [...state.candidates, action.payload],
      };
    case "ADD_VOTER":
      return {
        ...state,
        voters: [...state.voters, action.payload],
      };
    case "VOTE_FOR_CANDIDATE":
      return {
        ...state,
        voter: [
          ...state.voters.filter((c) => c.id !== action.payload.voter.id),
          action.payload.voter,
        ],
        candidate: [
          ...state.candidates.filter(
            (c) => c.id !== action.payload.candidate.id
          ),
          action.payload.candidate,
        ],
      };
    case "CLEAN_LISTS":
      return { voters: [], candidates: [] };
    default:
      return state;
  }
};

export const VoteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(voteReducer, initialState);

  const addCandidate = (candidate) => {
    dispatch({
      type: "ADD_CANDIDATE",
      payload: { id: uuidv4(), name: candidate, voteCounts: 0 },
    });
  };

  const addVoter = (voter) => {
    dispatch({
      type: "ADD_VOTER",
      payload: { id: uuidv4(), name: voter, hasVoted: "x" },
    });
  };

  const voteForCandidate = (voter, candidate) => {
    dispatch({
      type: "VOTE_FOR_CANDIDATE",
      payload: { voter, candidate },
    });
  };

  const cleanLists = () => {
    dispatch({ type: "CLEAN_LISTS", payload: null });
  };

  return (
    <VoteContext.Provider
      value={{ ...state, addCandidate, addVoter, voteForCandidate, cleanLists }}
    >
      {children}
    </VoteContext.Provider>
  );
};
