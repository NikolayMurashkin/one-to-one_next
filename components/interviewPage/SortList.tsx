import classNames from 'classnames/bind';

import styles from './SortList.module.scss';
import { SortItem } from './SortItem';

type TSortListProps = {
	tabId: string | number;
	className: 'myInterview' | 'myQuestions' | 'searchInterview';
};

export const SortList: React.FC<TSortListProps> = ({ tabId, className }) => {
	const cx = classNames.bind(styles);
	return (
		<>
			{tabId == 1 && (
				<ul className={cx('sortList', 'myInterview')}>
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
				<ul className={cx('sortList', 'searchInterview')}>
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
				</ul>
			)}
			{tabId == 3 && (
				<ul className={cx('sortList', 'myQuestions')}>
					<li className={styles.sortItem}>
						<SortItem text='Список вопросов' />
					</li>
					<li className={styles.sortItem}>
						<SortItem text='Технология' />
					</li>
				</ul>
			)}
		</>
	);
};
