import classNames from 'classnames/bind';

import styles from './LoginButton.module.scss';
import { ILoginButton } from './LoginButtonTypes';

export const LoginButton: React.FC<ILoginButton> = ({ text }) => {
	const cx = classNames.bind(styles);

	return <button className={cx('button')}>{text}</button>;
};
