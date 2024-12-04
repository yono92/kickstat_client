
import { useMemo } from "react";
import { Match } from "../../types/matches";
import { MatchCard } from "./MatchCard";


export const MatchList = ({ matches }: { matches: Match[] }) => {
    const groupedMatches = useMemo(() => {
      return matches.reduce((acc, match) => {
        const matchDate = new Date(match.matchDate).toLocaleDateString();
        if (!acc[matchDate]) acc[matchDate] = [];
        acc[matchDate].push(match);
        return acc;
      }, {} as Record<string, Match[]>);
    }, [matches]);
   
    return (
      <div className="space-y-6">
        {Object.entries(groupedMatches).map(([date, matches]) => (
          <div key={date} className="border rounded-lg p-4">
            <h2 className="font-semibold mb-3">{date}</h2>
            <div className="space-y-3">
              {matches.map(match => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
   };