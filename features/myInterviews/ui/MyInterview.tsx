import styles from '../model/MyInterview.module.scss';
import { InterviewItem } from '@entities/myInterviewItem';
import { getDate } from '@shared/api';
import { IGetMyInterviewsResponse } from '../model/interviewItemSliceTypes';

export const MyInterview: React.FC<IGetMyInterviewsResponse> = ({ totalItems, items }) => {
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
							return (
								<InterviewItem
									key={item.id}
									date={getDate(item, item.dateTime)}
									level={item.level}
									initiatorId={item.initiatorId}
									stack={item.technology.name}
									status={item.status}
									interviewId={item.id}
									opponentId={item.opponentId}
								/>
							);
						})}
			</ul>
		);
	} else return null;
};
