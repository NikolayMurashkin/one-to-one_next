import classNames from 'classnames/bind';
import { useRef } from 'react';

import styles from '@entities/questionItem/model/QuestionItem.module.scss';
import { QuestionItemProps } from '@entities/questionItem/model/QuestionItem.props';
import { ArrowRightIcon } from '@entities/questionItem/icons/ArrowRightIcon';

export const QuestionItem: React.FC<QuestionItemProps> = ({
	question,
	answer,
	technology,
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
				<span className={cx('stack')}>{technology}</span>
				<span className={cx('question')}>{question}</span>
				<ArrowRightIcon className={cx('arrow')} />
			</div>
			<div className={cx('commentWrapper')}>
				<span className={cx('label')}>Ответ</span>
				<p className={cx('answer')}>{answer}</p>
			</div>
		</li>
	);
};
