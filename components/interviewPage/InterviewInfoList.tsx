import styles from './InterviewInfoList.module.scss';
import { InterviewInfoItem } from './InterviewInfoItem';
import { useEffect, useState } from 'react';
import { IUser, useGetFullUserStatisticsQuery } from '../../redux';

export const InterviewInfoList = () => {
	// const [userId, setUserId] = useState<number>(1);

	// useEffect(() => {
	// 	if (typeof window !== 'undefined') {
	// 		const userJson = localStorage.getItem('userInfo');
	// 		const user = userJson !== null ? JSON.parse(userJson) : {};
	// 		setUserId(user.id);
	// 	}
	// }, []);
	// console.log(userId);
	// const { data: userStatistics, error } =
	// 	useGetFullUserStatisticsQuery(userId);

	// if (!userStatistics || userId === 0) {
	// 	return <p>Загрузка...</p>;
	// }
	// if (error) {
	// 	return <p>Ошибка!</p>;
	// }
	// console.log(userStatistics);

	return (
		<div className={styles.list}>
			<InterviewInfoItem text='Оценки пользователей' count={4.6} />
			<InterviewInfoItem text='Пройдено собесований' count={11} />
			<InterviewInfoItem text='Набрано баллов' count={35} />
			<InterviewInfoItem text='Задано вопросов' count={27} />
		</div>
	);
};
