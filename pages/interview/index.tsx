import Head from 'next/head';

import styles from './index.module.scss';
import Header from './../../components/header/Header';
import { InterviewInfoList } from '../../components/interviewPage/InterviewInfoList';
import { InterviewTabs } from '../../components/interviewPage/InterviewTabs';

const InterviewPage = () => {
	return (
		<>
			<Head>
				<title>Find Interview</title>
				<meta name='description' content='Find Interview' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
			</Head>
			<main className={styles.main}>
				<Header />
				<InterviewInfoList />
				<InterviewTabs />
			</main>
		</>
	);
};

export default InterviewPage;

// export function getStaticProps() {
// 	return;
// }
