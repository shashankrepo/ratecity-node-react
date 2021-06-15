import { Product } from '../../common';
import CompareFooter from '../../components/CompareFooter';
import CompareGraph from '../../components/CompareGraph';
import ProductList from '../../components/ProductList';
import axios from 'axios';
import { FC, useEffect, useState } from 'react';

const AllProducts: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(12);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [openGraph, setOpenGraph] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const callApi = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `http://localhost:5000?pageSize=${pageSize}&page=${page}`,
        );
        console.log(data.hits);
        setTotalPage(data.meta.pageCount);
        setPage(data.meta.page);
        const results = data.hits.map((p: any) => {
          return {
            id: p.uuid,
            name: p.name,
            companyLogo: p.companyLogo,
            comparisonRate: p.comparisonRate,
            advertisedRate: p.advertisedRate,
            gotoSiteUrl: p.gotoSiteUrl,
            pros: p.pros,
            companyName: p.companyName,
          };
        });
        setProducts(results);
      } catch (error) {
        setError(true);
        console.log(error);
      }
      setLoading(false);
    };

    callApi();
  }, [page, pageSize]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setPage(value);
  };

  const handlePageSize = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPageSize(event.target.value as number);
    setPage(1);
  };

  const handleSelectProduct = (event: any, productId: string) => {
    if (event.target.checked && selectedProducts.length < 6) {
      const index = products.findIndex((p) => p.id === productId);
      const existingProducts = [...selectedProducts, products[index]];
      setSelectedProducts(existingProducts);
    } else if (!event.target.checked) {
      const existingProducts = selectedProducts.filter(
        (p) => p.id !== productId,
      );
      setSelectedProducts(existingProducts);
    }
  };

  const handleOpenGraph = () => {
    if (selectedProducts.length > 0) {
      setOpenGraph(true);
    }
  };

  const handleCloseGraph = () => {
    setSelectedProducts([]);
    setOpenGraph(false);
  };

  if (error) {
    return <h3 style={{ textAlign: 'center' }}>Some Error...</h3>;
  }

  return (
    <div>
      {openGraph && (
        <CompareGraph
          selectedProducts={selectedProducts}
          open={openGraph}
          handleClose={handleCloseGraph}
        />
      )}
      <ProductList
        loading={loading}
        page={page}
        totalPage={totalPage}
        pageSize={pageSize}
        products={products}
        handlePageSize={handlePageSize}
        handlePageChange={handlePageChange}
        selectedProducts={selectedProducts}
        handleSelectProduct={handleSelectProduct}
      />
      {selectedProducts.length > 0 && (
        <CompareFooter
          handleSelectProduct={handleSelectProduct}
          selectedProducts={selectedProducts}
          handleOpenGraph={handleOpenGraph}
        />
      )}
    </div>
  );
};

export default AllProducts;
