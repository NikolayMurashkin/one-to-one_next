import styles from './QuestionItem.module.scss';
import { TQuestionItemProps } from './QuestionItem.props';

export const QuestionItem: React.FC<TQuestionItemProps> = ({
	question,
	answer,
	technology,
}) => {
	return (
		<li className={styles.section}>
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
		</li>
	);
};
