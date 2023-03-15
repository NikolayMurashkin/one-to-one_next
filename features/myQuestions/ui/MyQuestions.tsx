import { useEffect, useState } from 'react';
import { skipToken } from '@reduxjs/toolkit/dist/query';

import styles from '../model/MyQuestions.module.scss';
import { QuestionItem } from '@entities/questionItem';
import { useGetMyQuestionsQuery } from '../api/getMyQustionsApiSlice';
import { IGetMyQuestionResponse } from '../model/myQuestionsSliceTypes';

export const MyQuestions = () => {
	const [userId, setUserId] = useState<number>();
	const [page, setPage] = useState<number>(2);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const userJson = localStorage.getItem('id');
			const user = userJson !== null ? JSON.parse(userJson) : {};
			setUserId(user);
		}
	}, []);

	//TODO: написать фетч для получения следующей страницы вопросов при скролле

	const { data, error } = useGetMyQuestionsQuery(
		{ userId, page },
		{ skip: !userId }
	);

	if (!data) {
		return <p>Загрузка...</p>;
	}
	if (data.totalItems == 0) {
		return <p>Вы пока не добавили ни одного вопроса</p>;
	}

	if (error) {
		return <p>Что-то пошло не так! Мы скоро всё исправим!</p>;
	}

	return (
		<ul className={styles.list}>
			{data &&
				data.items.map((item) => {
					return (
						<QuestionItem
							key={item.id}
							answer={item.answer}
							question={item.question}
							technology={item.technology?.name}
						/>
					);
				})}
		</ul>
	);
};
