import { useParams } from 'react-router-dom';
import { useTeamDetail } from '../../hooks/useTeamDetail';
import { InfoItem } from '../common/InfoItem';

export const TeamDetailPage = () => {
   const { id } = useParams<{ id: string }>();
   const { data: team, isLoading } = useTeamDetail(Number(id));

   if (isLoading) return <div>Loading...</div>;
   if (!team) return <div>Team not found</div>;

   return (
       <div className="p-6">
           <div className="bg-white rounded-lg shadow-lg p-6">
               <div className="flex items-center gap-6 mb-8">
                   <img 
                       src={team.crest} 
                       alt={team.name} 
                       className="w-32 h-32 object-contain"
                   />
                   <div>
                       <h1 className="text-3xl font-bold">{team.name}</h1>
                       <p className="text-gray-600">{team.shortName} ({team.tla})</p>
                   </div>
               </div>

               <div className="grid grid-cols-2 gap-6">
                   <div className="space-y-4">
                       <InfoItem label="Stadium" value={team.venue} />
                       <InfoItem label="Founded" value={team.founded} />
                       <InfoItem label="Club Colors" value={team.clubColors} />
                   </div>
                   <div>
                       {team.website && (
                           <a 
                               href={team.website}
                               target="_blank"
                               rel="noopener noreferrer"
                               className="text-blue-600 hover:underline"
                           >
                               Official Website
                           </a>
                       )}
                   </div>
               </div>
           </div>
       </div>
   );
};
