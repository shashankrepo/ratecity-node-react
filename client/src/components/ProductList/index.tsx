import { Product } from '../../common';
import ProductCard from '../ProductCard';
import ProductCardSkeleton from '../ProductCardSkeleton';
import SelectOption from '../SelectOption';
import classes from './style.module.scss';
import Pagination from '@material-ui/lab/Pagination';
import { FC } from 'react';

interface ProductProps {
  loading: boolean;
  page: number;
  totalPage: number;
  pageSize: number;
  products: Product[];
  selectedProducts: Product[];
  handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  handlePageSize: (
    event: React.ChangeEvent<{
      value: unknown;
    }>,
  ) => void;
  handleSelectProduct: (
    event: React.ChangeEvent<HTMLInputElement>,
    productId: string,
  ) => void;
}

const ProductList: FC<ProductProps> = ({
  loading,
  page,
  totalPage,
  pageSize,
  products,
  selectedProducts,
  handlePageSize,
  handlePageChange,
  handleSelectProduct,
}) => {
  return (
    <div className={classes.root}>
      <div className={classes.selectOption}>
        <SelectOption pageSize={pageSize} handleChange={handlePageSize} />
      </div>
      {totalPage > 0 && (
        <div className={classes.pagination}>
          <Pagination
            page={page}
            count={totalPage}
            variant="outlined"
            shape="rounded"
            onChange={handlePageChange}
          />
        </div>
      )}
      <div className={classes.products}>
        {!loading &&
          products.map((product: Product) => {
            const index = selectedProducts.findIndex(
              (p) => p.id === product.id,
            );
            return (
              <ProductCard
                key={product.id}
                product={product}
                handleSelectProduct={handleSelectProduct}
                disabled={index < 0 && selectedProducts.length > 4}
                checked={index > -1}
              />
            );
          })}
        {loading && (
          <>
            {Array.from(Array(pageSize).keys()).map((p) => (
              <ProductCardSkeleton key={p} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductList;
