import CardAssociation from '../CardAssociation';
import styles from './AssociationsList.module.scss';
import { dataAssociation } from '../mocks';

const AssociationsList = () => {
  return (
    <div className={styles.list}>
      {dataAssociation.map((associationsItem) => (
        <CardAssociation
          key={`card_${new Date().getTime()}`}
          item={associationsItem}
        />
      ))}
    </div>
  );
};

export default AssociationsList;
