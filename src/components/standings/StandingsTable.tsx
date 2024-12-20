import { Link } from 'react-router-dom';
import { Standing } from '../../types/standings';

interface Props {
 standings: Standing[];
}

export const StandingsTable = ({ standings }: Props) => {
 return (
   <table className="min-w-full bg-white">
     <thead>
       <tr className="bg-gray-100">
         <th className="px-4 py-2">Pos</th>
         <th className="px-4 py-2 text-left">Team</th>
         <th className="px-4 py-2">MP</th>
         <th className="px-4 py-2">W</th>
         <th className="px-4 py-2">D</th>
         <th className="px-4 py-2">L</th>
         <th className="px-4 py-2">GF</th>
         <th className="px-4 py-2">GA</th>
         <th className="px-4 py-2">Pts</th>
       </tr>
     </thead>
     <tbody>
       {standings.map((team) => (
         <tr key={team.position} className="hover:bg-gray-50">
           <td className="border px-4 py-2 text-center">{team.position}</td>
           <td className="border px-4 py-2">
             <Link 
               to={`/team/${team.apiId}`} 
               className="hover:text-blue-600 hover:underline"
             >
               {team.teamName}
             </Link>
           </td>
           <td className="border px-4 py-2 text-center">{team.playedGames}</td>
           <td className="border px-4 py-2 text-center">{team.won}</td>
           <td className="border px-4 py-2 text-center">{team.draw}</td>
           <td className="border px-4 py-2 text-center">{team.lost}</td>
           <td className="border px-4 py-2 text-center">{team.goalsFor}</td>
           <td className="border px-4 py-2 text-center">{team.goalsAgainst}</td>
           <td className="border px-4 py-2 text-center font-bold">{team.points}</td>
         </tr>
       ))}
     </tbody>
   </table>
 );
};