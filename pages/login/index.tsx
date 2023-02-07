import classNames from 'classnames/bind';

import styles from './index.module.scss';
import { LogoIcon } from './../../public/icons/LogoIcon';
import { LoginForm } from '@features/index';

const LoginPage = () => {
	const cx = classNames.bind(styles);

	return (
		<div className={cx('login')}>
			<LogoIcon />
			<LoginForm />
		</div>
	);
};

export default LoginPage;
