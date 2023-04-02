import Head from 'next/head';
import React from 'react';

import { RatingList } from '@features/ratingList/RatingList';
import styles from './index.module.scss';

const RatingPage = () => {
	return (
		<>
			<Head>
				<title>Check-Me</title>
				<meta name='description' content='Interviewing Service' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
			</Head>
			<main className={styles.main}>
				<RatingList />
			</main>
		</>
	);
};

export default RatingPage;
