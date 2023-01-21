import { useState } from 'react';
import useSWR from 'swr';

import styles from './InterviewTabs.module.scss';
import { Tabs } from '../ui/tabs/Tabs';
import { TTab } from '../ui/tabs/Tabs.props';
import { SearchInterview } from './searchInterview/SearchInterview';
import { MyInterview } from './myInterview/MyInterview';
import { MyQuestions } from './myQuestions/MyQuestions';
import { Statistic } from './statistic/Statistic';
import { SortList } from './SortList';
import { TInterviewTabsProps } from './InterviewTabs.props';
import { fetcher } from '../../heplers/api-utils';
import { TOneToOne } from './searchInterview/SearchInterview.props';

export const InterviewTabs: React.FC<TInterviewTabsProps> = ({
	interviewsLength,
	questionsLength,
}) => {
	const [selectedTabId, setSelectedTabId] = useState<string | number>('1');
	const { data: interview } = useSWR(
		'http://51.250.8.47:8080/one-to-one/api/v1/one-to-one',
		fetcher
	);
	const { data: questions } = useSWR(
		'http://51.250.8.47:8080/one-to-one/api/v1/user/1/question',
		fetcher
	);

	const tabs: TTab[] = [
		{
			id: '1',
			label: `Мои собеседования (${
				interview.items.filter(
					(item: TOneToOne) => item.status !== 'OPEN'
				).length
			})`,
		},
		{ id: '2', label: 'Поиск собеседований' },
		{
			id: '3',
			label: `Мои вопросы (${questions && questions.totalItems})`,
		},
		{ id: '4', label: 'Моя статистика' },
	];

	

	const tabClickHandler = (id: string | number) => {
		setSelectedTabId(id);
	};

	return (
		<section className={styles.interviewTabs}>
			<Tabs
				onClick={tabClickHandler}
				selectedId={selectedTabId}
				tabs={tabs}
			/>
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
