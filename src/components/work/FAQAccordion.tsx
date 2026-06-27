import { useId, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { FAQ } from '../../data/projects'

function FAQItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  return (
    <div className="border-t-2 border-ink first:border-t-0">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="text-base font-medium md:text-lg">{faq.q}</span>
        <span
          aria-hidden="true"
          className="shrink-0 text-xl font-light text-red transition-transform duration-300"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-6 text-sm leading-relaxed text-ink-soft">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  return (
    <div>
      {faqs.map((faq) => (
        <FAQItem key={faq.q} faq={faq} />
      ))}
    </div>
  )
}
