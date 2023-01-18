import classNames from 'classnames/bind';

import styles from './SortList.module.scss';
import { SortItem } from './SortItem';

type TSortListProps = {
	tabId: string | number;
};

export const SortList: React.FC<TSortListProps> = ({ tabId}) => {
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
			{tabId == 4 && (
				<ul className={cx('sortList', 'statistic')}>
					<li className={styles.sortItem}>
						<SortItem text='Технология' />
					</li>
					<li className={styles.sortItem}>
						<SortItem text='Средний балл' />
					</li>
					<li className={styles.sortItem}>
						<SortItem text='Набрано баллов' />
					</li>
					<li className={styles.sortItem}>
						<SortItem text='Пройдено вопросов' />
					</li>
				</ul>
			)}
		</>
	);
};
