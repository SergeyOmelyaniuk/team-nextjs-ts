import MainContainer from '../components/MainContainer';
import { useState } from 'react';
import Htag from '../components/atoms/Htag';

const Employees = () => {
	// const [users, setUsers] = useState([
	// 	{ id: 1, name: 'Serhei' },
	// 	{ id: 2, name: 'Ihar' },
	// ]);
	return (
		<MainContainer title='Employees'>
			<Htag tag='h1'>Company employees</Htag>
			{/* <ul>
				{users.map((user) => {
					return (
						<li key={user.id}>
							<A href={`/employees/${user.id}`} text={user.name} />
						</li>
					);
				})}
			</ul> */}
		</MainContainer>
	);
};

export default Employees;
