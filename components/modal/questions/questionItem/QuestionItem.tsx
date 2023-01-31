import classNames from 'classnames/bind';
import { useRef } from 'react';
import { ArrowRightIcon } from '../../../../public/icons/ArrowRightIcon';
import { CloseIcon } from '../../../../public/icons/CloseIcon';

import styles from './QuestionItem.module.css';
import { QuestionItemProps } from './QuestionItem.props';

export const QuestionItem: React.FC<QuestionItemProps> = ({
	answer,
	question,
	technologyName,
	deleteQuestion,
}) => {
	const cx = classNames.bind(styles);

	const questionRef = useRef<HTMLLIElement>(null);

	const openQuestiontHandler = () => {
		if (questionRef.current !== null) {
			questionRef.current.classList.toggle(cx('opened'));
		}
	};

	return (
		<li
			className={cx('wrapper')}
			ref={questionRef}
			onClick={openQuestiontHandler}
		>
			<div className={cx('content')}>
				<CloseIcon onClick={() => deleteQuestion(question)} />
				<span className={cx('stack')}>{technologyName}</span>
				<span className={cx('question')}>{question}</span>
				<ArrowRightIcon className={cx('arrow')} />
			</div>
			<div className={cx('commentWrapper')}>
				<p className={cx('answer')}>{answer}</p>
			</div>
		</li>
	);
};
