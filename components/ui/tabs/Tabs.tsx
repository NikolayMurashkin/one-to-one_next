import classNames from 'classnames';

import styles from './Tabs.module.scss';
import { TTabsProps } from './Tabs.props';

export const Tabs: React.FC<TTabsProps> = ({ selectedId, tabs, onClick }) => {
	return (
		<div className={styles.tabs}>
			{tabs &&
				tabs.map((tab) => (
					<div
						className={classNames(styles.tab, {
							[styles.tab__selected]: tab.id === selectedId,
						})}
						key={tab.id}
						onClick={() => onClick(tab.id)}
					>
						<span
							className={classNames(styles.tabLabel, {
								tabLabel__selected: tab.id === selectedId,
							})}
						>
							{tab.label}
						</span>
					</div>
				))}
		</div>
	);
};
