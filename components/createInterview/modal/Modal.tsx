import { useState } from 'react';
import ReactModal from 'react-modal';
import classNames from 'classnames/bind';

import HomePage from '../../../pages';
import { PlusIcon } from '../../../public/icons/PlusIcon';
import styles from './Modal.module.scss';
import { TModalProps } from './Modal.props';
import { Datepicker } from '../datepicker/Datepicker';
import { Technology } from '../technology/Technology';
import { Timepicker } from '../timepicker/Timepicker';
import { Level } from '../level/Level';
import Button from './../../ui/button/Button';
import { json } from 'stream/consumers';

export const Modal: React.FC<TModalProps> = ({
	tab,
	selectedTab,
}): JSX.Element => {
	const cx = classNames.bind(styles);
	const [modalIsOpen, setIsOpen] = useState(false);
	const [date, setDate] = useState('');
	const [stack, setStack] = useState('');
	const [time, setTime] = useState('');
	const [level, setLevel] = useState('');
	const [comment, setComment] = useState('');

	function openModal() {
		setIsOpen(true);
	}
	function closeModal() {
		setIsOpen(false);
	}

	const submitCreateInterview = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		e.stopPropagation();

		const newTime = time.split(':');
		const seconds = (+newTime[0] + 7) * 60 * 60 + +newTime[1] * 60;
		const milliseconds = seconds * 1000;

		const newDate = new Date(date);
		newDate.setDate(newDate.getDate());
		newDate.setTime(newDate.getTime() + milliseconds);

		console.log(comment);

		const data = {
			dateTime: newDate.toISOString(),
			levelId: +level.value,
			comment,
			initiatorId: 1,
			technologyId: +stack.value,
		};

		fetch('http://51.250.8.47:8080/one-to-one/api/v1/one-to-one', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		});
		setIsOpen(false);
	};

	if (tab === '1') {
		return (
			<>
				<PlusIcon
					onClick={openModal}
					className={cx('plusIcon', {
						plusActive: tab === selectedTab,
					})}
					color={tab === selectedTab ? '#C70025' : '#808080'}
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
								<Technology setStack={setStack} />
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
								<span className={cx('form__label')}>
									Уровень
								</span>
								<Level setLevel={setLevel} />
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
						<Button
							color='secondary'
							text='Сохранить'
							disabled={false}
						/>
					</form>
				</ReactModal>
			</>
		);
	}
	if (tab === '3') {
		return (
			<>
				<PlusIcon
					onClick={openModal}
					className={cx('plusIcon', {
						plusActive: tab === selectedTab,
					})}
					color={tab === selectedTab ? '#C70025' : '#808080'}
				/>
				<ReactModal
					ariaHideApp={false}
					isOpen={modalIsOpen}
					onRequestClose={closeModal}
					className={cx('question')}
					overlayClassName={cx('overlay')}
					contentLabel='Example Modal'
				>
					<h1>My Questions</h1>
				</ReactModal>
			</>
		);
	}
	return <p>some</p>;
};
