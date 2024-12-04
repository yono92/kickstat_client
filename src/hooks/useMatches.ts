import { useQuery } from "@tanstack/react-query";
import { getMatches, getMatchesByDate } from "../services/api";

export const useMatches = (date: Date) => {
  const formattedDate = date.toISOString().split('T')[0];
  return useQuery({
    queryKey: ['matches', formattedDate],
    queryFn: () => getMatchesByDate(formattedDate)
  });
 };