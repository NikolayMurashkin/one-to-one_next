import styles from './InterviewTabs.module.scss';
import { Tabs } from '../ui/tabs/Tabs';
import { Tab } from '../ui/tabs/Tabs.props';
import { SearchInterview } from './searchInterview/SearchInterview';
import { MyInterview } from './myInterview/MyInterview';
import { MyQuestions } from './myQuestions/MyQuestions';
import { Statistic } from './statistic/Statistic';
import { SortList } from './SortList';
import { useAppSelector } from '../../hooks/redux';
import {
	RootState,
	useGetAllQuestionsQuery,
	useGetTechnologyStatisticsQuery,
	useGetMyOneToOneQuery,
} from '../../redux';

export const InterviewTabs = () => {
	const selectedTabId = useAppSelector(
		(state: RootState) => state.tabs.selectedTab
	);

	const { data: questions } = useGetAllQuestionsQuery(1);
	const { data: interviews } = useGetMyOneToOneQuery();
	const { data: statictics } = useGetTechnologyStatisticsQuery(2);
	const myInterviews = interviews?.items.filter(
		(item) => item.status !== 'OPEN'
	);

	const tabs: Tab[] = [
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
