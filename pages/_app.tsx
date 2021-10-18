import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>_app.tsx</title>
				<link rel='icon' href='/favicon.ico' />
				{/* Include fonts Open Sans */}
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap'
					rel='stylesheet'
				></link>
			</Head>
			<Component {...pageProps} />
		</>
	);
}
export default MyApp;
