import Spacing from '../Spacing';

export default function Section({
  topMd = '_',
  topLg = '_',
  bottomMd = '_',
  bottomLg = '_',
  children,
  ...props
}) {
  return (
    <section {...props}>
      <Spacing md={topMd} lg={topLg} />
      {children}
      <Spacing md={bottomMd} lg={bottomLg} />
    </section>
  );
}
