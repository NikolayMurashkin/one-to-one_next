import { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import classNames from 'classnames/bind';

import { PlusIcon } from '@shared/ui/icons/PlusIcon';
import { Technology } from '@entities/technology/ui/Technology';
import { QuestionItem } from '@entities/modalQuestionItem/ui/QuestionItem';
import styles from '../model/Questions.module.scss';
import { MainButton } from '@shared/ui/buttons/main-button/MainButton';
import { useAppSelector } from '@app/hooks';
import { IQuestionsProps } from '@features/modalQuestions/model/Questions.props';
import { IQuestion } from '@features/myQuestions/model/myQuestionsSliceTypes';
import { RootState } from '@app/store';
import { useAddQuestionsMutation } from '@features/modalQuestions/api/questionsApiSlice';

export const Questions: React.FC<IQuestionsProps> = ({
	openModal,
	closeModal,
	modalIsOpen,
}) => {
	const cx = classNames.bind(styles);

	const [question, setQuestion] = useState('');
	const [answer, setAnswer] = useState('');
	const [isFilled, setIsFilled] = useState(true);
	const [questionsList, setQuestionsList] = useState<IQuestion[]>([]);
	const [user, setUser] = useState<number>();

	useEffect(() => {
		const userIdJson = localStorage.getItem('id');
		if (userIdJson) {
			setUser(userIdJson !== null ? JSON.parse(userIdJson) : {});
		}
	}, []);

	const selectedTab = useAppSelector(
		(state: RootState) => state.tabs.selectedTab
	);
	const technology = useAppSelector((state: RootState) => state.technology);

	const [addQuestions] = useAddQuestionsMutation();

	const submitCreateQuestionsHanlder = async (
		e: React.FormEvent<HTMLFormElement>
	) => {
		e.preventDefault();
		if (question.length <= 0 || answer.length <= 0) {
			setIsFilled(false);
			return;
		}
		const newArr: IQuestion[] = [];
		await addQuestions({
			userId: user,
			questions: newArr.concat(questionsList, [
				{
					question,
					answer,
					userId: user,
					technologyId: technology.id,
				},
			]),
		});
		setQuestion('');
		setAnswer('');
		setQuestionsList([]);
		closeModal();
	};
	const addOneMoreQuestionHandler = () => {
		if (question.length <= 0 || answer.length <= 0) {
			setIsFilled(false);
			return;
		}
		setQuestionsList((prevList) => {
			setIsFilled(true);
			const newList = prevList.concat([
				{
					question,
					answer,
					userId: user,
					technology: {
						id: technology.id,
						name: technology.name,
					},
					technologyId: technology.id,
				},
			]);
			setQuestion('');
			setAnswer('');
			return newList;
		});
		console.log(questionsList);
	};
	const deleteQuestionHandler = (question: string | undefined) => {
		setQuestionsList((prevState) => {
			return prevState.filter((item) => item.question !== question);
		});
	};

	return (
		<>
			<PlusIcon
				onClick={openModal}
				className={cx('plusIcon', {
					plusActive: 3 === selectedTab,
				})}
				color={3 === selectedTab ? '#213A8F' : '#808080'}
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
					onSubmit={submitCreateQuestionsHanlder}
				>
					<div className={cx('questions__top')}>
						<PlusIcon
							onClick={addOneMoreQuestionHandler}
							color='#808080'
							className={cx('plusIcon')}
						/>
						<MainButton
							color='green'
							type='fill'
							isDisabled={false}
							text='Сохранить'
						/>
					</div>
					<div className={cx('questions__body')}>
						<div className={cx('questions__question')}>
							<textarea
								placeholder='Вопрос'
								cols={1}
								rows={1}
								className={cx('questions__input')}
								value={question}
								onChange={(e) => setQuestion(e.target.value)}
							/>
							{!isFilled && (
								<span className={cx('errorQuestion')}>
									Поле должно быть заполнено
								</span>
							)}

							<Technology />
						</div>
						<div className={cx('questions__answer')}>
							<textarea
								placeholder='Ответ'
								className={cx('questions__input')}
								cols={1}
								rows={4}
								value={answer}
								onChange={(e) => setAnswer(e.target.value)}
							/>
							{!isFilled && (
								<span className={cx('errorAnswer')}>
									Поле должно быть заполнено
								</span>
							)}
						</div>
					</div>
					{questionsList && (
						<ul className={cx('questions__added')}>
							{questionsList.map((question) => {
								return (
									<QuestionItem
										key={question.question}
										answer={question.answer}
										question={question.question}
										technologyName={
											question.technology?.name
										}
										deleteQuestion={deleteQuestionHandler}
									/>
								);
							})}
						</ul>
					)}
				</form>
			</ReactModal>
		</>
	);
};
