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
	const { data, error } = useSWR(
		'http://51.250.8.47:8080/one-to-one/api/v1/one-to-one?search=status:OPEN',
		fetcher
	);
	if (!data) {
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
					interviewsLength={interviews}
					questionsLength={questions}
				/>
			</main>
		</>
	);
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
	const getAllInterviews = await fetcher(
		'http://51.250.8.47:8080/one-to-one/api/v1/one-to-one'
	);
	const getAllQuestions = await fetcher(
		'http://51.250.8.47:8080/one-to-one/api/v1/user/1/question'
	);

	return {
		props: {
			interviews: getAllInterviews.totalItems,
			questions: getAllQuestions.totalItems,
		},
		revalidate: 60,
	};
};
