import { FC } from 'react';
import classes from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

interface ProductProsProps {
  content: string;
}

const ProductPros: FC<ProductProsProps> = ({ content }) => {
  return (
    <div className={classes.root}>
      <div>
        <FontAwesomeIcon icon={faCheck} size={'sm'} />
      </div>
      <div className={classes.text}>{content}</div>
    </div>
  );
};

export default ProductPros;
