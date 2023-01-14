import Head from 'next/head';
import Link from 'next/link';

import styles from './index.module.scss';

const HomePage = () => {
	return (
		<>
			<Head>
				<title>One-To-One</title>
				<meta name='description' content='Interviewing Service' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
			</Head>
			<main className={styles.main}>
				<h1>Home Page</h1>
				<Link href={'/login'}>Login</Link>
				<Link href={'/register'}>Register</Link>
				<Link href={'/interview'}>Find Interview</Link>
			</main>
		</>
	);
};

export default HomePage;

// export function getStaticProps() {
// 	return
// }
