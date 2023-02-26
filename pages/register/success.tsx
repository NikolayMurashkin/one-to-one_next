import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { LogoIcon } from '@shared/ui';
import styles from './success.module.scss';

const LoginPage = () => {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			router.push('/');
		}, 3000);
		/* eslint-disable */
	}, []);

	return (
		<div className={styles.success}>
			<LogoIcon />
			<h2>Успешная регистрация!</h2>
			<p>Сейчас вы будете перенаправлены на сайт</p>
		</div>
	);
};

export default LoginPage;
