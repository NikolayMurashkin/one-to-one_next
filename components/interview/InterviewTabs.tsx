import { useState } from 'react';

import styles from './InterviewTabs.module.scss';
import { Tabs } from './../ui/tabs/Tabs';
import { TTab } from '../ui/tabs/Tabs.props';
import { TabContent } from './TabContent';

export const InterviewTabs = () => {
	const tabs: TTab[] = [
		{ id: '1', label: 'Мои собеседования (11)' },
		{ id: '2', label: 'Поиск собеседований' },
		{ id: '3', label: 'Мои вопросы (50)' },
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
				<div>filters</div>
				<div className={styles.content}>
					{selectedTabId === tabs[0].id && <div>TAB CONTENT 1</div>}
					{selectedTabId === tabs[1].id && <TabContent />}
					{selectedTabId === tabs[2].id && <div>TAB CONTENT 3</div>}
				</div>
			</div>
		</section>
	);
};
