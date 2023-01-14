import Image from 'next/image';
import { useRef } from 'react';

import styles from './Input.module.scss';
import { TInputProps } from './Input.props';

export const Input: React.FC<TInputProps> = ({ type, placeholder, label }) => {
	const inputPasswordRef = useRef<HTMLInputElement>(null);

	const showPasswordHandler = () => {
		if (inputPasswordRef.current?.type === 'password') {
			inputPasswordRef.current.type = 'text';
		} else if (inputPasswordRef.current !== null) {
			inputPasswordRef.current.type = 'password';
		}
	};
	return (
		<div className={styles.wrapper}>
			<label className={styles.label} htmlFor={label}>
				{label}
			</label>
			<input
				id={label}
				required
				type={type}
				placeholder={placeholder}
				className={styles.input}
				ref={inputPasswordRef}
			/>
			{type === 'password' && (
				<Image
					src={'/icons/show-password.svg'}
					width={22}
					height={22}
					alt='show password icon'
					onClick={showPasswordHandler}
				/>
			)}
		</div>
	);
};
