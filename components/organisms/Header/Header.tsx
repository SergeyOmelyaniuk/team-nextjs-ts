import Link from 'next/link';
import styles from './Header.module.scss';

const Header = () => {
	return (
		<header>
			<div className={styles.container}>
				<Link href='/'>
					<a className={styles.logo}>Epam</a>
				</Link>

				<div className={styles.nav}>
					<Link href='/'>
						<a>About company</a>
					</Link>
					<Link href='/employees'>
						<a>Company employees</a>
					</Link>
					{/* <A href={'/'} text='About' /> */}
					{/* <A href={'/employees'} text='Emploees' /> */}
					{/* <A href={'/form'} text='form' /> */}
				</div>
			</div>
		</header>
	);
};

export default Header;
