import { ListOfPeople } from "./components/ListOfPeople";
import { SubmitVoteForm } from "./components/SubmitVoteForm";
import { useVote } from "./hooks/useVote";
import Heading from "./common/heading/Heading";
import { candidatesColumn, voterColumns } from "./common/constants";

import "./App.css";

function App() {
  const { voters, candidates, addVoter, addCandidate, cleanLists } = useVote();

  return (
    <div className="app">
      <Heading>Voting app</Heading>
      <button className="clean-btn" onClick={() => cleanLists()}>
        Clean the lists
      </button>
      <div className="lists-container">
        <ListOfPeople
          label="voter"
          data={voters}
          columns={voterColumns}
          addNewPerson={addVoter}
        />
        <ListOfPeople
          label="candidate"
          data={candidates}
          columns={candidatesColumn}
          addNewPerson={addCandidate}
        />
      </div>
      <SubmitVoteForm />
    </div>
  );
}

export default App;
