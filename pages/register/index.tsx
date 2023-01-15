import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './index.module.scss';
import Button from '../../components/ui/button/Button';
import { Input } from './../../components/ui/input/Input';

const RegisterPage = () => {
	const router = useRouter();

	const registerHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		event.stopPropagation();
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
			<form className={styles.form} onSubmit={registerHandler}>
				<Input
					type='email'
					placeholder='Введите адрес почты'
					label='Почта'
				/>
				<Input
					type='password'
					placeholder='Введите пароль'
					label='Пароль'
				/>
				<Input
					type='text'
					placeholder='Введите имя и фамилию'
					label='Полное имя'
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
