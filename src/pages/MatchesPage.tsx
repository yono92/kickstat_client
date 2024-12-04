import { useState } from "react";
import { MatchList } from "../components/matches/MatchList";
import { useMatches } from "../hooks/useMatches";
import 'react-day-picker/dist/style.css';
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";


export const MatchesPage = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const { data: matches = [] } = useMatches(selectedDate);
   
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Fixtures</h1>
        <div className="flex gap-6">
          <div className="w-80">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={(date) => date && setSelectedDate(date)}
              className="border rounded-lg bg-white shadow-lg p-3"
              footer={selectedDate && (
                <p className="mt-2">Selected: {format(selectedDate, 'PP')}</p>
              )}
            />
          </div>
          <div className="flex-1">
            <MatchList matches={matches} />
          </div>
        </div>
      </div>
    );
   };