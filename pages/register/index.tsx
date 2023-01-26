import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef } from 'react';

import styles from './index.module.scss';
import Button from '../../components/ui/button/Button';
import { Input } from './../../components/ui/input/Input';
import { useCreateUserMutation } from '../../redux';
import { setUser } from '../../slices/userSlice';
import { useAppDispatch } from './../../hooks/redux';

const RegisterPage = () => {
	const router = useRouter();
	const [createUser, result] = useCreateUserMutation();
	const dispatch = useAppDispatch();

	const loginRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const nameRef = useRef<HTMLInputElement>(null);
	const surNameRef = useRef<HTMLInputElement>(null);

	const registerHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		event.stopPropagation();
		const body = {
			login: loginRef.current?.value,
			email: emailRef.current?.value,
			password: passwordRef.current?.value,
			name: nameRef.current?.value,
			surName: surNameRef.current?.value,
		};
		createUser(body);
		router.push('/register/success');
	};

	if (result.isSuccess) {
		const userId = result.data.id;
		localStorage.setItem('userId', userId.toString());
		
		// dispatch(
		// 	setUser({
		// 		id: user.id,
		// 		login: user.login,
		// 		email: user.email,
		// 		name: user.name,
		// 		surName: user.surName,
		// 	})
		// );
	}

	return (
		<div className={styles.login}>
			<Image
				src={'/images/logo.jpg'}
				width={100}
				height={80}
				alt='One-To-One Logo'
			/>
			<form className={styles.form} onSubmit={registerHandler}>
				<Input
					type='text'
					placeholder='Введите логин'
					label='Логин'
					inputRef={loginRef}
				/>
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
				<Button text='Зарегистрироваться' color='primary' />
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
