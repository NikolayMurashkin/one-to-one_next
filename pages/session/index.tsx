import Head from 'next/head';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './index.module.css';
import { FilterIcon } from './../../public/icons/FilterIcon';
import { QuestionItem } from '../../components/session/questionItem/QuestionItem';
import { useGetAllQuestionsQuery } from '../../redux';
import { QuestionWindow } from './../../components/session/questionWindow/QuestionWindow';

const Session = () => {
	const cx = classNames.bind(styles);

	const [userId, setUserId] = useState<number>(1);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const userJson = localStorage.getItem('userInfo');
			const user = userJson !== null ? JSON.parse(userJson) : {};
			setUserId(user.id);
		}
	}, []);
	console.log(userId);

	const { data, error } = useGetAllQuestionsQuery(userId);

	if (!data) {
		return <p>Загрузка...</p>;
	}

	if (error) {
		return <p>Что-то пошло не так! Мы скоро всё исправим!</p>;
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
			<section className={cx('wrapper')}>
				<div className={cx('questions')}>
					<div className={cx('searchBar')}>
						<input type='search' placeholder='Поиск вопроса' className={cx('input')}/>
						<FilterIcon />
					</div>
					<hr />
					<ul className={cx('questionsList')}>
						{data.items.map((question) => {
							return (
								<QuestionItem
									question={question.question}
									key={question.id}
									stack={question.technology.name}
								/>
							);
						})}
					</ul>
				</div>
				<div className={cx('mainWindow')}>
					<QuestionWindow items={data.items} />
				</div>
			</section>
		</>
	);
};

export default Session;
