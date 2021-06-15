import classes from './style.module.scss';
import Skeleton from '@material-ui/lab/Skeleton';
import { FC } from 'react';

const ProductCardSkeleton: FC = () => {
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Skeleton />
        <Skeleton />
      </div>
      <div className={classes.rate}>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
      <div className={classes.features}>
        <Skeleton variant="rect" height={120} />
      </div>
      <div className={classes.compareOptions}>
        <div>
          <Skeleton />
          <Skeleton />
        </div>
      </div>
      <div>
        <Skeleton />
        <Skeleton />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
