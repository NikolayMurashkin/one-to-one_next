import classNames from 'classnames/bind';

import styles from './QuestionItem.module.scss';
import { QuestionItemProps } from '../../../redux';
import { ArrowRightIcon } from '../../../public/icons/ArrowRightIcon';
import { useRef } from 'react';

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
		// <li className={styles.section}>
		// 	<details className={styles.interviewItem}>
		// 		<summary className={styles.question}>
		// 			<div className={styles.title}>
		// 				<span>{question}</span>
		// 				<span>{technology}</span>
		// 			</div>
		// 		</summary>
		// 		<div className={styles.details}>
		// 			<span className={styles.answer}>Ответ</span>
		// 			<p className={styles.text}>{answer}</p>
		// 		</div>
		// 	</details>
		// </li>
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
