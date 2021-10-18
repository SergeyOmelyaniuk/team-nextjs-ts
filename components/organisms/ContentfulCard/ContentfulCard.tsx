import styles from './ContentfulCard.module.scss';
import Image from 'next/image';

interface ContentfulCardProps {
	//TODO
	aboutCompany: any;
}

const ContentfulCard = ({ aboutCompany }: ContentfulCardProps) => {
	const { title, thumbnail, description } = aboutCompany.fields;
	return (
		<div className={styles.container}>
			<p className={styles.contentful}>Contentful information here</p>
			<Image
				src={'https:' + thumbnail.fields.file.url}
				width={200}
				height={120}
				// width={thumbnail.fields.file.details.image.width}
				// height={thumbnail.fields.file.details.image.height}
			/>
			<p className={styles.title}>{title}</p>
			<p>{description}</p>
		</div>
	);
};

export default ContentfulCard;
