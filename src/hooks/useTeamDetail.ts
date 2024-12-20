import { useQuery } from '@tanstack/react-query';
import { getTeamDetail } from '../services/api';

export const useTeamDetail = (teamId: number) => {
   return useQuery({
       queryKey: ['team', teamId],
       queryFn: () => getTeamDetail(teamId)
   });
};
