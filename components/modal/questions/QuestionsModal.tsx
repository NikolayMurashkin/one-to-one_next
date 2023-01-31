import { useState } from 'react';
import ReactModal from 'react-modal';
import classNames from 'classnames/bind';

import { PlusIcon } from '../../../public/icons/PlusIcon';
import {
	IQuestion,
	QuestionsProps,
	RootState,
	useAddQuestionsMutation,
} from '../../../redux';
import { Technology } from '../technology/Technology';
import { QuestionItem } from './questionItem/QuestionItem';
import styles from './Questions.module.scss';
import Button from '../../ui/button/Button';
import { useAppSelector } from '../../../hooks/redux';

export const Questions: React.FC<QuestionsProps> = ({
	openModal,
	closeModal,
	modalIsOpen,
}) => {
	const cx = classNames.bind(styles);

	const [question, setQuestion] = useState('');
	const [answer, setAnswer] = useState('');
	const [isFilled, setIsFilled] = useState(true);
	const [questionsList, setQuestionsList] = useState<IQuestion[]>([]);

	const selectedTab = useAppSelector(
		(state: RootState) => state.tabs.selectedTab
	);
	const technology = useAppSelector((state: RootState) => state.technology);

	const [addQuestions] = useAddQuestionsMutation();

	const submitCreateQuestionsHanlder = async (
		e: React.FormEvent<HTMLFormElement>
	) => {
		e.preventDefault();
		const newArr: IQuestion[] = [];
		await addQuestions({
			userId: 1,
			questions: newArr.concat(questionsList, [
				{
					question,
					answer,
					userId: 1,
					technologyId: technology.id,
				},
			]),
		});
		setQuestion('');
		setAnswer('');
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
					userId: 1,
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
				color={3 === selectedTab ? '#C70025' : '#808080'}
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
						<Button color='secondary' text='Сохранить' />
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
