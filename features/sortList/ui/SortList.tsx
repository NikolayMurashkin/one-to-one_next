import classNames from 'classnames/bind';

import styles from '@features/sortList/model/SortList.module.scss';
import { SortItem } from '@entities/sortItem';
import { ISortListProps } from '@features/sortList/model/SortList.props';

export const SortList: React.FC<ISortListProps> = ({ tabId}) => {
	const cx = classNames.bind(styles);

	return (
		<>
			{tabId == 1 && (
				<ul className={cx('sortList', 'myInterview')}>
					<li className={cx('sortItem')}>
						<SortItem text='Дата, время' />
					</li>
					<li className={cx('sortItem')}>
						<SortItem text='Стек' />
					</li>
					<li className={cx('sortItem')}>
						<SortItem text='Создатель' />
					</li>
					<li className={cx('sortItem')}>
						<SortItem text='Уровень' />
					</li>
					<li className={cx('sortItem')}>
						<SortItem text='Фидбек' />
					</li>
					<li className={cx('sortItem')}>
						<SortItem text='Статус' />
					</li>
				</ul>
			)}
			{tabId == 2 && (
				<ul className={cx('sortList', 'myInterview')}>
					<li className={cx('sortItem')}>
						<SortItem text='Дата, время' />
					</li>
					<li className={cx('sortItem')}>
						<SortItem text='Стек' />
					</li>
					<li className={cx('sortItem')}>
						<SortItem text='Оппонент' />
					</li>
					<li className={cx('sortItem')}>
						<SortItem text='Уровень' />
					</li>
					<li className={cx('sortItem')}>
						<SortItem text='Фидбек' />
					</li>
					<li className={cx('sortItem')}>
						<SortItem text='Статус' />
					</li>
				</ul>
			)}
			{tabId == 3 && (
				<ul className={cx('sortList', 'searchInterview')}>
					<li className={cx('sortItem')}>
						<SortItem text='Дата, время' />
					</li>
					<li className={cx('sortItem')}>
						<SortItem text='Стек' />
					</li>
					<li className={cx('sortItem')}>
						<SortItem text='Создатель' />
					</li>
					<li className={cx('sortItem')}>
						<SortItem text='Уровень' />
					</li>
				</ul>
			)}
			{tabId == 4 && (
				<ul className={cx('sortList', 'myQuestions')}>
					<li className={cx('sortItem')}>
						<SortItem text='Список вопросов' />
					</li>
					<li className={cx('sortItem')}>
						<SortItem text='Технология' />
					</li>
				</ul>
			)}
			{tabId == 5 && (
				<ul className={cx('sortList', 'statistic')}>
					<li className={cx('sortItem')}>
						<SortItem text='Технология' />
					</li>
					<li className={cx('sortItem')}>
						<SortItem text='Средний балл' />
					</li>
					<li className={cx('sortItem')}>
						<SortItem text='Набрано баллов' />
					</li>
					<li className={cx('sortItem')}>
						<SortItem text='Пройдено вопросов' />
					</li>
				</ul>
			)}
		</>
	);
};
