import Link from 'next/link';

interface AProps {
	//TODO
	text: any;
	href: any;
}

const A = ({ text, href }: AProps) => {
	return (
		<Link href={href}>
			<a>{text}</a>
		</Link>
	);
};

export default A;
