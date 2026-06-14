import { Church } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center gap-5 bg-charcoal px-5 py-10">
      <div className="flex items-center gap-3 text-white">
        <Church size={20} />
        <h1 className="text-lg">행복한 교회</h1>
      </div>
      <div className="flex flex-col gap-2 border-b border-white/15 pb-10 text-sm text-white/55">
        <p>인천광역시 미추홀구 매소홀로 374</p>
        <p>032-875-8520</p>
      </div>
      <div className="text-sm text-white/35">
        <p>© 2026 행복한 교회. All rights reserved.</p>
      </div>
    </footer>
  );
}
