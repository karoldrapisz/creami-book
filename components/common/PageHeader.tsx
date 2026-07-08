type Props = {
  title: string;
  subtitle?: string;
};

export default function PageHeader({ title, subtitle }: Props) {
  return (
    <header className="px-5 pt-6">
      <h1 className="text-4xl font-black tracking-tight">{title}</h1>
      {subtitle ? <p className="mt-2 text-sm text-zinc-600">{subtitle}</p> : null}
    </header>
  );
}
