import Head from 'next/head';

// import { InterviewInfoList } from '../components/interviewPage/InterviewInfoList';
import { Tabs } from '@widgets/tabs/ui/Tabs';
import styles from './index.module.scss';
import { TIndexProps } from '../types/index.props';
import { useGetAllOneToOneQuery } from '../redux';
import { InterviewInfoList } from '@features/interviewInfo/ui/InterviewInfoList';

const HomePage: React.FC<TIndexProps> = () => {
	// const { data: interviews, error } = useGetAllOneToOneQuery();
	// if (!interviews) {
	// 	return <p>Загрузка...</p>;
	// }

	// if (error) {
	// 	return <p>Что-то пошло не так! Мы скоро всё исправим!</p>;
	// }

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