import styles from '../model/MyInterview.module.scss';
import { InterviewItem } from '@entities/myInterviewItem';
import { getDate } from '@shared/api';
import { IGetMyInterviewsProps } from '../model/interviewItemSliceTypes';

export const MyInterview: React.FC<IGetMyInterviewsProps> = ({
	totalItems,
	items,
	opponent,
	initiator,
}) => {
	if (!items) {
		return <p>Загрузка...</p>;
	}

	if (items) {
		return (
			<ul className={styles.list}>
				{items &&
					items
						.filter((item) => item.status !== 'OPEN')
						.map((item) => {
							if (opponent) {
								return (
									<InterviewItem
										key={item.id}
										date={getDate(item, item.dateTime)}
										interviewDate={item.dateTime}
										level={item.level}
										initiatorId={item.initiatorId}
										stack={item.technology.name}
										status={item.status}
										initiatorFeedback={
											item.initiatorFeedback
										}
										opponentFeedback={item.opponentFeedback}
										interviewId={item.id}
										opponentId={item.opponentId}
									/>
								);
							} else if (initiator) {
								return (
									<InterviewItem
										key={item.id}
										date={getDate(item, item.dateTime)}
										interviewDate={item.dateTime}
										level={item.level}
										initiatorId={item.opponentId}
										stack={item.technology.name}
										status={item.status}
										interviewId={item.id}
										opponentId={item.opponentId}
										initiatorFeedback={
											item.opponentFeedback
										}
										opponentFeedback={
											item.initiatorFeedback
										}
									/>
								);
							}
						})}
			</ul>
		);
	} else return null;
};
