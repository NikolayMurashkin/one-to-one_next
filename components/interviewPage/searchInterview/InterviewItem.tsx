import styles from './InterviewItem.module.scss';
import Button from '../../ui/button/Button';
import { TInteviewItemProps } from './InterviewItem.props';
import { AcceptOneToOne, useAcceptOneToOneMutation } from '../../../redux';
import { useRef } from 'react';

export const InterviewItem: React.FC<TInteviewItemProps> = ({
	buttonText,
	color,
	stack,
	name,
	date,
	grade,
	id,
}) => {
	const interviewRef = useRef(null);
	const [acceptInterview] = useAcceptOneToOneMutation();

	const acceptInterviewHanlder = (body: AcceptOneToOne) => {
		acceptInterview(body);

		const refStyle = interviewRef.current.style;

		refStyle.opacity = 0;
		refStyle.transition = 'all .5s ease';
		refStyle.transform = 'translateY(-30px)';
		setTimeout(() => {
			refStyle.display = 'none';
		}, 310);
	};

	return (
		<li className={styles.inteviewItem} ref={interviewRef}>
			<span className={styles.text}>{date}</span>
			<span className={styles.text}>{stack}</span>
			<span className={styles.text}>{name}</span>
			<span className={styles.text}>{grade}</span>
			<span
				onClick={() =>
					acceptInterviewHanlder({
						opponentId: 2,
						oneToOneId: id,
					})
				}
			>
				<Button
					color={color}
					text={buttonText}
					disabled={buttonText === 'Заявка отправлена!'}
				/>
			</span>
		</li>
	);
};
