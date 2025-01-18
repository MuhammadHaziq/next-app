import serverSideFunction from "@/utils/serverSideFunction";

export default function ServerRoutePage() {
  console.log("Server Route Page");
  const result = serverSideFunction();
  return (
    <>
      <h1>Server Route Page</h1>
      {result}
    </>
  );
}
