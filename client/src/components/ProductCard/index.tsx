import { Product } from '../../common';
import ProductPros from '../ProductPros';
import classes from './style.module.scss';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

interface ProductCardProps {
  product: Product;
  disabled: boolean;
  checked: boolean;
  handleSelectProduct: (
    event: React.ChangeEvent<HTMLInputElement>,
    productId: string,
  ) => void;
}

const ProductCard: FC<ProductCardProps> = ({
  product,
  disabled,
  checked,
  handleSelectProduct,
}) => {
  const {
    id,
    name,
    companyLogo,
    comparisonRate,
    advertisedRate,
    gotoSiteUrl,
    pros,
  } = product;
  return (
    <div className={classes.root}>
      <div className={classes.title}>{name}</div>
      <div className={classes.rate}>
        <div>
          <div>Advertised Rate</div>
          <div className={classes.interestRate}>
            {advertisedRate} <span className={classes.percentage}>%</span>{' '}
          </div>
        </div>
        <div>
          <div>Comparison Rate</div>
          <div className={classes.interestRate}>
            {comparisonRate} <span className={classes.percentage}>%</span>{' '}
          </div>
        </div>
      </div>
      <div className={classes.features}>
        {pros.map((p: string, index: number) => (
          <ProductPros key={index} content={p} />
        ))}
      </div>
      <div className={classes.compareOptions}>
        <div className={classes.compare}>
          <input
            type="checkbox"
            id={id}
            name={id}
            checked={checked}
            disabled={disabled}
            onChange={(e) => handleSelectProduct(e, id)}
          />
          <label htmlFor={id}>Compare</label>
        </div>
        <div className={classes.linkText}>More information</div>
      </div>
      <div className={classes.moreInfo}>
        <img alt="company-name" src={companyLogo} />
        <a
          href={gotoSiteUrl}
          rel="noreferrer"
          target="_blank"
          className={classes.btn}
        >
          Go to Site <FontAwesomeIcon icon={faArrowCircleRight} size={'sm'} />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
