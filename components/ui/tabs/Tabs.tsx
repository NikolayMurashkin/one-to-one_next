import classNames from 'classnames/bind';

import styles from './Tabs.module.scss';
import { TabsProps } from './Tabs.props';
import { Modal } from '../../modal/Modal';
import { useAppDispatch } from '../../../hooks/redux';
import { setSelectedTab } from '../../../slices/tabSlice';

export const Tabs: React.FC<TabsProps> = ({ selectedId, tabs }) => {
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
