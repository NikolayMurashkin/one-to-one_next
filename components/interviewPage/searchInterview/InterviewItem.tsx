import styles from './InterviewItem.module.scss';
import Button from '../../ui/button/Button';
import { TInteviewItemProps } from './InterviewItem.props';
import { useAcceptOneToOneMutation } from '../../../redux';

export const InterviewItem: React.FC<TInteviewItemProps> = ({
	buttonText,
	color,
	stack,
	name,
	date,
	grade,
}) => {
	const [acceptInterviewHanlder] = useAcceptOneToOneMutation();

	return (
		<li className={styles.InteviewItem}>
			<span className={styles.text}>{date}</span>
			<span className={styles.text}>{stack}</span>
			<span className={styles.text}>{name}</span>
			<span className={styles.text}>{grade}</span>
			<span>
				<Button
					color={color}
					text={buttonText}
					disabled={buttonText === 'Заявка отправлена!'}
				/>
				{/* <button onClick={}>Откликнуться</button> */}
			</span>
		</li>
	);
};
