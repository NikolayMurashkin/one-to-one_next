import classNames from 'classnames/bind';

import styles from '../model/InterviewInfoList.module.scss';
import { InterviewInfoItem } from '@entities/interviewInfoItem';
import { useEffect, useState } from 'react';
import { useGetUserStatisticsQuery } from '@features/interviewInfo/api/interviewInfoApiSlice';

export const InterviewInfoList = () => {
	const cx = classNames.bind(styles);
	const { data, error } = useGetUserStatisticsQuery(2);
	if (!data) {
		return <p>Загрузка...</p>;
	}
	if (error) {
		return <p>Загрузка...</p>;
	}
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

	const labels = [
		'Оценки пользователей',
		'Пройдено собесований',
		'Набрано баллов',
		'Задано вопросов',
	];

	return (
		<ul className={cx('list')}>
			{labels.map((item, i) => {
				switch (i) {
					case 0:
						return (
							<InterviewInfoItem
								key={i}
								text={item}
								count={+(
									data.totalPoint / data.totalQuestionCount
								).toFixed(1)}
							/>
						);
					case 1:
						return (
							<InterviewInfoItem
								key={i}
								text={item}
								count={data.totalOneToOneCount}
							/>
						);
					case 2:
						return (
							<InterviewInfoItem
								key={i}
								text={item}
								count={data.totalPoint}
							/>
						);
					case 3:
						return (
							<InterviewInfoItem
								key={i}
								text={item}
								count={data.totalQuestionCount}
							/>
						);
					default:
						return;
				}
			})}
		</ul>
	);
};