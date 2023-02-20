import Head from 'next/head';

import { Tabs } from '@widgets/tabs/ui/Tabs';
import styles from './index.module.scss';
import { InterviewInfoList } from '@features/interviewInfo/ui/InterviewInfoList';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const HomePage = () => {
	const router = useRouter();
	
	useEffect(() => {
		if (
			typeof window !== 'undefined' &&
			localStorage.getItem('id') === null
		) {
			router.push('/login');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
				<InterviewInfoList />
				<Tabs />
			</main>
		</>
	);
};

export default HomePage;
