import styles from '../model/SearchInterview.module.scss';

import { useEffect, useState } from 'react';
import { IRatingUser, useGetRatingQuery } from './getRatingAppiSlice';
import { RatingItem } from '@entities/ratingItem/RatingItem';
import { SortList } from '@features/sortList/ui/SortList';

export const RatingList = () => {
	const [user, setUser] = useState<number>();

	useEffect(() => {
		const userIdJson = localStorage.getItem('id');
		if (userIdJson) {
			setUser(userIdJson !== null ? JSON.parse(userIdJson) : {});
		}
	}, []);

	const { data: allRatings, error } = useGetRatingQuery();

	if (!allRatings) {
		return <p>Загрузка данных...</p>;
	}

	if (error) {
		return <p>Что-то пошло не так! Мы скоро всё исправим!</p>;
	}

	function comparePoints(a: IRatingUser, b: IRatingUser) {
		if (a.totalPoint > b.totalPoint) 1;
		if (a.totalPoint < b.totalPoint) -1;
		return 0;
	}

	const allRatingsArr =
		allRatings &&
		allRatings.items.sort(comparePoints).map((item, index) => {
			return (
				<RatingItem
					key={item.id}
					totalPoint={item.totalPoint}
					name={item.user.name}
					surName={item.user.surName}
					id={item.user.id}
					totalQuestionCount={item.totalQuestionCount}
					position={index + 1}
				/>
			);
		});

	return (
		<>
			<SortList tabId={'rating'} />
			<ul className={styles.list}>
				{/* {allRatingsArr && allRatingsArr.sort(comparePoints())}} */}
				{allRatings && allRatings.totalItems === 0 && (
					<p>Рейтинг пользователей отсутствует!</p>
				)}
			</ul>
		</>
	);
};
