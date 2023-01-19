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

export const Modal: React.FC<TModalProps> = ({
	tab,
	selectedTab,
}): JSX.Element => {
	const cx = classNames.bind(styles);

	// let subtitle;
	const [modalIsOpen, setIsOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
		// subtitle.style.color = '#f00';
	}

	function closeModal() {
		setIsOpen(false);
	}
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
					onAfterOpen={afterOpenModal}
					onRequestClose={closeModal}
					contentLabel='Example Modal'
					className={cx('interview')}
					overlayClassName={cx('overlay')}
				>
					<div className={cx('header')}>
						<h2 className={cx('title')}>Создание собеседования</h2>
					</div>
					<form className={cx('form')}>
						<div className={cx('form__top')}>
							<div>
								<span className={cx('form__label')}>
									Дата собеседования
								</span>
								<Datepicker />
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
								<Timepicker />
							</div>
							<div>
								<span className={cx('form__label')}>
									Уровень
								</span>
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
					onAfterOpen={afterOpenModal}
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
