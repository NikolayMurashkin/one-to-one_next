import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Header from '../header/Header';
import { TLayoutProps } from './Layout.props';
import styles from './Layout.module.scss';
import { useGetUserQuery } from '../header/api/getUserApiSlice';

export default function Layout({ children }: TLayoutProps) {
	const [user, setUser] = useState<number>();
	useEffect(() => {
		const userIdJson = localStorage.getItem('id');
		if (userIdJson) {
			setUser(userIdJson !== null ? JSON.parse(userIdJson) : {});
		}
		if (localStorage.getItem('id') === null) {
			router.push('/login');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const { data: userData, isLoading } = useGetUserQuery(user);
	const router = useRouter();
	const isAuthPage =
		router.pathname === '/login' || router.pathname === '/register';
	if (isLoading) {
		return <p>Загрузка...</p>;
	}

	return (
		<div>
			{!isAuthPage && <Header />}
			{userData && <div className={styles.wrapper}>{children}</div>}
		</div>
	);
}
