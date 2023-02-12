import classNames from 'classnames/bind';
import { useRouter } from 'next/router';
import { useRef, useState, useEffect } from 'react';
import { useAppDispatch } from '@app/hooks';
import { setCredentials } from '@features/auth/api/authSlice';
import { useLoginMutation } from '@features/auth/api/authApiSlice';
import Link from 'next/link';

import styles from '@features/forms/loginForm/LoginForm.module.scss';
import { Input } from '@shared/ui/inputs/Input';
import { LoginButton } from '@shared/ui';

export const LoginForm = () => {
	const cx = classNames.bind(styles);

	const userRef = useRef();
	const errRef = useRef<HTMLParagraphElement>(null);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errMsg, setErrMsg] = useState('');
	const router = useRouter();

	const [login, { isLoading }] = useLoginMutation();
	const dispatch = useAppDispatch();

	// useEffect(() => {
	// 	userRef.current.focus();
	// }, []);

	useEffect(() => {
		setErrMsg('');
	}, [email, password]);

	const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		event.stopPropagation();

		try {
			const userData = await login({ email, password }).unwrap();

			localStorage.setItem('access', JSON.stringify(userData.jwtToken));
			localStorage.setItem('refresh', JSON.stringify(userData.refreshToken));

			console.log(userData);
			dispatch(setCredentials({ ...userData, email }));
			setEmail('');
			setPassword('');
			router.push('/');
		} catch (err) {
			console.log(err);
			// if (!err?.status) {
			// 	setErrMsg('No Server Response');
			// } else if (err.status === 400) {
			// 	setErrMsg('Missing Username or Password');
			// } else if (err.status === 401) {
			// 	setErrMsg('Unauthorized');
			// } else {
			// 	setErrMsg('Login Failed');
			// }
			// errRef.current.focus();
		}
	};

	const emailInputHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
		setEmail(e.target.value);
	const pwdInputHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
		setPassword(e.target.value);

	// const submitLoginHandler = (event: React.FormEvent<HTMLFormElement>) => {
	// 	event.preventDefault();
	// 	event.stopPropagation();
	// 	formRef.current?.clear();
	// 	router.push('/');
	// };

	const content = isLoading ? (
		<h1>Загрузка...</h1>
	) : (
		<>
			<p
				ref={errRef}
				className={errMsg ? 'errmsg' : 'offscreen'}
				aria-live='assertive'
			>
				{errMsg}
			</p>
			<form
				className={cx('form')}
				onSubmit={(event) => submitHandler(event)}
			>
				<Input
					type='email'
					placeholder='Введите адрес почты'
					label='Почта'
					value={email}
					onChange={emailInputHandler}
				/>
				<Input
					type='password'
					placeholder='Введите пароль'
					label='Пароль'
					value={password}
					onChange={pwdInputHandler}
				/>
				<Link href={'/register'} className={cx('forgotPassword')}>
					Забыли пароль?
				</Link>

				<LoginButton text='Войти' />
			</form>
			<p className={cx('toRegister')}>
				Нет аккаунта?{' '}
				<Link href={'/register'} className={cx('registerLink')}>
					Зарегистрироваться
				</Link>
			</p>
		</>
	);

	return content;
};
