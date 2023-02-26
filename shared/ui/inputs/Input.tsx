import classNames from 'classnames/bind';
import { useRef } from 'react';

import { ShowPasswordIcon } from '@shared/ui/inputs/icons/ShowPasswordIcon';
import styles from '@shared/ui/inputs/Input.module.scss';
import { IInputProps } from '@shared/ui/inputs/Input.props';

export const Input: React.FC<IInputProps> = ({
	type,
	placeholder,
	label,
	onChange,
	value
}) => {
	const cx = classNames.bind(styles);

	const inputRef = useRef<HTMLInputElement>(null);

	const showPasswordHandler = () => {
		if (inputRef.current?.type === 'password') {
			inputRef.current.type = 'text';
		} else if (inputRef.current !== null) {
			inputRef.current.type = 'password';
		}
	};

	return (
		<div className={cx('wrapper')}>
			<label className={cx('label')} htmlFor={label}>
				{label}
			</label>
			<input
				id={label}
				required
				type={type}
				placeholder={placeholder}
				className={cx('input')}
				value={value}
				onChange={onChange}
			/>
			{type === 'password' && (
				<ShowPasswordIcon onClick={showPasswordHandler} />
			)}
		</div>
	);
};
