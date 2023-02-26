import Image from 'next/image';
import classNames from 'classnames/bind';

import styles from '@entities/sortItem/model/SortItem.module.scss';
import { ISortItemProps } from '@entities/sortItem/model/SortItem.props';
import { SortIcon } from '@entities/sortItem/icons/SortIcon';

export const SortItem: React.FC<ISortItemProps> = ({ text }) => {
	const cx = classNames.bind(styles);

	return (
		<div className={cx('item')}>
			<span className={cx('text')}>{text}</span>
			<SortIcon />
		</div>
	);
};
