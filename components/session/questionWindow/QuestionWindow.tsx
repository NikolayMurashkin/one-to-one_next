import classNames from 'classnames/bind';
import { GetAllQuestionResponse } from '../../../redux';
import { QuestionItem } from './QuestionItem';

import styles from './QuestionWindow.module.css';

export const QuestionWindow: React.FC<GetAllQuestionResponse> = ({ items }) => {
	const cx = classNames.bind(styles);
	return (
		<div className={cx('wrapper')}>
			<div className={cx('top')}>
				<span className={cx('date')}>дата</span>
				<span className={cx('name')}>имя</span>
			</div>
			<hr />
			<ul className={cx('list')}>
				{items.map((question) => {
					return (
						<QuestionItem
							key={question.id}
							stack={question.technology.name}
							question={question.question}
							answer={question.answer}
						/>
					);
				})}
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
