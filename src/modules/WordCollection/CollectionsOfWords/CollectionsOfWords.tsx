import styles from './CollectionsOfWords.module.scss';
import { SectionTitle } from '@/components/ui/SectionTitle';
import SvgIconCollections from '@assets/icons/icon_collections.svg?react';
import ListCardCollection from '../ListCardCollection';
import CustomLink from '@/components/ui/CustomLink';

const CollectionsOfWords = () => {
	return (
		<div className={styles.collection}>
			<div className={styles.header}>
				<SectionTitle theme="bold" className={styles.title}>
					<SvgIconCollections />
					Коллекции с этим словом
				</SectionTitle>
				<CustomLink href="#" target="_blank" apperance="button">
					Все коллекции&nbsp;
					<span className={styles.count}>15</span>
				</CustomLink>
			</div>
			<ListCardCollection />
		</div>
	);
};

export default CollectionsOfWords;
