import { useState } from "react";
import { LeagueSelector
 } from "../components/standings/LeagueSelector";

 import { StandingsTable } from "../components/standings/StandingsTable";
import { useStandings } from "../hooks/useStandings";


export const StandingsPage = () => {
    const [selectedLeague, setSelectedLeague] = useState('PL');
    const { data: standings = [] } = useStandings(selectedLeague);
  
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">League Standings</h1>
        <div className="mb-4">
          <LeagueSelector 
            selectedLeague={selectedLeague} 
            onLeagueChange={setSelectedLeague}
          />
        </div>
        <StandingsTable standings={standings} />
      </div>
    );
  };