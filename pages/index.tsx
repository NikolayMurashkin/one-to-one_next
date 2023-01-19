import Head from 'next/head';
import { GetStaticProps } from 'next/types';
import useSWR from 'swr';

import { InterviewInfoList } from '../components/interviewPage/InterviewInfoList';
import { InterviewTabs } from '../components/interviewPage/InterviewTabs';
import { fetcher } from '../heplers/api-utils';
import styles from './index.module.scss';
import { TIndexProps } from '../types/index.props';
import { Modal } from '../components/createInterview/modal/Modal';
import { useEffect, useState } from 'react';
import { Datepicker } from '../components/createInterview/datepicker/Datepicker';

const HomePage: React.FC<TIndexProps> = ({ interviews, questions }) => {
	const [interviewItems, setInterviewItems] = useState();
	const [questionItems, setQquestionItems] = useState();

	const { data, error } = useSWR(
		'http://51.250.8.47:8080/one-to-one/api/v1/one-to-one?search=status:OPEN',
		fetcher
	);

	useEffect(() => {
		fetch('http://51.250.8.47:8080/one-to-one/api/v1/one-to-one')
			.then((res) => res.json())
			.then((data) => setInterviewItems(data));
		fetch('http://51.250.8.47:8080/one-to-one/api/v1/user/1/question')
			.then((res) => res.json())
			.then((data) => setQquestionItems(data));
	}, []);

	if (!data || !interviewItems || !questionItems) {
		return <p>Загрузка дааных...</p>;
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
				<InterviewTabs
					interviewsLength={interviewItems}
					questionsLength={questionItems}
				/>
				<Datepicker />
			</main>
		</>
	);
};

export default HomePage;

// export const getStaticProps: GetStaticProps = async () => {
// 	const getAllInterviews = await fetch(
// 		'../../one-to-one/api/v1/one-to-one'
// 	).then((res) => res.json());
// 	const getAllQuestions = await fetch(
// 		'../../one-to-one/api/v1/user/1/question'
// 	).then((res) => res.json());

// 	return {
// 		props: {
// 			interviews: getAllInterviews.totalItems,
// 			questions: getAllQuestions.totalItems,
// 		},
// 	};
// };
