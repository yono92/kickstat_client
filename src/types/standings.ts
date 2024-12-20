export interface Standing {
    id: number; 
    apiId: number;
    position: number;
    teamName: string;
    playedGames: number;
    won: number;
    draw: number;
    lost: number;
    goalsFor: number;
    goalsAgainst: number;
    points: number;
}