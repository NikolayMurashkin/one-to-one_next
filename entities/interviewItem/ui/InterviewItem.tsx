import classNames from 'classnames/bind';
import Link from 'next/link';

import styles from './InterviewItem.module.scss';
import { IInterviewItemProps } from '@entities/interviewItem/model/interviewItem.props';
import { useAppDispatch } from '@app/hooks';
import { setInterview } from '@entities/interviewItem/api';
import { InterviewButton } from '@shared/ui';
import { MainButton } from '@shared/ui';
import { useGetUserByIdQuery } from '@entities/interviewItem/api/getUserByIdApiSlice';

export const InterviewItem: React.FC<IInterviewItemProps> = ({
	status,
	stack,
	initiatorId,
	date,
	interviewId,
	level
}) => {
	const cx = classNames.bind(styles);
	const dipatch = useAppDispatch();
	const { data: user } = useGetUserByIdQuery(initiatorId);

	if (!user) {
		return <p>Загрузка...</p>;
	}
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
				/>
			</span>
			{status === 'ACCEPT' && (
				<Link
					href={'/session'}
					className={styles.button}
					onClick={() =>
						dipatch(
							setInterview({
								date,
								initiatorName: `${user.name} ${user.surName}`,
								interviewId,
								initiatorId,
								level,
								status,
							})
						)
					}
				>
					<InterviewButton status='active' />
				</Link>
			)}
			{status === 'CLOSED' && <InterviewButton status='completed' />}
			{status === 'pending' && <InterviewButton status='waiting' />}
		</li>
	);
};
