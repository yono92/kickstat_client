interface Props {
    selectedLeague: string;
    onLeagueChange: (league: string) => void;
  }
  
  export const LeagueSelector = ({ selectedLeague, onLeagueChange }: Props) => {
    const leagues = [
      { id: 'PL', name: 'Premier League' },
      { id: 'PD', name: 'La Liga' },
      { id: 'BL1', name: 'Bundesliga' }
    ];
  
    return (
      <select 
        value={selectedLeague} 
        onChange={(e) => onLeagueChange(e.target.value)}
        className="border rounded p-2"
      >
        {leagues.map(league => (
          <option key={league.id} value={league.id}>{league.name}</option>
        ))}
      </select>
    );
  };