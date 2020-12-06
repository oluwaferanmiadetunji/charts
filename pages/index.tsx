import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'
import { Line } from 'react-chartjs-2'

const data = {
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
  ],
  datasets: [
    {
      label: '',
      fill: true,
      lineTension: 0.5,
      backgroundColor: 'pink',
      borderColor: 'red',
      borderDash: [],
      borderDashOffset: 0.0,
      pointBorderColor: 'red',
      pointBorderWidth: 0,
      pointHoverBackgroundColor: 'red',
      pointHoverBorderWidth: 2,
      pointRadius: 0,
      spanGaps: false,
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
        3.33,
        3.35,
        3.37,
        3.39,
        3.4,
      ],
    },
  ],
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Chart</h1>
        <Line
          data={data}
          width={500}
          height={300}
          options={{
            scales: {
              yAxes: [
                {
                  display: true,
                  position: 'right',
                  ticks: {
                    beginAtZero: false,
                  },
                  stepSize: 0.2,
                  suggestedMax: 3.5,
                },
                {
                  display: false,
                  position: 'left',
                },
              ],
            },
          }}
        />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
