"use client";
import React, { useState, useEffect } from "react";
import { ProductItem, FilterProps } from "@/Types";
import ProductCard from "@/components/ProductCard";
import Banner from "@/components/Banner";
import Filter from "@/components/Filter";
import { Loading } from "@/components/Loader";
import FailedLoading from "@/components/FailedLoading";
import EmptyProductList from "@/components/EmptyProductList";
import EmptyFilterProductList from "@/components/EmptyFilterProductList";
import { SORT_KEYS, PRICE_RANGE } from "@/constant";

const ProductList = () => {
  const [itemsList, setItemsList] = useState<ProductItem[]>([]);
  const [currnetItemList, setCurrnetItemList] = useState<ProductItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoadingError, setIsLoadingError] = useState<boolean>(false);
  const [filter, setFilter] = useState<FilterProps>({
    name: "",
    rangePrice: PRICE_RANGE,
    sort: "",
  });

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    handleFilter();
  }, [filter]);

  const getProducts = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/women's clothing"
      );
      const result = await response.json();
      setItemsList(result);
      setCurrnetItemList(result);
    } catch (error) {
      setIsLoadingError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFilter = () => {
    const filteredData = itemsList.filter(
      (product) =>
        product.title.toLowerCase().includes(filter.name.toLowerCase()) &&
        product.price >= filter.rangePrice[0] &&
        product.price <= filter.rangePrice[1]
    );
    let result = handleSorting(filter.sort, filteredData);
    if (filteredData) setCurrnetItemList(result);
    else {
      setCurrnetItemList(itemsList);
    }
  };

  const handleSorting = (
    key: string,
    filteredData: ProductItem[]
  ): ProductItem[] => {
    let result: ProductItem[] = [];

    switch (key) {
      case SORT_KEYS.price_ascending:
        result = filteredData.sort((a, b) => a.price - b.price);
        break;

      case SORT_KEYS.price_descending:
        result = filteredData.sort((a, b) => b.price - a.price);
        break;

      case SORT_KEYS.name_A_Z:
        result = filteredData.sort((a, b) => a.title.localeCompare(b.title));
        break;

      case SORT_KEYS.name_Z_A:
        result = filteredData.sort((a, b) => b.title.localeCompare(a.title));
        break;

      default:
        result = filteredData;
    }
    return result;
  };

  if (isLoadingError) return <FailedLoading />;

  return (
    <div className=" px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* product list banner  */}
      <Banner />
      {isLoading ? (
        <div className=" flex items-center justify-center mt-20">
          <Loading />
        </div>
      ) : (
        <>
          {/* product filter  */}
          <Filter setFilter={setFilter} />
          {/* empty views  */}
          {itemsList.length === 0 && <EmptyProductList />}
          {itemsList.length > 0 && currnetItemList.length === 0 && (
            <EmptyFilterProductList />
          )}

          {/* product list cards  */}
          <div className="mt-12 gap-x-8 gap-y-16 grid  lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 ">
            {currnetItemList?.map((product: ProductItem, productIndex) => {
              return <ProductCard product={product} key={product.id} />;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductList;
