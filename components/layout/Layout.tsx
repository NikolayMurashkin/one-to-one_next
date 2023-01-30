import { useRouter } from 'next/router';

import Header from '../header/Header';
import { TLayoutProps } from './Layout.props';
import styles from './Layout.module.scss';

export default function Layout({ children }: TLayoutProps) {
	const router = useRouter();
	const isAuthPage =
		router.pathname === '/login' || router.pathname === '/register';

	return (
		<div>
			{!isAuthPage && <Header />}
			<div className={styles.wrapper}>{children}</div>
		</div>
	);
}
