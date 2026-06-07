interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;

  return (
    <div className="max-w-7xl mx-auto py-20">
      <h1 className="text-4xl font-bold capitalize">
        {slug.replace("-", " ")}
      </h1>
    </div>
  );
}