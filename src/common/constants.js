export const voterColumns = [
  { id: 1, heading: "Name", value: "name" },
  { id: 2, heading: "Has voted", value: "hasVoted" },
];

export const candidatesColumn = [
  { heading: "Name", value: "name" },
  { heading: "Votes", value: "voteCounts" },
];

export const exampleState = {
  voters: [
    { id: "1", name: "Ryszard Urodziwy", hasVoted: "x" },
    { id: "2", name: "Halyna Kowalska", hasVoted: "v" },
    { id: "3", name: "Janusz Januszewski", hasVoted: "x" },
    { id: "4", name: "Zbigniew Wielki", hasVoted: "v" },
  ],
  candidates: [
    { id: "1", name: "Queen", voteCounts: 1 },
    { id: "2", name: "AC/DC", voteCounts: 0 },
    { id: "3", name: "Elton John", voteCounts: 1 },
    { id: "4", name: "The Rolling Stones", voteCounts: 0 },
  ],
};
