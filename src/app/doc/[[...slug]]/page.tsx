import { Metadata } from "next";

type Props = {
  params: {
    slug: string[];
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `${params?.slug?.join(" ")}`,
  };
};

export default function docPages({ params }: Props) {
  if (params.slug?.length === 2) {
    return (
      <h1>
        Doc With Multiple Slugs{" "}
        {params.slug?.map((param) => (
          <p key={param}>{param}</p>
        ))}
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1> Doc With Single Slug Value {params.slug[0]}</h1>;
  }

  return <h1> Doc Page</h1>;
}
