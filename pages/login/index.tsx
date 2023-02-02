import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './index.module.scss';
import { Input } from './../../components/ui/input/Input';
import { useRef } from 'react';
import { LoginButton } from '@shared/ui/';

const LoginPage = () => {
	const router = useRouter();

	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const formRef = useRef<HTMLFormElement>(null);

	const submitLoginHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		event.stopPropagation();
		formRef.current?.clear();
		router.push('/');
	};

	return (
		<div className={styles.login}>
			<Image
				src={'/images/logo.jpg'}
				width={100}
				height={80}
				alt='One-To-One Logo'
			/>
			<form
				className={styles.form}
				onSubmit={submitLoginHandler}
				ref={formRef}
			>
				<Input
					type='email'
					placeholder='Введите адрес почты'
					label='Почта'
					inputRef={emailRef}
				/>
				<Input
					type='password'
					placeholder='Введите пароль'
					label='Пароль'
					inputRef={passwordRef}
				/>
				<Link href={'/register'} className={styles.forgotPassword}>
					Забыли пароль?
				</Link>
				<LoginButton text='Войти' />
			</form>
			<p className={styles.toRegister}>
				Нет аккаунта?{' '}
				<Link href={'/register'} className={styles.registerLink}>
					Зарегистрироваться
				</Link>
			</p>
		</div>
	);
};

export default LoginPage;
