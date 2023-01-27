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
import { QuestionItem } from '../../interviewPage/myQuestions/QuestionItem';
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
	const [questionsList, setQuestionsList] = useState<IQuestion[]>([]);

	const selectedTab = useAppSelector(
		(state: RootState) => state.tabs.selectedTab
	);
	const technologyId = useAppSelector(
		(state: RootState) => state.technology.id
	);

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
					technologyId,
				},
			]),
		});
		setQuestion('');
		setAnswer('');
		closeModal();
	};
	const addOneMoreQuestionHandler = () => {
		const newArr: IQuestion[] = [];
		setQuestionsList(
			newArr.concat(questionsList, [
				{
					question,
					answer,
					userId: 1,
					technologyId,
				},
			])
		);

		setQuestion('');
		setAnswer('');
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
								onChange={(e) => setQuestion(e.target.value)}
							/>
							<Technology />
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
};