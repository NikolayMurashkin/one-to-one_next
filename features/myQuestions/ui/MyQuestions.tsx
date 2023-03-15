import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import styles from '../model/MyQuestions.module.scss';
import { QuestionItem } from '@entities/questionItem';
import { useGetMyQuestionsQuery } from '../api/getMyQustionsApiSlice';
import { skipToken } from '@reduxjs/toolkit/dist/query';

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

	//TODO: написать фетч для получения следующей страницы вопросов при скролле

	const { data, error } = useGetMyQuestionsQuery( {userId, page} ?? skipToken);

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
			<InfiniteScroll
				dataLength={items.length} //This is important field to render the next data
				next={fetchData}
				hasMore={true}
				loader={<h4>Loading...</h4>}
				endMessage={
					<p style={{ textAlign: 'center' }}>
						<b>Yay! You have seen it all</b>
					</p>
				}
				// below props only if you need pull down functionality
				refreshFunction={this.refresh}
				pullDownToRefresh
				pullDownToRefreshThreshold={50}
				pullDownToRefreshContent={
					<h3 style={{ textAlign: 'center' }}>
						&#8595; Pull down to refresh
					</h3>
				}
				releaseToRefreshContent={
					<h3 style={{ textAlign: 'center' }}>
						&#8593; Release to refresh
					</h3>
				}
			>
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
			</InfiniteScroll>
		</ul>
	);
};
