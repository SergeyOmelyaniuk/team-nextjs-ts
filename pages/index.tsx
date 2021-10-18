import type { NextPage } from 'next'; //???????????????????????
import Htag from '../components/atoms/Htag';
import MainContainer from '../components/MainContainer';
import { createClient } from 'contentful';
import ContentfulCard from '../components/organisms/ContentfulCard';

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	});
	const res = await client.getEntries({ content_type: 'aboutCompany' });
	return {
		props: {
			aboutCompany: res.items,
		},
	};
}

//TODO
const Home: NextPage = ({ aboutCompany }: any) => {
	console.log(aboutCompany);
	return (
		<MainContainer title='My team'>
			<Htag tag='h1'>About company</Htag>
			<ContentfulCard aboutCompany={aboutCompany[0]} />
		</MainContainer>
	);
};

export default Home;
