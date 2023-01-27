import classNames from 'classnames/bind';

import styles from './QuestionItem.module.css';
import { ArrowRightIcon } from '../../../public/icons/ArrowRightIcon';
import { QuestionItemProps } from './QuestionItem.props';
import Rating from './../../ui/rating/Rating';
import { CloseIcon } from './../../../public/icons/CloseIcon';
import { useRef } from 'react';

export const QuestionItem: React.FC<QuestionItemProps> = ({
	stack,
	question,
	answer,
}) => {
	const cx = classNames.bind(styles);
	const commentRef = useRef<HTMLLIElement>(null);

	const openCommentHandler = () => {
		commentRef.current?.classList.toggle(cx('opened'));
	};
	return (
		<li className={cx('wrapper')} ref={commentRef}>
			<div className={cx('content')} onClick={openCommentHandler}>
				<CloseIcon />
				<span className={cx('stack')}>{stack}</span>
				<span className={cx('question')}>{question}</span>
				<Rating readOnly={false} />
				<ArrowRightIcon className={cx('arrow')} />
			</div>
			<div className={cx('comment')}>
				<p className={cx('answer')}>{answer}</p>
				<textarea
					cols={60}
					rows={5}
					placeholder='Введите комментарий к ответу'
					className={cx('text')}
				></textarea>
			</div>
		</li>
	);
};
