/** Check After Uncomment this in JSON server Termianl
 *  When we add this line in start of server component then it will cache the data rather the
 *  no-store request
 *
 */
// export const fetchCache = "default-cache";

import { cookies } from "next/headers";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
};

/**
 *  Data Fetch Cache
 * By data get api data cache in .next/cache folder and it will be used when we call the same api again
 * if we use no-store then it will not cache the data
 * if we use default-cache then it will cache the data execpt where we use cache:no-store
 * if we use custome function such as cookies, header, searchparems then it will not cache the data
 * API Call (it's cache by default)
 * Custom Function call
 * API Call (it's not cache due to above custome function)
 *
 */

export default async function ProductPage() {
  /** This API Response is cached because it's called before no-store */
  // const responseDetail = await fetch("http://localhost:3001/products/1");
  const response = await fetch("http://localhost:3001/products", {
    /** If we set cache = no-store then fetch send request for data every time when user load the page
     * no-store un cache the all subsequent fetch requests
     * please verify by comment the cache and check in json server terminal
     */
    // cache: "no-store",
  });

  /** Comment This and see difference */
  const cookiesStore = cookies();
  cookiesStore.get("theme");

  /** This API Response is not cached because it's subsequent of no-store */
  const responseDetail1 = await fetch("http://localhost:3001/products/1");
  const products: Product[] = await response.json();
  return (
    <ul className="space-y-4 p-4">
      {products.map((product: Product) => (
        <li
          key={product.id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-700"
        >
          <h2 className="text-xl font-semibold">{product.title}</h2>
          <p>{product.description}</p>
          <p className="text-lg font-medium">${product.price}</p>
        </li>
      ))}
    </ul>
  );
}
