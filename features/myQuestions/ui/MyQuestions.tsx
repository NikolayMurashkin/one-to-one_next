import { useEffect, useState } from 'react';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import useSWRInfinite from 'swr/infinite';
import { Fetcher } from 'swr';

import styles from '../model/MyQuestions.module.scss';
import { QuestionItem } from '@entities/questionItem';
import { useGetMyQuestionsQuery } from '../api/getMyQustionsApiSlice';
import { IGetMyQuestionResponse } from '../model/myQuestionsSliceTypes';

export const MyQuestions = () => {
	const [userId, setUserId] = useState<number>();
	const [page, setPage] = useState<number>(0);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const userJson = localStorage.getItem('id');
			const user = userJson !== null ? JSON.parse(userJson) : {};
			setUserId(user);
		}
	}, []);

	const getKey = (
		pageIndex: number,
		previousPageData: IGetMyQuestionResponse
	) => {
		if (previousPageData && !previousPageData.totalItems) return null; // reached the end
		return `/user/${userId}/question?search=userId:${userId}&page=${pageIndex}&size=30`; // SWR key
	};

	const fetcher: Fetcher<IGetMyQuestionResponse, string> = async () => {
		const res = await fetch(
			`http://51.250.55.231:8080/one-to-one/api/v1`
		).then((res) => res.json());
		const data = await res.items;
		return data;
	};

	const { data, error, isLoading, isValidating, mutate, size, setSize } =
		useSWRInfinite(getKey, fetcher, { initialSize: 1 });

	console.log(data);

	//TODO: написать фетч для получения следующей страницы вопросов при скролле

	// const { data, error } = useGetMyQuestionsQuery(
	// 	{ userId, page } ?? skipToken
	// );

	// if (!data) {
	// 	return <p>Загрузка...</p>;
	// }
	// if (data.totalItems == 0) {
	// 	return <p>Вы пока не добавили ни одного вопроса</p>;
	// }

	// if (error) {
	// 	return <p>Что-то пошло не так! Мы скоро всё исправим!</p>;
	// }

	return (
		<ul className={styles.list}>
			{/* {data &&
				data.items.map((item) => {
					return (
						<QuestionItem
							key={item.id}
							answer={item.answer}
							question={item.question}
							technology={item.technology?.name}
						/>
					);
				})} */}
		</ul>
	);
};
