import classNames from 'classnames/bind';

import styles from '../model/Tabs.module.scss';
import { TabsProps } from '@features/tabs/model/Tabs.props';
import { Modal } from '@widgets/modal/ui/Modal';
import { useAppDispatch } from '@app/hooks';
import { setSelectedTab } from '@features/tabs/api/tabsSlice';

export const TabsButtons: React.FC<TabsProps> = ({ selectedId, tabs }) => {
	const dispatch = useAppDispatch();

	const cx = classNames.bind(styles);

	const setTabHanlder = (tab: number) => {
		dispatch(setSelectedTab(tab));
	};

	return (
		<div className={styles.tabs}>
			{tabs &&
				tabs.map((tab) => (
					<div
						className={cx('tab', {
							tab__selected: tab.id === selectedId,
						})}
						key={tab.id}
						onClick={() => setTabHanlder(tab.id)}
					>
						<div
							className={cx('tabLabel', {
								tabLabel__selected: tab.id === selectedId,
							})}
						>
							<span>{tab.label}</span>
						</div>
						{tab.id === 1 || tab.id === 3 ? (
							<Modal tab={tab.id} selectedTab={selectedId} />
						) : null}
					</div>
				))}
		</div>
	);
};
