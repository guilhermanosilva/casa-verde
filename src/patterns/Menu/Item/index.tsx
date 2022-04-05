import { Link } from "components/Link";

type Item = {
  href: string;
  text: string;
  separator?: string;
};

export function Item({ href, text, separator }: Item) {
  return (
    <>
      <li>
        <Link href={href}>{text}</Link>
      </li>
      {separator && <span>{separator}</span>}
    </>
  );
}
