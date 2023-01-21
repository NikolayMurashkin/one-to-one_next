import Head from 'next/head';

import { InterviewInfoList } from '../components/interviewPage/InterviewInfoList';
import { InterviewTabs } from '../components/interviewPage/InterviewTabs';
import styles from './index.module.scss';
import { TIndexProps } from '../types/index.props';
import { useGetAllOneToOneQuery } from '../redux';

const HomePage: React.FC<TIndexProps> = () => {
	const { data: interviews, error } = useGetAllOneToOneQuery();
	if (!interviews) {
		return <p>Загрузка...</p>;
	}

	if (error) {
		return <p>Что-то пошло не так! Мы скоро всё исправим!</p>;
	}

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
				<InterviewTabs/>
			</main>
		</>
	);
};

export default HomePage;