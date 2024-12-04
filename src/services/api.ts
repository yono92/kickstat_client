import axios from 'axios';
import { Standing } from '../types/standings';
import { Match } from '../types/matches';

const api = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const getStandings = async (league: string): Promise<Standing[]> => {
  const { data } = await api.get(`/api/standings/${league}`);
  return data;
};

export const getMatches = async (): Promise<Match[]> => {
  const { data } = await api.get('/api/matches');
  return data;
};


export const getMatchesByDate = async (date: string): Promise<Match[]> => {
    const { data } = await api.get(`/api/matches/date/${date}`);
    return data;
  };