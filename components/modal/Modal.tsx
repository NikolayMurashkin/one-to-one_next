import { useState } from 'react';
import ReactModal from 'react-modal';
import classNames from 'classnames/bind';

import { PlusIcon } from '../../public/icons/PlusIcon';
import styles from './Modal.module.scss';
import { TModalProps } from './Modal.props';
import { Datepicker } from '../createInterview/datepicker/Datepicker';
import { Technology } from '../createInterview/technology/Technology';
import { Timepicker } from '../createInterview/timepicker/Timepicker';
import { Level } from '../createInterview/level/Level';
import Button from '../ui/button/Button';
import { SingleValue } from 'react-select';
import { QuestionItem } from '../interviewPage/myQuestions/QuestionItem';

type TQuestion = {
	id?: number;
	question: string;
	answer: string;
	technology?: {
		id: number | undefined;
		name: string;
	};
	technologyId?: number | undefined;
	userId: number | undefined;
};

export const Modal: React.FC<TModalProps> = ({
	tab,
	selectedTab,
}): JSX.Element => {
	const cx = classNames.bind(styles);
	const [modalIsOpen, setIsOpen] = useState(false);
	const [date, setDate] = useState<Date | undefined>();
	const [stack, setStack] = useState<
		SingleValue<{ value: number; label: string }>
	>({ value: 1, label: 'Junior' });
	const [time, setTime] = useState('');
	const [level, setLevel] = useState<
		SingleValue<{ value: number; label: string }>
	>({ value: 1, label: 'Junior' });
	const [comment, setComment] = useState('');
	const [question, setQuestion] = useState('');
	const [answer, setAnswer] = useState('');
	const [questionsList, setQuestionsList] = useState<TQuestion[]>([]);

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

		const newDate = date && new Date(date.toString());
		newDate?.setDate(newDate.getDate());
		newDate?.setTime(newDate.getTime() + milliseconds);

		const data = {
			dateTime: newDate?.toISOString(),
			levelId: level !== null && level.value,
			comment,
			initiatorId: 1,
			technologyId: stack !== null && stack.value,
		};

		fetch('http://51.250.8.47:8080/one-to-one/api/v1/one-to-one', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		});
		setIsOpen(false);
	};

	const sendQuestionsHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		e.stopPropagation();

		const newArr: TQuestion[] = [];
		// if (newArr.length <= 0) {
		// 	fetch('http://51.250.8.47:8080/one-to-one/api/v1/one-to-one', {
		// 		method: 'POST',
		// 		headers: { 'Content-Type': 'application/json' },
		// 		body: JSON.stringify({questions: questionsList}),
		// 	});
		// }
		const data = {
			userId: 1,
			questions: newArr.concat(questionsList, [
				{
					question,
					answer,
					userId: 1,
					technologyId: stack !== null ? stack.value : 1,
				},
			]),
		};

		fetch(
			'http://51.250.8.47:8080/one-to-one/api/v1/user/1/question/create',
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			}
		);
		setQuestion('');
		setAnswer('');
		setIsOpen(false);
	};

	const addOneMoreQuestionHandler = () => {
		const newArr: TQuestion[] = [];
		setQuestionsList(
			newArr.concat(questionsList, [
				{
					question,
					answer,
					userId: 1,
					technologyId: stack !== null ? stack.value : 1,
				},
			])
		);

		setQuestion('');
		setAnswer('');
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
					<form
						className={cx('questions')}
						onSubmit={sendQuestionsHandler}
					>
						<div className={cx('questions__top')}>
							<PlusIcon
								onClick={addOneMoreQuestionHandler}
								color='#808080'
							/>
							<Button color='secondary' text='Сохранить' />
						</div>
						<div className={cx('questions__body')}>
							<div className={cx('questions__question')}>
								<textarea
									placeholder='Вопрос'
									value={question}
									cols={1}
									rows={1}
									className={cx('questions__input')}
									onChange={(e) =>
										setQuestion(e.target.value)
									}
								/>
								<Technology setStack={setStack} />
							</div>
							<textarea
								placeholder='Ответ'
								className={cx('questions__input')}
								cols={1}
								rows={4}
								value={answer}
								onChange={(e) => setAnswer(e.target.value)}
							/>
						</div>
						{questionsList && (
							<ul className={cx('questions__added')}>
								{questionsList.map((question) => {
									return (
										<QuestionItem
											key={question.technologyId}
											answer={question.answer}
											question={question.question}
											technology={question.technologyId?.toString()}
										/>
									);
								})}
							</ul>
						)}
					</form>
				</ReactModal>
			</>
		);
	}
	return <p>some</p>;
};
