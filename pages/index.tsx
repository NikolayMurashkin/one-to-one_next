import Head from 'next/head';

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
			<main>
				<h1>Home Page</h1>
			</main>
		</>
	);
};

export default HomePage;

// export function getStaticProps() {
// 	return
// }