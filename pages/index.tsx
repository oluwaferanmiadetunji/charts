import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
	labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
	datasets: [
		{
			label: 'Chart',
			fill: true,
			lineTension: 1,
			backgroundColor: 'pink',
			borderColor: 'red',
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			pointBorderColor: 'red',
			pointBackgroundColor: '#fff',
			pointBorderWidth: 1,
			pointHoverRadius: 1,
			pointHoverBackgroundColor: 'red',
			pointHoverBorderColor: 'rgba(220,220,220,1)',
			pointHoverBorderWidth: 2,
			pointRadius: 1,
			pointHitRadius: 10,
			data: [65, 59, 80, 81, 56, 55, 40],
		},
	],
};

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Chart</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Chart</h1>
				<Line data={data} width={400} height={400} />
			</main>

			<footer className={styles.footer}>
				<a
					href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'>
					Powered by <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
				</a>
			</footer>
		</div>
	);
}
