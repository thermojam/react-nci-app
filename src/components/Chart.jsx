import { useEffect, useState } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
} from 'chart.js';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const generateRandomBarData = (label = 'Dataset') => {
    const data = Array.from({ length: 6 }, () => Math.floor(Math.random() * 100) + 1);
    return {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label,
                data,
                backgroundColor: `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`
            }
        ],
        rawData: data
    };
};

export default function DualBarChartsWithSidebar() {
    const [barData1, setBarData1] = useState(generateRandomBarData('Sales A'));
    const [barData2, setBarData2] = useState(generateRandomBarData('Sales B'));

    const [prevData1, setPrevData1] = useState(barData1.rawData);
    const [prevData2, setPrevData2] = useState(barData2.rawData);

    useEffect(() => {
        const interval = setInterval(() => {
            const newBar1 = generateRandomBarData('Sales A');
            const newBar2 = generateRandomBarData('Sales B');

            setPrevData1(barData1.rawData);
            setPrevData2(barData2.rawData);

            setBarData1(newBar1);
            setBarData2(newBar2);
        }, 4000);

        return () => clearInterval(interval);
    }, [barData1, barData2]);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'top' }
        },
        scales: { y: { beginAtZero: true } }
    };

    const getChange = (current, prev) => {
        const delta = current.reduce((sum, val, i) => sum + (val - prev[i]), 0);
        return {
            value: delta,
            isUp: delta >= 0,
            text: delta >= 0 ? `Рост на ${delta}` : `Падение на ${Math.abs(delta)}`
        };
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 4,
                padding: 4,
                backgroundColor: '#1e1e1e',
                flexWrap: 'wrap'
            }}
        >
            {[{ data: barData1, prev: prevData1, label: 'New Cars' }, { data: barData2, prev: prevData2, label: 'Used Cars' }].map(
                ({ data, prev, label }, idx) => {
                    const { value, isUp, text } = getChange(data.rawData, prev);

                    return (
                        <Box
                            key={idx}
                            sx={{
                                width: 700,
                                height: 900,
                                backgroundColor: '#222',
                                p: 2,
                                borderRadius: 2,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2
                            }}
                        >
                            {/* Левая панель */}
                            <Box
                                sx={{
                                    width: 60,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                {isUp ? (
                                    <ArrowUpwardIcon sx={{ color: 'lime' }} />
                                ) : (
                                    <ArrowDownwardIcon sx={{ color: 'tomato' }} />
                                )}
                                <Typography
                                    color="gray"
                                    fontSize={13}
                                    align="center"
                                    sx={{ mt: 1 }}
                                >
                                    {text}
                                </Typography>
                            </Box>

                            {/* Диаграмма */}
                            <Box
                                sx={{
                                    flexGrow: 1,
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <Typography
                                    color="white"
                                    align="center"
                                    fontWeight="bold"
                                    mb={1}
                                >
                                    Diagram {label}
                                </Typography>
                                <Box sx={{ flexGrow: 1 }}>
                                    <Bar data={data} options={options} />
                                </Box>
                            </Box>

                            {/* Правая панель (тот же текст дублируется для симметрии) */}
                            <Box
                                sx={{
                                    width: 60,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                {isUp ? (
                                    <ArrowUpwardIcon sx={{ color: 'lime' }} />
                                ) : (
                                    <ArrowDownwardIcon sx={{ color: 'tomato' }} />
                                )}
                                <Typography
                                    color="gray"
                                    fontSize={13}
                                    align="center"
                                    sx={{ mt: 1 }}
                                >
                                    {text}
                                </Typography>
                            </Box>
                        </Box>
                    );
                }
            )}
        </Box>
    );
}
