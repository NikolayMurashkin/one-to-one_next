import classNames from 'classnames/bind';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';

import styles from '@features/forms/registerForm/RegisterForm.module.scss';
import { Input } from '@shared/ui/inputs/Input';
import { LoginButton } from '@shared/ui';
import Link from 'next/link';

export const RegisterForm = () => {
	const cx = classNames.bind(styles);

	const router = useRouter();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [surName, setSurName] = useState('');

	const registerHandler = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		event.stopPropagation();
		const body = {
			email,
			password,
			name,
			surName,
		};
		const getUserId = await fetch(
			'http://51.250.55.231:8080/one-to-one/api/v1/user/register',
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
				window.localStorage.setItem(
					'userInfo',
					JSON.stringify(data.id)
				);
			});
		setEmail('');
		setPassword('');
		setName('');
		setSurName('');
		router.push('/register/success');
	};

	const emailInputHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
		setEmail(e.target.value);
	const passwordInputHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
		setPassword(e.target.value);
	const nameInputHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
		setName(e.target.value);
	const surNameInputHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
		setSurName(e.target.value);

	return (
		<>
			<form className={cx('form')} onSubmit={registerHandler}>
				<Input
					type='email'
					placeholder='Введите адрес почты'
					label='Почта'
					onChange={emailInputHandler}
					value={email}
				/>
				<Input
					type='password'
					placeholder='Введите пароль'
					label='Пароль'
					onChange={passwordInputHandler}
					value={password}
				/>
				<Input
					type='text'
					placeholder='Введите имя'
					label='Имя'
					onChange={nameInputHandler}
					value={name}
				/>
				<Input
					type='text'
					placeholder='Введите фамилию'
					label='Фамилия'
					onChange={surNameInputHandler}
					value={surName}
				/>
				<LoginButton text='Зарегистрироваться' />
			</form>
			<p className={styles.toRegister}>
				Есть аккаунт?{' '}
				<Link href={'/login'} className={cx('registerLink')}>
					Войти
				</Link>
			</p>
		</>
	);
};
