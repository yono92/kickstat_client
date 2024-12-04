import { Match } from "../../types/matches";

export const MatchCard = ({ match }: { match: Match }) => (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="flex justify-between items-center">
        <div className="flex-1 text-right">{match.homeTeamName}</div>
        <div className="mx-4 font-semibold">
          {match.status === 'FINISHED' 
            ? `${match.homeScore} - ${match.awayScore}`
            : new Date(match.matchDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        </div>
        <div className="flex-1">{match.awayTeamName}</div>
      </div>
    </div>
   );