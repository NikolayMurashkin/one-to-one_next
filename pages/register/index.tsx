import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef } from 'react';

import styles from './index.module.scss';
import Button from '../../components/ui/button/Button';
import { Input } from './../../components/ui/input/Input';
import { LoginButton } from '@shared/ui';

const RegisterPage = () => {
	const router = useRouter();

	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const nameRef = useRef<HTMLInputElement>(null);
	const surNameRef = useRef<HTMLInputElement>(null);
	const formRef = useRef<HTMLFormElement>(null)

	const registerHandler = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		event.stopPropagation();
		const body = {
			email: emailRef.current?.value,
			password: passwordRef.current?.value,
			name: nameRef.current?.value,
			surName: surNameRef.current?.value,
		};
		const getUserId = await fetch(
			'http://51.250.8.47:8080/one-to-one/api/v1/user',
			{
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify(body),
			}
		)
			.then((response) => response.json())
			.then((data) => {
				window.localStorage.setItem('userInfo', JSON.stringify(data));
			});
		formRef.current?.reset();
		router.push('/register/success');
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
				onSubmit={registerHandler}
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
				<Input
					type='text'
					placeholder='Введите имя'
					label='Имя'
					inputRef={nameRef}
				/>
				<Input
					type='text'
					placeholder='Введите фамилию'
					label='Фамилия'
					inputRef={surNameRef}
				/>
				<LoginButton text='Зарегистрироваться'/>
			</form>
			<p className={styles.toRegister}>
				Есть аккаунт?{' '}
				<Link href={'/login'} className={styles.registerLink}>
					Войти
				</Link>
			</p>
		</div>
	);
};

export default RegisterPage;
