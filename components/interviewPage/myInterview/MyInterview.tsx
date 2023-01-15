import { SortList } from '../SortList';
import styles from './MyInterview.module.scss';
import { InterviewItem } from './InterviewItem';

export const MyInterview = () => {
	return (
		<>
			<SortList tabId={1} className='myInterview'/>
			<ul className={styles.list}>
				<li className={styles.item}>
					<InterviewItem
						date='11.01.2023 10:00 MSK'
						grade='Middle'
						name='Артем Кашаков'
						stack='Python'
						status='pending'
					/>
				</li>
				<li className={styles.item}>
					<InterviewItem
						date='11.01.2023 10:00 MSK'
						grade='Middle'
						name='Артем Кашаков'
						stack='Python'
						status='ready'
					/>
				</li>
				<li className={styles.item}>
					<InterviewItem
						date='11.01.2023 10:00 MSK'
						grade='Middle'
						name='Артем Кашаков'
						stack='Python'
						status='complete'
					/>
				</li>
				<li className={styles.item}>
					<InterviewItem
						date='11.01.2023 10:00 MSK'
						grade='Middle'
						name='Артем Кашаков'
						stack='Python'
						status='complete'
					/>
				</li>
				<li className={styles.item}>
					<InterviewItem
						date='11.01.2023 10:00 MSK'
						grade='Middle'
						name='Артем Кашаков'
						stack='Python'
						status='complete'
					/>
				</li>
				<li className={styles.item}>
					<InterviewItem
						date='11.01.2023 10:00 MSK'
						grade='Middle'
						name='Артем Кашаков'
						stack='Python'
						status='complete'
					/>
				</li>
				<li className={styles.item}>
					<InterviewItem
						date='11.01.2023 10:00 MSK'
						grade='Middle'
						name='Артем Кашаков'
						stack='Python'
						status='complete'
					/>
				</li>
				<li className={styles.item}>
					<InterviewItem
						date='11.01.2023 10:00 MSK'
						grade='Middle'
						name='Артем Кашаков'
						stack='Python'
						status='complete'
					/>
				</li>
				<li className={styles.item}>
					<InterviewItem
						date='11.01.2023 10:00 MSK'
						grade='Middle'
						name='Артем Кашаков'
						stack='Python'
						status='complete'
					/>
				</li>
			</ul>
		</>
	);
};
