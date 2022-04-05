import NextHead from "next/head";

type Head = {
  title: string;
};

export function Head({ title }: Head) {
  return (
    <NextHead>
      <title>{title}</title>
    </NextHead>
  );
}
