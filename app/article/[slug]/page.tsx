export default function ArticleSlug({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return (
    <h1>
      You are on the <i>Article</i> page for the article with slug <i>{slug}</i>
      .
    </h1>
  );
}
