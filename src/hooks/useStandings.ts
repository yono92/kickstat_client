import { useQuery } from '@tanstack/react-query';
import { getStandings } from '../services/api';

export const useStandings = (league: string) => {
    return useQuery({
      queryKey: ['standings', league],
      queryFn: () => getStandings(league),
    });
  };