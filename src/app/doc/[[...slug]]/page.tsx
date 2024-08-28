export default function docPages({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  if (params.slug?.length === 2) {
    return (
      <h1>
        Doc With Multiple Slugs{" "}
        {params.slug?.map((param) => (
          <h4 key={param}>{param}</h4>
        ))}
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1> Doc With Single Slug Value {params.slug[0]}</h1>;
  }

  return <h1> Doc Page</h1>;
}
