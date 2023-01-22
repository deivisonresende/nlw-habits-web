import { generateDatesFromYearBeginning } from "../../../utils/generateDatesFromYearBeginning"
import { HabitDay } from "./HabitDay"

const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

const summaryDates = generateDatesFromYearBeginning() 
const minSummaryDateSize = 18 * 7 // 18 weeks
const amountOfDaysToFill = minSummaryDateSize - summaryDates.length 

export function SummaryTable(){
  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {
          weekdays.map((day, i) => (
            <div 
              key={`${day}-${i}`} 
              className="text-zinc-400 font-bold text-xl h-10 w-10 flex items-center justify-center"
            >
              {day}
            </div>
            )
          )
        }
      </div>
      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {
          summaryDates.map(date => <HabitDay key={date.toString()} />)
        }

        { 
          amountOfDaysToFill > 0 && Array.from({  length: amountOfDaysToFill }).map((_, i) => 
            <div 
              key={i} 
              className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-50 cursor-not-allowed" 
            />
          )
        }
      </div>
    </div>
  )
}