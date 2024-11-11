import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const DonutChart = ({acertos, errados}: {acertos: Number, errados: Number}) => {
    
    const total = Number(acertos) + Number(errados);
    const percentAcertos = ((Number(acertos) / total) * 100).toFixed(1);

    const data = [
        { name: 'Acertos', value: acertos },
        { name: 'Errados', value: errados }
    ];
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    useEffect(() => {
        // Handler para atualizar o estado com as novas dimensões da janela
        function handleResize() {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
    
        // Adiciona o evento de redimensionamento
        window.addEventListener('resize', handleResize);
    
        // Remove o evento de redimensionamento ao desmontar o componente
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    const COLORS = ['#4CAF50', '#F44336'];

    return (
        <div className={`relative ${windowSize.width < 720 ? "w-[200px] h-[200px]" : "w-[400px] h-[400px]"} flex mt-0 items-center justify-center mx-auto`}>
            <PieChart width={windowSize.width < 720 ? 200: 400} height={windowSize.width < 720 ? 200: 400}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={windowSize.width < 720 ? 40 : 80}
                    outerRadius={windowSize.width < 720 ? 60 : 120}
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
            <div className="absolute text-center text-md font-bold text-gray-700 text-[12px]">
                {percentAcertos}% Acertos
            </div>
        </div>
    );
};

export default DonutChart;
