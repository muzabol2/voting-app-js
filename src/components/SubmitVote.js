import { useState } from "react";
import { useVote } from "../hooks/useVote";
import Heading from "../common/Heading";

export const SubmitVote = () => {
   const { voters, candidates, voteForCandidate } = useVote();
   const [voterId, setVoterId] = useState("default");
   const [candidateId, setCandidateId] = useState("default");

   const handleSubmit = (e) => {
      e.preventDefault();
      if (voterId !== "default" && candidateId !== "default") {
         const changedVoter = voters.find(v => v.id === voterId)
         changedVoter.hasVoted = "v";
         const changedCandidate = candidates.find(c => c.id === candidateId)
         changedCandidate.voteCounts += 1;
         voteForCandidate(changedVoter, changedCandidate);
         e.target.reset();
      }
   };

   return (
      <div>
         <Heading>Vote!</Heading>
         <form onSubmit={handleSubmit}>
            <select
               id="voter-select"
               defaultValue={voterId}
               onChange={(e) => setVoterId(e.target.value)}>
               <option value="default" disabled hidden>
                  I am
               </option>
               {voters?.filter(v => v.hasVoted === "x").map(v => (
                  <option key={v.id} value={v.id}>
                     {v.name}
                  </option>
               ))}
            </select>
            <select
               id="candidate-select"
               defaultValue={candidateId}
               onChange={(e) => setCandidateId(e.target.value)}>
               <option value="default" disabled hidden>
                  I vote for
               </option>
               {candidates?.map(c => (
                  <option key={c.id} value={c.id}>
                     {c.name}
                  </option>
               ))}
            </select>
            <button>Submit!</button>
         </form>
      </div>
   );
};

