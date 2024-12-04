export interface Match {
    id: number;
    homeTeamName: string;
    awayTeamName: string;
    homeScore: number | null;
    awayScore: number | null;
    status: string;
    matchDate: string;
    competition: string;
}