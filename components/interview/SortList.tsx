import styles from './SortList.module.scss';
import { SortItem } from './SortItem';

type TSortListProps = {
	tabId: string | number;
};

export const SortList: React.FC<TSortListProps> = ({ tabId }) => {
	return (
		<div className={styles.wrapper}>
			{tabId == 1 && (
				<ul className={styles.sortList}>
					<li className={styles.sortItem}>
						<SortItem text='Дата, время' />
					</li>
					<li className={styles.sortItem}>
						<SortItem text='Стек' />
					</li>
					<li className={styles.sortItem}>
						<SortItem text='Оппонент' />
					</li>
					<li className={styles.sortItem}>
						<SortItem text='Уровень' />
					</li>
					<li className={styles.sortItem}>
						<SortItem text='Фидбек' />
					</li>
					<li className={styles.sortItem}>
						<SortItem text='Статус' />
					</li>
				</ul>
			)}
			{tabId == 2 && (
				<ul className={styles.sortList}>
					<li className={styles.sortItem}>
						<SortItem text='Дата, время' />
					</li>
					<li className={styles.sortItem}>
						<SortItem text='Стек' />
					</li>
					<li className={styles.sortItem}>
						<SortItem text='Создатель' />
					</li>
					<li className={styles.sortItem}>
						<SortItem text='Уровень' />
					</li>
					<li className={styles.sortItem}>
						<div></div>
					</li>
				</ul>
			)}
			{tabId == 3 && (
				<ul className={styles.sortList}>
					<li className={styles.sortItem}>
						<SortItem text='Список вопросов' />
					</li>
					<li className={styles.sortItem}>
						<SortItem text='Технология' />
					</li>
				</ul>
			)}
		</div>
	);
};
