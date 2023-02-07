import { useEffect, useState } from 'react';
import { useGetAllQuestionsQuery } from '../../../redux/';

import styles from '../model/MyQuestions.module.scss';
import { QuestionItem } from '@entities/questionItem';

export const MyQuestions = () => {
	const [userId, setUserId] = useState<number>(1);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const userJson = localStorage.getItem('userInfo');
			const user = userJson !== null ? JSON.parse(userJson) : {};
			setUserId(user.id);
		}
	}, []);

	const { data, error } = useGetAllQuestionsQuery(userId);

	if (!data) {
		return <p>Загрузка...</p>;
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
