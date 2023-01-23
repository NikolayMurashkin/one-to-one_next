import Image from 'next/image';
import classNames from 'classnames/bind';
import Link from 'next/link';

import Button from '../../ui/button/Button';
import styles from './InterviewItem.module.scss';
import { TInterviewItemProps } from './InterviewItem.props';
import { ChatIcon } from './../../../public/icons/ChatIcon';

export const InterviewItem: React.FC<TInterviewItemProps> = ({
	status,
	stack,
	name,
	date,
	grade,
}) => {
	const cx = classNames.bind(styles);
	return (
		<li
			className={cx('interviewItem', {
				ready: status === 'ACCEPT',
				pending: +date == new Date().getDate(),
				complete: status === 'CLOSED',
			})}
		>
			<span className={styles.text}>{date}</span>
			<span className={styles.text}>{stack}</span>
			<span className={styles.text}>{name}</span>
			<span className={styles.text}>{grade}</span>
			<span>
				<Button
					color={'ghost'}
					text={'Подробнее'}
					disabled={
						status === 'ACCEPT' || +date == new Date().getDate()
					}
				/>
			</span>
			{status === 'ACCEPT' && (
				<Link href={'/session'} className={styles.button}>
					<ChatIcon />
					<span>Подключить</span>
				</Link>
			)}
			{status === 'CLOSED' && (
				<span className={styles.status}>
					<Image
						src='/icons/complete.svg'
						width={11}
						height={11}
						alt='pending icon'
					/>{' '}
					Завершено
				</span>
			)}
			{status === 'pending' && (
				<span className={styles.status}>
					<Image
						src='/icons/pending.svg'
						width={11}
						height={11}
						alt='pending icon'
					/>{' '}
					Ожидание
				</span>
			)}
		</li>
	);
};
