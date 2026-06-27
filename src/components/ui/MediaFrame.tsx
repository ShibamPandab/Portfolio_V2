/**
 * Placeholder for a project screenshot. Deliberately styled as a
 * print registration frame rather than a broken image or stock
 * photo — reads as "visual pending," on-brand, and swappable for
 * a real <img> once screenshots are available.
 */
export function MediaFrame({ label }: { label: string }) {
  return (
    <div className="relative aspect-[4/3] w-full border-2 border-ink bg-cream-dim md:aspect-[16/11]">
      {['-top-1 -left-1', '-top-1 -right-1', '-bottom-1 -left-1', '-bottom-1 -right-1'].map(
        (pos) => (
          <span
            key={pos}
            className={`absolute h-3 w-3 border-ink ${pos} ${
              pos.includes('top') ? 'border-t-2' : 'border-b-2'
            } ${pos.includes('left') ? 'border-l-2' : 'border-r-2'}`}
          />
        ),
      )}
      <div className="flex h-full w-full flex-col items-center justify-center gap-2">
        <span className="eyebrow text-ink-soft">Visual Pending</span>
        <span className="text-sm text-ink-soft/90">{label}</span>
      </div>
    </div>
  )
}
