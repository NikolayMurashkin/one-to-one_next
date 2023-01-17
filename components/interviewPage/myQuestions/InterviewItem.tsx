import styles from './InterviewItem.module.scss';
import { TInterviewItemProps } from './InterviewItem.props';

export const InterviewItem: React.FC<TInterviewItemProps> = ({
	question,
	answer,
	technology,
}) => {
	return (
		<section className={styles.section}>
			<details className={styles.interviewItem}>
				<summary className={styles.question}>
					<div className={styles.title}>
						<span>{question}</span>
						<span>{technology}</span>
					</div>
				</summary>
				<div className={styles.details}>
					<span className={styles.answer}>Ответ</span>
					<p className={styles.text}>{answer}</p>
				</div>
			</details>
		</section>
	);
};
