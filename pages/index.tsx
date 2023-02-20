import Head from 'next/head';

import { Tabs } from '@widgets/tabs/ui/Tabs';
import styles from './index.module.scss';
import { InterviewInfoList } from '@features/interviewInfo/ui/InterviewInfoList';
import { useRouter } from 'next/router';

const HomePage = () => {
	const router = useRouter();

	if (localStorage.getItem('id') === null) {
		router.push('/login');
	}

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
