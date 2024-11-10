import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import "./Calendar.css"
export function CalendarLog() {
    return (
    <CalendarHeatmap
    showWeekdayLabels
    classForValue={(value) => {
        if (!value) {
            return "color-empty";
        }
        return `presente`;
    }}
    monthLabels={  ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']}
    weekdayLabels={['Dom', 'Seg', 'Ter', 'Qua', 'Qui',  'Sex', 'Sab']}
    onClick={(value) => alert(JSON.stringify(value))}
        startDate={new Date('2024-06-01')}
        titleForValue={(value) => {
            if (!value) {
                return "Sem atividade";
            }
            return `${format(value.date, "PPP", { locale: ptBR })}`;
        }}
        endDate={new Date('2024-12-31')}
        values={[{ date: '2024-01-01', count: 1 },
            {date: '2024-01-22', count: 1 },
            {date: '2024-01-30', count: 1 },
            {date: '2021-02-01', count: 1 },
            {date: '2024-11-22', count: 1 },

        ]}
         
    />

    )   
}