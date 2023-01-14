import Image from 'next/image';
import Link from 'next/link';

import styles from './index.module.scss';
import { Input } from '../../components/authentication/Input';
import Button from '../../components/ui/button/Button';

const LoginPage = () => {
	return (
		<div className={styles.login}>
			<Image
				src={'/images/logo.jpg'}
				width={100}
				height={80}
				alt='One-To-One Logo'
			/>
			<form className={styles.form}>
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
				<Link href={'/register'} className={styles.forgotPassword}>
					Забыли пароль?
				</Link>
				<Button text='Войти' color='primary' />
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
