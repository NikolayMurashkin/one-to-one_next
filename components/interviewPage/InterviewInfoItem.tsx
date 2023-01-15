import styles from './InterviewInfoItem.module.scss';
import { TInterviewInfoItemProps } from './InterviewInfoItem.props';

export const InterviewInfoItem: React.FC<TInterviewInfoItemProps> = ({
	text,
	count,
}) => {
	return (
		<div className={styles.item}>
			<p className={styles.text}>{text}</p>
			<p className={styles.count}>{count}</p>
		</div>
	);
};
