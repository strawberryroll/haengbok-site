export default function PageHeader({
  title,
  eyebrow,
  description,
}: {
  title?: string;
  eyebrow?: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-5 bg-cream-light py-13">
      <p className="text-xs font-semibold text-cream">
        {eyebrow || 'SUBTITLE'}
      </p>
      <h2 className="text-4xl font-bold">{title || '제목'}</h2>
      <div className="w-8 border-t-2 text-cream" />
      <p className="text-lg text-description">{description || '설명'}</p>
    </div>
  );
}
