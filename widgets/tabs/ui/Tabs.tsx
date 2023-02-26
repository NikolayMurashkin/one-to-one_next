import { useEffect, useState } from 'react';

import { useAppSelector } from '@app/hooks';
import { RootState } from '@app/store';
import styles from '@widgets/tabs/model/Tabs.module.scss';
import { useGetTechnologyStatisticsQuery } from '@shared/api/getTechnologyStatisticApiSlice';
import { ITab } from '@widgets/tabs/model/Tabs.props';
import { MyInterview } from '@features/myInterviews';
import { MyQuestions } from '@features/myQuestions';
import { useGetMyQuestionsQuery } from '@features/myQuestions/api/getMyQustionsApiSlice';
import { useGetMyInterviewsQuery } from '@features/myInterviews/api/getMyInterviewsApiSlice';
import { SortList } from '@features/sortList/ui/SortList';
import { SearchInterview } from '@features/searchInterviews';
import { Statistic } from '@features/statistic/ui/Statistic';
import { TabsButtons } from '@features/tabs/ui/Tabs';

export const Tabs = () => {
	const [user, setUser] = useState<number>();
	useEffect(() => {
		const userIdJson = localStorage.getItem('id');
		if (userIdJson) {
			setUser(userIdJson !== null ? JSON.parse(userIdJson) : {});
		}
	}, []);

	const selectedTabId = useAppSelector(
		(state: RootState) => state.tabs.selectedTab
	);

	const { data: questions } = useGetMyQuestionsQuery(user ? user : 0);
	const { data: interviews } = useGetMyInterviewsQuery(user ? user : 0);
	const { data: statictics } = useGetTechnologyStatisticsQuery(
		user ? user : 0
	);
	const myInterviews = interviews?.items.filter(
		(item) => item.status !== 'OPEN'
	);

	const tabs: ITab[] = [
		{
			id: 1,
			label: `Мои собеседования (${myInterviews && myInterviews.length})`,
		},
		{ id: 2, label: 'Поиск собеседований' },
		{
			id: 3,
			label: `Мои вопросы (${questions && questions.totalItems})`,
		},
		{
			id: 4,
			label: `Мои статистика (${
				(statictics && statictics.totalItems) || 0
			})`,
		},
	];

	return (
		<section className={styles.interviewTabs}>
			<TabsButtons tabs={tabs} selectedId={selectedTabId} />
			<div className={styles.tab}>
				<SortList tabId={selectedTabId} />
				<div className={styles.content}>
					{selectedTabId === tabs[0].id && <MyInterview />}
					{selectedTabId === tabs[1].id && <SearchInterview />}
					{selectedTabId === tabs[2].id && <MyQuestions />}
					{selectedTabId === tabs[3].id && <Statistic />}
				</div>
			</div>
		</section>
	);
};
