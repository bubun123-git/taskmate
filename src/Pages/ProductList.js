import { useLocation, useSearchParams } from "react-router-dom";

export const ProductList = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  console.log(location);

  return <div>ProductList</div>;
};
