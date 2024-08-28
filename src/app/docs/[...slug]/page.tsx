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
        {params.slug?.map((animal) => (
          <h4>{animal}</h4>
        ))}
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1> Doc With Single Slug Value {params.slug[0]}</h1>;
  }

  return <h1> Docs Page</h1>;
}
