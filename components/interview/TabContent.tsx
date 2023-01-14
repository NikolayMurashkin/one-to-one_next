import styles from './TabContent.module.scss';
import { TabItem } from './TabItem';

export const TabContent = () => {
	return<section>
		<div>filters</div>
		<ul className={styles.list}>
			<li className={styles.item}>
				<TabItem  />
			</li>
		</ul>
	</section>
}