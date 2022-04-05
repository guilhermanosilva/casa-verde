type Link = {
  children: React.ReactNode;
  href: string;
};

export function Link({ children, href }: Link) {
  return <a href={href}>{children}</a>;
}
