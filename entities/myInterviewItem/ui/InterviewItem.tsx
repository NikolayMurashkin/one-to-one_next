import classNames from 'classnames/bind';
import Link from 'next/link';

import styles from '../model/InterviewItem.module.scss';
import { IInterviewItemProps } from '@entities/myInterviewItem/model/interviewItem.props';
import { useAppDispatch } from '@app/hooks';
import { setInterview } from '@entities/myInterviewItem/api';
import { MyInterviewButton } from '@shared/ui';
import { MainButton } from '@shared/ui';
import { useGetUserByIdQuery } from '@shared/api/getUserByIdApiSlice';
import { useRouter } from 'next/router';

export const InterviewItem: React.FC<IInterviewItemProps> = ({
	status,
	stack,
	initiatorId,
	date,
	interviewId,
	level,
}) => {
	const cx = classNames.bind(styles);
	const router = useRouter();
	const dipatch = useAppDispatch();
	const { data: user } = useGetUserByIdQuery(initiatorId);

	if (!user) {
		return <p>Загрузка...</p>;
	}

	const setInterviewHandler = () => {
		dipatch(
			setInterview({
				date,
				initiatorName: `${user.name} ${user.surName}`,
				interviewId,
				initiatorId,
				level,
				status,
				stack
			})
		);
	};

	const openFeedbackHanlder = () => {
		setInterviewHandler();
		router.push('/feedback');
	};

	return (
		<li
			className={cx('interviewItem', {
				ready: status === 'ACCEPT',
				pending: +date == new Date().getDate(),
				complete: status === 'CLOSED',
			})}
		>
			<span className={cx('text')}>{date}</span>
			<span className={cx('text')}>{stack}</span>
			<span className={cx('text')}>{`${user.name} ${user.surName}`}</span>
			<span className={cx('text')}>{level}</span>
			<span>
				<MainButton
					type='border'
					isDisabled={
						status === 'ACCEPT' || +date == new Date().getDate()
					}
					text={'Подробнее'}
					color={status === 'CLOSED' ? 'green' : 'blue'}
					onClick={openFeedbackHanlder}
				/>
			</span>
			{status === 'ACCEPT' && (
				<Link
					href={'/session'}
					className={styles.button}
					onClick={setInterviewHandler}
				>
					<MyInterviewButton status='active' />
				</Link>
			)}
			{status === 'CLOSED' && <MyInterviewButton status='completed' />}
			{status === 'pending' && <MyInterviewButton status='waiting' />}
		</li>
	);
};
