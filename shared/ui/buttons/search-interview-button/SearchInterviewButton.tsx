import classNames from 'classnames/bind';
import { useRef, useState, useEffect } from 'react';

import styles from './SearchInterviewButton.module.scss';
import { ISearchInterviewButtonProps } from './SearchInterviewButton.props';

export const SearchInterviewButton: React.FC<ISearchInterviewButtonProps> = ({
	text,
}) => {
	const cx = classNames.bind(styles);
	const [btnText, setBtnText] = useState('');
	useEffect(() => {
		setBtnText(text)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])



	const clickHandle = () => {
		setBtnText('Успешно!')
	};

	return (
		<button className={cx('button')} onClick={clickHandle}>
			{btnText}
		</button>
	);
};
