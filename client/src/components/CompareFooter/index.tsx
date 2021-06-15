import { FC } from 'react';
import classes from './style.module.scss';

import { Product } from '../../common';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

interface CompareFooterProps {
  selectedProducts: Product[];
  handleOpenGraph: () => void;
  handleSelectProduct: (event: any, productId: string) => void;
}

const CompareFooter: FC<CompareFooterProps> = ({
  selectedProducts,
  handleSelectProduct,
  handleOpenGraph,
}) => {
  return (
    <div className={classes.root}>
      <div className={classes.card}>
        {selectedProducts.map((product) => (
          <div key={product.id} className={classes.product}>
            <FontAwesomeIcon
              className={classes.icon}
              onClick={(e) => handleSelectProduct(e, product.id)}
              icon={faTimesCircle}
              size={'lg'}
            />
            <img alt={product.name} src={product.companyLogo} />
          </div>
        ))}
        {Array.from(Array(5 - selectedProducts.length).keys()).map((p) => (
          <div key={p} className={classes.product}></div>
        ))}
      </div>
      <button
        disabled={selectedProducts.length > 1 ? false : true}
        className={classes.btn}
        onClick={handleOpenGraph}
      >
        Smart Compare
      </button>
    </div>
  );
};

export default CompareFooter;
