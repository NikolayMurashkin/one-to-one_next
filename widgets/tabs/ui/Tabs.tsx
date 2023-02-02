import styles from '@widgets/tabs/model/Tabs.module.scss';
import { MyInterview } from '@features/myInterviews';
import { MyQuestions } from '@features/myQuestions';
import { useAppSelector } from '@app/hooks';
import { RootState } from '@app/store';
import { useGetMyQuestionsQuery } from '@features/myQuestions/api/getMyQustionsApiSlice';
import { useGetMyInterviewsQuery } from '@features/myInterviews/api/getMyInterviewsApiSlice';
import { SortList } from '@features/sortList/ui/SortList';
import { ITab } from '@widgets/tabs/model/Tabs.props';

export const Tabs = () => {
	const selectedTabId = useAppSelector(
		(state: RootState) => state.tabs.selectedTab
	);

	const { data: questions } = useGetMyQuestionsQuery(1);
	const { data: interviews } = useGetMyInterviewsQuery();
	const { data: statictics } = useGetTechnologyStatisticsQuery(2);
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
			label: `Мои статистика (${statictics && statictics.totalItems})`,
		},
	];

	return (
		<section className={styles.interviewTabs}>
			<Tabs tabs={tabs} selectedId={selectedTabId} />
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
