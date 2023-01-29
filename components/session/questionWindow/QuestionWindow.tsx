import classNames from 'classnames/bind';
import { GetAllQuestionResponse } from '../../../redux';
import { QuestionItem } from './QuestionItem';

import styles from './QuestionWindow.module.css';
import { useAppSelector } from '../../../hooks/redux';

export const QuestionWindow: React.FC<GetAllQuestionResponse> = ({ items }) => {
	const cx = classNames.bind(styles);
	const interviewInfo = useAppSelector((state) => state.interview);

	const questions = useAppSelector((state) => state.questions.questions);

	return (
		<div className={cx('wrapper')}>
			<div className={cx('top')}>
				<span className={cx('date')}>{interviewInfo.date}</span>
				<span className={cx('name')}>
					{interviewInfo.initiatorName}
				</span>
			</div>
			<hr />
			<ul className={cx('list')}>
				{questions.length <= 0 ? (
					<p>Добавьте вопрос из списка слева</p>
				) : (
					questions.map((question) => {
						return (
							<QuestionItem
								key={question.id}
								stack={question.technology?.name}
								question={question.question}
								id={question.id}
								answer={question.answer}
							/>
						);
					})
				)}
			</ul>
			<div className={cx('bottom')}>
				<input
					className={cx('text')}
					type='text'
					placeholder='Общий комментарий к собеседованию'
				/>
				<button className={cx('button')}>Сохранить и выйти</button>
			</div>
		</div>
	);
};
