import republican from "./republican.png";
import democratic from "./democratic.png";
import american from "./american.png";

import { useState } from "react";

import "./App.css";

const ElectionResults = ({ democrats, republicans, independent }) => {
  const totalVotes = democrats + republicans + independent;

  const democratPercentage = (democrats / totalVotes) * 100 || 0;
  const republicanPercentage = (republicans / totalVotes) * 100 || 0;
  const independentPercentage = (independent / totalVotes) * 100 || 0;

  return (
    <div className="vote-statistics">
      <h3>Vote Statistics</h3>
      <p>Total Votes: {totalVotes}</p>
      <p>
        Democrats: {democrats} ({democratPercentage.toFixed(2)}%)
      </p>
      <p>
        Republicans: {republicans} ({republicanPercentage.toFixed(2)}%)
      </p>
      <p>
        Independent: {independent} ({independentPercentage.toFixed(2)}%)
      </p>
    </div>
  );
};

const Ballot = ({
  democrats,
  republicans,
  independent,
  setDemocrats,
  setRepublicans,
  setIndependent,
}) => {
  return (
    <div className="party-container">
      <div className="party">
        <h2>Democrats</h2>
        <div className="box blue">
          <img src={democratic} alt="Democrats" className="party-image" />
          <br />
          <button
            onClick={() => setDemocrats(democrats + 1)}
            className="vote-button"
          >
            Vote
          </button>
          <p className="vote-count">Vote Count: {democrats}</p>
        </div>
      </div>

      <div className="party">
        <h2>Republicans</h2>
        <div className="box red">
          <img src={republican} alt="Republicans" className="party-image" />
          <br />
          <button
            onClick={() => setRepublicans(republicans + 1)}
            className="vote-button"
          >
            Vote
          </button>
          <p className="vote-count">Vote Count: {republicans}</p>
        </div>
      </div>

      <div className="party">
        <h2>Independent</h2>
        <div className="box yellow">
          <img src={american} alt="Independents" className="party-image" />
          <br />
          <button
            onClick={() => setIndependent(independent + 1)}
            className="vote-button"
          >
            Vote
          </button>
          <p className="vote-count">Vote Count: {independent}</p>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [democrats, setDemocrats] = useState(0);
  const [republicans, setRepublicans] = useState(0);
  const [independent, setIndependent] = useState(0);

  return (
    <>
      <Ballot
        democrats={democrats}
        republicans={republicans}
        independent={independent}
        setDemocrats={setDemocrats}
        setRepublicans={setRepublicans}
        setIndependent={setIndependent}
      />
      <ElectionResults
        democrats={democrats}
        republicans={republicans}
        independent={independent}
      />
    </>
  );
};

export default App;
