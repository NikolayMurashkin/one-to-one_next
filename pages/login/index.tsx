import classNames from 'classnames/bind';

import styles from './index.module.scss';
import { LoginForm } from '@features/index';
import { LogoIcon } from '@shared/ui';

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
