import classNames from 'classnames/bind';

import styles from './SearchInterviewItem.module.scss';
import { ISearchInterviewButtonProps } from './SearchInterviewButton.props';

export const SearchInterviewButton: React.FC<ISearchInterviewButtonProps> = ({
	text,
}) => {
	const cx = classNames.bind(styles);
	return <button className={cx('button')}>{text}</button>;
};

