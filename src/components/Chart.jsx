import { useEffect, useState } from 'react';
import {
    Box, Typography, Button, ButtonGroup, Stack, ToggleButton, ToggleButtonGroup, Paper
} from '@mui/material';
import { Bar, Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Tooltip,
    Legend,
} from 'chart.js';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import FavoriteIcon from '@mui/icons-material/Favorite';
import donationConfig from '../config/donationConfig';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Legend);


// 📅 Метки по периодам
const PERIODS = {
    day: { label: 'День', count: 6, labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'] },
    week: { label: 'Неделя', count: 7, labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'] },
    month: { label: 'Месяц', count: 12, labels: Array.from({ length: 12 }, (_, i) => `${i + 1} дн.`) },
};

// 🎨 Цвета
const getRandomColor = () => {
    const h = Math.floor(Math.random() * 360); // оттенок
    const s = 70 + Math.random() * 20; // насыщенность 70–90%
    const l = 45 + Math.random() * 10; // яркость 45–55%
    return `hsl(${h}, ${s}%, ${l}%)`;
};

const generateRandomData = (label, count, labels) => {
    const data = Array.from({ length: count }, () => Math.floor(Math.random() * 100));
    const color = getRandomColor();

    return {
        chartData: {
            labels,
            datasets: [
                {
                    label,
                    data,
                    backgroundColor: color,
                    borderColor: color,
                    borderWidth: 2,
                    tension: 0.4,
                },
            ],
        },
        rawData: data,
    };
};

export default function DashboardWithDonations() {
    const [period, setPeriod] = useState('day');
    const [chartType, setChartType] = useState('bar');

    const [data1, setData1] = useState(generateRandomData('Серия A', PERIODS.day.count, PERIODS.day.labels, 0));
    const [data2, setData2] = useState(generateRandomData('Серия B', PERIODS.day.count, PERIODS.day.labels, 1));

    const [prevData1, setPrevData1] = useState(data1.rawData);
    const [prevData2, setPrevData2] = useState(data2.rawData);

    const [donations, setDonations] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const { count, labels } = PERIODS[period];

            setPrevData1(data1.rawData);
            setPrevData2(data2.rawData);

            setData1(generateRandomData('Серия A', count, labels, 0));
            setData2(generateRandomData('Серия B', count, labels, 1));
        }, 2000);

        return () => clearInterval(interval);
    }, [period, data1, data2]);

    const handleDonate = () => setDonations((prev) => prev + 5);
    const ChartComponent = chartType === 'bar' ? Bar : Line;

    const getChangeInfo = (current, prev) => {
        const delta = current.reduce((sum, val, i) => sum + (val - (prev[i] || 0)), 0);
        return {
            isUp: delta >= 0,
            text: delta >= 0 ? `Рост на ${delta}` : `Падение на ${Math.abs(delta)}`,
        };
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'top' } },
        scales: { y: { beginAtZero: true } },
    };

    return (
        <Box sx={{ padding: 4, backgroundColor: '#1e1e1e', minHeight: '100vh' }}>
            {/* Панель управления */}
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={4} spacing={2} flexWrap="wrap">
                <Stack direction="row" spacing={2}>
                    <ButtonGroup variant="outlined">
                        {Object.entries(PERIODS).map(([key, { label }]) => (
                            <Button key={key} onClick={() => setPeriod(key)} variant={period === key ? 'contained' : 'outlined'}>
                                {label}
                            </Button>
                        ))}
                    </ButtonGroup>

                    <ToggleButtonGroup
                        value={chartType}
                        exclusive
                        onChange={(e, val) => val && setChartType(val)}
                        color="primary"
                    >
                        <ToggleButton value="bar">Bar</ToggleButton>
                        <ToggleButton value="line">Line</ToggleButton>
                    </ToggleButtonGroup>
                </Stack>

                {/* Донаты */}
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<FavoriteIcon />}
                    onClick={() => window.open(donationConfig.stripeUrl, '_blank')}
                >
                    Поддержать $5
                </Button>
            </Stack>

            {/* Графики */}
            <Stack direction="row" spacing={4} justifyContent="center" flexWrap="wrap">
                {[{ data: data1, prev: prevData1, label: 'A' }, { data: data2, prev: prevData2, label: 'B' }].map(
                    ({ data, prev, label }, idx) => {
                        const { isUp, text } = getChangeInfo(data.rawData, prev);

                        return (
                            <Box
                                key={idx}
                                sx={{
                                    width: 800,
                                    height: 750,
                                    backgroundColor: '#282828',
                                    borderRadius: 2,
                                    p: 2,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2,
                                }}
                            >
                                {/* Левая панель */}
                                <Box sx={{ width: 60, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    {isUp ? <ArrowUpwardIcon sx={{ color: 'lime' }} /> : <ArrowDownwardIcon sx={{ color: 'tomato' }} />}
                                    <Typography color="gray" fontSize={13} align="center" mt={1}>
                                        {text}
                                    </Typography>
                                </Box>

                                {/* Диаграмма */}
                                <Box sx={{ flexGrow: 1, height: '100%' }}>
                                    <Typography color="white" align="center" fontWeight="bold" mb={1}>
                                        Серия {label}
                                    </Typography>
                                    <ChartComponent data={data.chartData} options={chartOptions} />
                                </Box>

                                {/* Правая панель */}
                                <Box sx={{ width: 60, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    {isUp ? <ArrowUpwardIcon sx={{ color: 'lime' }} /> : <ArrowDownwardIcon sx={{ color: 'tomato' }} />}
                                    <Typography color="gray" fontSize={13} align="center" mt={1}>
                                        {text}
                                    </Typography>
                                </Box>
                            </Box>
                        );
                    }
                )}
            </Stack>
        </Box>
    );
}
