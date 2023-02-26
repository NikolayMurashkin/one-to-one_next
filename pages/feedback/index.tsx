import { useEffect, useState } from 'react';
import Head from 'next/head';
import classNames from 'classnames/bind';
import { useRouter } from 'next/router';

import styles from './index.module.scss';
import { MainButton } from '@shared/ui';
import { useGetFeedbackQuery } from '@features/feedback/api/feedbackApiSlice';
import { useAppSelector } from '@app/hooks';
import { RootState } from '@app/store';
import { FeedbackQuestion } from '@entities/feedbackQuestion/ui/FeedbackQuestion';

const Feedback = () => {
	const router = useRouter();

	const [user, setUser] = useState<number>(0);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const userJson = localStorage.getItem('id');
			const user = userJson !== null ? JSON.parse(userJson) : {};
			setUser(user);
		}
		if (
			typeof window !== 'undefined' &&
			localStorage.getItem('id') === null
		) {
			router.push('/login');
		}
	}, []);

	useEffect(() => {
		if (
			typeof window !== 'undefined' &&
			localStorage.getItem('id') === null
		) {
			router.push('/login');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const cx = classNames.bind(styles);

	const { initiatorId, interviewId, date, initiatorName, level, stack } =
		useAppSelector((state: RootState) => state.interviewItem);

	const {
		data: feedbackData,
		isLoading,
		isError,
		error,
	} = useGetFeedbackQuery({
		userId: user,
		interviewId,
	});

	if (isLoading) {
		return <p>Загрузка...</p>;
	}
	if (isError) {
		console.log(error);
		return <p>Произошла ошибка</p>;
	}
	if (feedbackData) {
		return (
			<>
				<Head>
					<title>Check-Me</title>
					<meta name='description' content='Interviewing Service' />
					<meta
						name='viewport'
						content='width=device-width, initial-scale=1'
					/>
				</Head>
				<section>
					<div className={cx('title')}>
						<span className={cx('date')}>{date}</span>
						<span className={cx('name')}>{initiatorName}</span>
						<span className={cx('stack')}>{stack}</span>
						<span className={cx('level')}>{level}</span>
						<MainButton
							color='green'
							isDisabled={false}
							text={'Выйти'}
							type={'fill'}
						/>
					</div>
					<hr />
					<ul className={cx('questionsList')}>
						{feedbackData.questions.map((question) => (
							<FeedbackQuestion
								key={question.question}
								comment={question.comment}
								question={question.question}
								responseLevel={+question.responseLevel}
								stack={stack}
								answer={question.answer}
							/>
						))}
					</ul>
					<hr />
					<div className={cx('comment')}>
						<span className={cx('comment__title')}>
							Общий комментарий к собеседованию
						</span>
						<p className={cx('comment__text')}>
							{feedbackData.message}
						</p>
					</div>
				</section>
			</>
		);
	}
};

export default Feedback;
