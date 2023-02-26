import classNames from 'classnames/bind';
import { useState } from 'react';
import ReactModal from 'react-modal';

import { useAppSelector } from '@app/hooks';
import { PlusIcon } from '@shared/ui/icons/PlusIcon';
import { Technology } from '@entities/technology/ui/Technology';
import { Datepicker } from '@shared/ui/datepicker/Datepicker';
import { Level } from '@shared/ui/level/Level';
import { Timepicker } from '@shared/ui/timepicker/Timepicker';
import styles from '../model/InterviewsModal.module.scss';
import { MainButton } from '@shared/ui';
import { RootState } from '@app/store';
import { IInterviewsModalProps } from '@features/modalInterviews/model/interviewsModal.props';
import { useCreateInterviewMutation } from '@features/modalInterviews/api/createInterviewApiSlice';

export const InterviewsModal: React.FC<IInterviewsModalProps> = ({
	openModal,
	modalIsOpen,
	closeModal,
}) => {
	const cx = classNames.bind(styles);

	const [date, setDate] = useState<Date | undefined>();
	const [time, setTime] = useState('');
	const [comment, setComment] = useState('');

	const [createInterview] = useCreateInterviewMutation();

	const selectedTab = useAppSelector(
		(state: RootState) => state.tabs.selectedTab
	);
	const technologyId = useAppSelector(
		(state: RootState) => state.technology.id
	);
	const level = useAppSelector(
		(state: RootState) => state.level.currentLevel.value
	);

	const submitCreateInterview = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		e.stopPropagation();

		const newTime = time.split(':');
		const seconds = (+newTime[0] + 7) * 60 * 60 + +newTime[1] * 60;
		const milliseconds = seconds * 1000;

		const newDate = date && new Date(date.toString());
		newDate?.setDate(newDate.getDate());
		newDate?.setTime(newDate.getTime() + milliseconds);

		const data = {
			dateTime: newDate?.toISOString(),
			levelId: level,
			comment,
			initiatorId: 1,
			technologyId,
		};

		createInterview(data);
		closeModal();
	};

	return (
		<>
			<PlusIcon
				onClick={openModal}
				className={cx('plusIcon', {
					plusActive: 1 === selectedTab,
				})}
				color={1 === selectedTab ? '#213A8F' : '#808080'}
			/>
			<ReactModal
				ariaHideApp={false}
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				contentLabel='Example Modal'
				className={cx('interview')}
				overlayClassName={cx('overlay')}
			>
				<div className={cx('header')}>
					<h2 className={cx('title')}>Создание собеседования</h2>
				</div>
				<form
					className={cx('form')}
					onSubmit={(e) => submitCreateInterview(e)}
				>
					<div className={cx('form__top')}>
						<div>
							<span className={cx('form__label')}>
								Дата собеседования
							</span>
							<Datepicker setDate={setDate} />
						</div>
						<div>
							<span className={cx('form__label')}>Стек</span>
							<Technology />
						</div>
					</div>
					<div className={cx('form__bottom')}>
						<div>
							<span className={cx('form__label')}>
								Время собеседования
							</span>
							<Timepicker setTime={setTime} />
						</div>
						<div>
							<span className={cx('form__label')}>Уровень</span>
							<Level />
						</div>
					</div>
					<label htmlFor='comment' className={cx('form__label')}>
						Комментарий
					</label>
					<textarea
						placeholder='Укажите здесь свои контакты для связи и предпочитаемую платформу для проведения звонка'
						name=''
						id='comment'
						cols={30}
						rows={10}
						className={cx('form__comment')}
						onChange={(e) => setComment(e.target.value)}
					/>
					<MainButton
						color='green'
						type='fill'
						text='Сохранить'
						isDisabled={false}
					/>
				</form>
			</ReactModal>
		</>
	);
};
