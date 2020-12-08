import React, { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Chart from 'chart.js'

export default function Home(): JSX.Element {
    const ref = React.createRef<HTMLCanvasElement>();

    useEffect(() => {
        const chartRef = ref.current.getContext('2d');

        const { height } = chartRef.canvas;
        let gradient = chartRef.createLinearGradient(0, 0, 0, height)
        gradient.addColorStop(0, 'pink')
        gradient.addColorStop(0.5, 'pink')
        gradient.addColorStop(1, 'white')

        new Chart(chartRef, {
            type: 'line',
            data: {
                labels: [
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                ],
                datasets: [
                    {
                        fill: true,
                        lineTension: 0.5,
                        backgroundColor: gradient,
                        borderColor: 'red',
                        borderDashOffset: 0.0,
                        pointBorderColor: 'red',
                        pointHoverBackgroundColor: 'red',
                        pointRadius: 0,
                        data: [
                            3.0,
                            3.02,
                            3.03,
                            3.04,
                            3.05,
                            3.04,
                            3.05,
                            3.06,
                            3.07,
                            3.08,
                            3.09,
                            3.1,
                            3.09,
                            3.08,
                            3.07,
                            3.06,
                            3.07,
                            3.08,
                            3.09,
                            3.1,
                            3.12,
                            3.14,
                            3.16,
                            3.18,
                            3.2,
                            3.19,
                            3.21,
                            3.23,
                            3.24,
                            3.25,
                            3.26,
                            3.25,
                            3.24,
                            3.23,
                            3.25,
                            3.27,
                            3.29,
                            3.31,
                            3.33,
                            3.35,
                            3.34,
                            3.33,
                            3.32,
                            3.33,
                            3.34,
                            3.35,
                            3.4,
                        ],
                    },
                ],
            },
            options: {
                legend: {
                    display: false
                },
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        ticks: { display: false },
                        gridLines: { display: false }
                    }],
                    yAxes: [
                        {
                            display: true,
                            position: 'right',
                            ticks: {
                                min: 3.0,
                                max: 3.4,
                                stepSize: 0.1,
                                suggestedMin: 3.0,
                                suggestedMax: 3.4,
                                callback: (label) => {
                                    switch (label) {
                                        case 3.0:
                                            return '$3.0B';
                                        case 3.1:
                                            return '$3.1B';
                                        case 3.2:
                                            return '$3.2B';
                                        case 3.3:
                                            return '$3.3B';
                                        case 3.4:
                                            return '$3.4B';
                                    }
                                }
                            },
                            gridLines: {
                                display: false
                            },
                        },
                        {
                            display: false,
                            position: 'left',
                        },
                    ],
                }
            }
        })
    }, [])
    return (
        <div className={styles.graphContainer}>
            <canvas id='chart' width='600px' height='200px' ref={ref} />
        </div>
    )
}
