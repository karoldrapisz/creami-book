type Props = {
  title: string;
  action?: React.ReactNode;
  children: React.ReactNode;
};

export default function Section({
  title,
  action,
  children,
}: Props) {
  return (
    <section className="px-5 pt-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-black">
          {title}
        </h2>

        {action}
      </div>

      {children}
    </section>
  );
}