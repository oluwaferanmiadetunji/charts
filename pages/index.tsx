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
      backgroundColor: 'pink',
      borderColor: 'red',
      borderDashOffset: 0.0,
      pointBorderColor: 'red',
      pointHoverBackgroundColor: 'red',
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
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Liquidity</h1>
        <h1 className={styles.caption}>$3.46B <span className={styles.text}>+3.64%</span></h1>
        <Line
          data={data}
          width={500}
          height={300}
          options={{
            legend: {
              display: false
          },
            scales: {
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
                    callback: function(label, index, labels) {
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
