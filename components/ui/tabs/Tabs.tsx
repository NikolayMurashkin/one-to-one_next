import classNames from 'classnames/bind';

import styles from './Tabs.module.scss';
import { TTabsProps } from './Tabs.props';
import { Modal } from '../../createInterview/modal/Modal';

export const Tabs: React.FC<TTabsProps> = ({ selectedId, tabs, onClick }) => {
	const cx = classNames.bind(styles);

	return (
		<div className={styles.tabs}>
			{tabs &&
				tabs.map((tab) => (
					<div
						className={cx('tab', {
							tab__selected: tab.id === selectedId,
						})}
						key={tab.id}
					>
						<div
							className={cx('tabLabel', {
								tabLabel__selected: tab.id === selectedId,
							})}
						>
							<span onClick={() => onClick(tab.id)}>
								{tab.label}
							</span>
						</div>
						{tab.id === '1' || tab.id === '3' ? (
							<Modal tab={tab.id} selectedTab={selectedId} />
						) : null}
					</div>
				))}
		</div>
	);
};
