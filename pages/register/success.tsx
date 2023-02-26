import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

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
			<Image
				src={'/images/logo.jpg'}
				width={150}
				height={130}
				alt='One-To-One Logo'
			/>
			<h2>Успешная регистрация!</h2>
			<p>Сейчас вы будете перенаправлены на сайт</p>
		</div>
	);
};

export default LoginPage;
