import classNames from 'classnames/bind';
import Link from 'next/link';
import { skipToken } from '@reduxjs/toolkit/dist/query';

import styles from '../model/InterviewItem.module.scss';
import { IInterviewItemProps } from '@entities/myInterviewItem/model/interviewItem.props';
import { useAppDispatch, useAppSelector } from '@app/hooks';
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
	opponentId,
	initiatorFeedback,
	opponentFeedback,
	interviewDate,
}) => {
	const cx = classNames.bind(styles);

	const router = useRouter();

	const dipatch = useAppDispatch();

	const { data: user } = useGetUserByIdQuery(initiatorId ?? skipToken);

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
				stack,
				opponentId,
			})
		);
	};

	const openFeedbackHandler = () => {
		setInterviewHandler();
		router.push('/feedback');
	};

	const timeBeforeInterview = Date.parse(interviewDate) - 300000;

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
						(initiatorFeedback === 'NO_WRITE' &&
							opponentFeedback === 'WRITE') ||
						(initiatorFeedback === 'NO_WRITE' &&
							opponentFeedback === 'NO_WRITE') ||
						+date == new Date().getDate()
					}
					text={'Подробнее'}
					color={
						(initiatorFeedback === 'WRITE' &&
							opponentFeedback === 'WRITE') ||
						(initiatorFeedback === 'WRITE' &&
							opponentFeedback === 'NO_WRITE')
							? 'green'
							: 'blue'
					}
					onClick={openFeedbackHandler}
				/>
			</span>
			{initiatorFeedback === 'NO_WRITE' &&
				opponentFeedback === 'NO_WRITE' && (
					timeBeforeInterview >= Date.now() ? <MyInterviewButton status='waiting' /> : <Link
						href={'/session'}
						onClick={setInterviewHandler}
					>
						<MyInterviewButton status='not started' />
					</Link>
				)}
			{initiatorFeedback === 'WRITE' && opponentFeedback === 'WRITE' && (
				<MyInterviewButton status='completed' />
			)}
			{initiatorFeedback === 'NO_WRITE' &&
				opponentFeedback === 'WRITE' && (
					<MyInterviewButton status='waiting for opponent review' />
				)}
			{initiatorFeedback === 'WRITE' &&
				opponentFeedback === 'NO_WRITE' && (
					<Link
						href={'/session'}
						className={styles.button}
						onClick={setInterviewHandler}
					>
						<MyInterviewButton status='waiting for your review' />
					</Link>
				)}
		</li>
	);
};
