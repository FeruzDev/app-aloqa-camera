import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

const data = [
    { value: 5, label: 'Отсутствие' },
    { value: 10, label: 'Опоздание' },
    { value: 15, label: 'Вовремя' },
];

const size = {
    width: 400,
    height: 200,
};

const StyledText = styled('text')(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 20,
}));

function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    return (
        <StyledText x={left + width / 2} y={top + height / 2}>
            {children}
        </StyledText>
    );
}

export default function MyChart() {
    return (
        <PieChart series={[{ data, innerRadius: 80 }]} {...size}>
            <PieCenterLabel></PieCenterLabel>
        </PieChart>
    );
}