import { useRouter } from 'next/router';
import MainContainer from '../../components/MainContainer';

const Employee = () => {
	const { query } = useRouter();
	return (
		<MainContainer>
			<h1>Пользователь {query.id}</h1>
		</MainContainer>
	);
};

export default Employee;
