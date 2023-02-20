import { useEffect, useState } from 'react';

import styles from '../model/MyInterview.module.scss';
import { InterviewItem } from '@entities/myInterviewItem';
import { getDate } from '@shared/api';
import { useGetMyInterviewsQuery } from '@features/myInterviews/api/getMyInterviewsApiSlice';

export const MyInterview = () => {
	const [user, setUser] = useState<number>();

	useEffect(() => {
		const userIdJson = localStorage.getItem('id');
		if (userIdJson) {
			setUser(userIdJson !== null ? JSON.parse(userIdJson) : {});
		}
	}, []);

	const {
		data: interviews,
		isLoading,
		error,
	} = useGetMyInterviewsQuery(user ? user : 0);

	if (isLoading) {
		return <p>Загрузка...</p>;
	}

	if (error) {
		return <p>Что-то пошло не так! Мы скоро всё исправим!</p>;
	}
	if (interviews) {
		return (
			<ul className={styles.list}>
				{interviews.items &&
					interviews.items
						.filter((item) => item.status !== 'OPEN')
						.map((item) => {
							return (
								<InterviewItem
									key={item.id}
									date={getDate(item, item.dateTime)}
									level={item.level}
									initiatorId={item.initiatorId}
									stack={item.technology.name}
									status={item.status}
									interviewId={item.id}
								/>
							);
						})}
			</ul>
		);
	} else {
		return null;
	}
};
