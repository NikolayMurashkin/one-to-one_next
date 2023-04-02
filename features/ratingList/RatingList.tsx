import styles from './RatingList.module.scss';

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

	const { data: allRatings, error, isLoading } = useGetRatingQuery();

	if (isLoading) {
		return <p>Загрузка данных...</p>;
	}

	if (error) {
		return <p>Что-то пошло не так! Мы скоро всё исправим!</p>;
	}

	const sortedRatings =
		allRatings &&
		allRatings.items.sort(
			(a: IRatingUser, b: IRatingUser) => a.totalPoint - b.totalPoint
		);
	// const allRatingsArr =
	// 	allRatings &&
	// 	allRatings.items
	// 		.sort(
	// 			(a: IRatingUser, b: IRatingUser) => a.totalPoint - b.totalPoint
	// 		)
	// 		.map((item, index) => {
	// 			return (
	// 				<RatingItem
	// 					key={item.id}
	// 					totalPoint={item.totalPoint}
	// 					name={item.user.name}
	// 					surName={item.user.surName}
	// 					id={item.user.id}
	// 					totalQuestionCount={item.totalQuestionCount}
	// 					position={index + 1}
	// 				/>
	// 			);
	// 		});

	return (
		<>
			<SortList tabId={'rating'} />
			<ul className={styles.list}>
				{allRatings &&
					sortedRatings?.map((item, index) => {
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
					})}
				{allRatings && allRatings.totalItems === 0 && (
					<p>Рейтинг пользователей отсутствует!</p>
				)}
			</ul>
		</>
	);
};
