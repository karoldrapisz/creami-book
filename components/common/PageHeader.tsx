type Props = {
  title: string;
  subtitle?: string;
};

export default function PageHeader({ title, subtitle }: Props) {
  return (
    <header className="px-5 pt-7">
      <div className="rounded-[2rem] border border-white/70 bg-white/75 p-5 shadow-sm backdrop-blur">
        <h1 className="text-4xl font-black tracking-tight text-zinc-950">
          {title}
        </h1>

        {subtitle ? (
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            {subtitle}
          </p>
        ) : null}
      </div>
    </header>
  );
}