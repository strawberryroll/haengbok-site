import Divider from './Divider';

export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col gap-5 bg-cream-light py-13">
      <p className="text-xs font-semibold text-cream">{eyebrow || 'EYEBROW'}</p>
      <h2 className="text-4xl font-bold">{title || '제목'}</h2>
      <Divider />
      <p className="text-lg text-description">{description || '설명'}</p>
    </div>
  );
}
