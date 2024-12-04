export const Sidebar = () => {
    const leagues = [
      { id: 'PL', name: 'Premier League' },
      { id: 'PD', name: 'La Liga' },
      { id: 'BL1', name: 'Bundesliga' }
    ];
  
    return (
      <aside className="w-64 bg-gray-100 min-h-screen p-4">
        <h2 className="font-bold mb-4">Leagues</h2>
        <ul className="space-y-2">
          {leagues.map(league => (
            <li key={league.id}>
              <a href={`/standings/${league.id}`} className="hover:text-blue-600">
                {league.name}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    );
  };