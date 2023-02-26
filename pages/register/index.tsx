import styles from './index.module.scss';
import { RegisterForm } from '@features/index';
import { LogoIcon } from '@shared/ui/icons/LogoIcon';

const RegisterPage = () => {

	return (
		<div className={styles.login}>
			<LogoIcon />
			<RegisterForm />
		</div>
	);
};

export default RegisterPage;
