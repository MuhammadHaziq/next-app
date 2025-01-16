/** build and check difference in static and dynamic renderning */
import { cookies } from "next/headers";
export default function DynamicRenderning() {
  const theme = cookies().get("theme");
  console.log(theme);
  return <h1>Dynamic Renderning {new Date().toLocaleString()}</h1>;
}
