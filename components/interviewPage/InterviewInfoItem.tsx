import styles from './InterviewInfoItem.module.scss';
import { TInterviewInfoItemProps } from './InterviewInfoItem.props';
import { StarIcon } from './../../public/icons/StarIcon';

export const InterviewInfoItem: React.FC<TInterviewInfoItemProps> = ({
	text,
	count,
}) => {
	return (
		<div className={styles.item}>
			<div className={styles.info}>
				<p className={styles.text}>{text}</p>
				<p className={styles.count}>{count}</p>
			</div>
			{text === 'Оценки пользователей' && <StarIcon className={styles.icon}/>}
		</div>
	);
};
