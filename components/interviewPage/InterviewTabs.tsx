import { useState } from 'react';

import styles from './InterviewTabs.module.scss';
import { Tabs } from '../ui/tabs/Tabs';
import { TTab } from '../ui/tabs/Tabs.props';
import { SearchInterview } from './searchInterview/SearchInterview';
import { MyInterview } from './myInterview/MyInterview';
import { MyQuestions } from './myQuestions/MyQuestions';
import { Statistic } from './statistic/Statistic';
import { SortList } from './SortList';
import { TInterviewTabsProps } from './InterviewTabs.props';

export const InterviewTabs: React.FC<TInterviewTabsProps> = ({
	interviewsLength,
	questionsLength,
}) => {
	const tabs: TTab[] = [
		{ id: '1', label: `Мои собеседования (${interviewsLength})` },
		{ id: '2', label: 'Поиск собеседований' },
		{ id: '3', label: `Мои вопросы (${questionsLength})` },
		{ id: '4', label: 'Моя статистика' },
	];

	const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

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
