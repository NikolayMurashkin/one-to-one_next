import styles from './InterviewInfoList.module.scss';
import { InterviewInfoItem } from './InterviewInfoItem';

export const InterviewInfoList = () => {
	return (
		<div className={styles.list}>
			<InterviewInfoItem text='Оценки пользователей' count={4.6} />
			<InterviewInfoItem text='Пройдено собесований' count={11} />
			<InterviewInfoItem text='Набрано баллов' count={35} />
			<InterviewInfoItem text='Задано вопросов' count={27} />
		</div>
	);
};
