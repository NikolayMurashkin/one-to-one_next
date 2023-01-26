import styles from './InterviewItem.module.scss';
import Button from '../../ui/button/Button';
import { TInteviewItemProps } from './InterviewItem.props';
import {
	AcceptOneToOne,
	useAcceptOneToOneMutation,
	useGetUserByIdQuery,
} from '../../../redux';
import { useRef } from 'react';

export const InterviewItem: React.FC<TInteviewItemProps> = ({
	buttonText,
	color,
	stack,
	initiatorId,
	date,
	grade,
	id,
}) => {
	const interviewRef = useRef<HTMLLIElement>(null);
	const [acceptInterview] = useAcceptOneToOneMutation();
	const { data: user, error } = useGetUserByIdQuery(initiatorId);

	const acceptInterviewHanlder = (body: AcceptOneToOne) => {
		acceptInterview(body);

		const refStyle = interviewRef.current?.style;
		if (refStyle) {
			refStyle.opacity = '0';
			refStyle.transition = 'all .5s ease';
			refStyle.transform = 'translateY(-30px)';
			setTimeout(() => {
				refStyle.display = 'none';
			}, 310);
		}
	};
	if (!user) {
		return <p>Загразка...</p>;
	}
	if (error) {
		return <p>Произошла ошибка</p>;
	}

	return (
		<li className={styles.inteviewItem} ref={interviewRef}>
			<span className={styles.text}>{date}</span>
			<span className={styles.text}>{stack}</span>
			<span
				className={styles.text}
			>{`${user.name} ${user.surName}`}</span>
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
