import Button from '../../ui/button/Button';
import styles from './InterviewItem.module.scss';
import { TInterviewItemProps } from './InterviewItem.props';
import Image from 'next/image';

export const InterviewItem: React.FC<TInterviewItemProps> = ({
	status,
	stack,
	name,
	date,
	grade,
}) => {
	return (
		<section className={styles.interviewItem}>
			<span className={styles.text}>{date}</span>
			<span className={styles.text}>{stack}</span>
			<span className={styles.text}>{name}</span>
			<span className={styles.text}>{grade}</span>
			<Button color={'ghost'} text={'Подробнее'} />
			{status === 'ready' && (
				<Button color={'ghost-red'} text={'Начать >'} />
			)}
			{status === 'complete' && (
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
		</section>
	);
};
