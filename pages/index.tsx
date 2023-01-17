import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header/Header';
import { InterviewInfoList } from '../components/interviewPage/InterviewInfoList';
import { InterviewTabs } from '../components/interviewPage/InterviewTabs';

import styles from './index.module.scss';

const HomePage = () => {
	return (
		<>
			<Head>
				<title>One-To-One</title>
				<meta name='description' content='Interviewing Service' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
			</Head>
			<main className={styles.main}>
				<InterviewInfoList />
				<InterviewTabs />
			</main>
		</>
	);
};

export default HomePage;

// export function getStaticProps() {
// 	return
// }
