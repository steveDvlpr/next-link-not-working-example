import Link from "next/link";

export default function ArticleOverview() {
  return (
    <>
      <h1>
        You are on the <i>Article</i> page.
      </h1>
      <h2 className="mt-4 text-lg">Some articles:</h2>
      <div className="flex flex-col justify-center items-center">
        <Link href="/article/some-article-from-2022">
          Some article from 2022 (click me)
        </Link>
        <Link href="/article/another-article-from-2023">
          Another article from 2023 (click me)
        </Link>
        <Link href="/article/again-some-article-from-2024">
          Again some article from 2024 (click me)
        </Link>
      </div>
    </>
  );
}
