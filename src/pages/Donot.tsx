import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const DonutChart = () => {
    const acertos = 70;
    const erros = 30;
    const total = acertos + erros;
    const percentAcertos = ((acertos / total) * 100).toFixed(1);

    const data = [
        { name: 'Acertos', value: acertos },
        { name: 'Erros', value: erros }
    ];

    const COLORS = ['#4CAF50', '#F44336'];

    return (
        <div className="relative w-[400px] h-[400px] flex mt-0 items-center justify-center mx-auto">
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip formatter={(value) => `${value} %`} />
            </PieChart>

            {/* Texto central com Tailwind */}
            <div className="absolute text-center text-md font-bold text-gray-700">
                {percentAcertos}% Acertos
            </div>
        </div>
    );
};

export default DonutChart;
