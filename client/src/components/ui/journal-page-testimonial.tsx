import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface JournalPageTestimonialProps {
  quote: string;
  author: string;
  role: string;
  date: string;
  index: number;
}

export default function JournalPageTestimonial({
  quote,
  author,
  role,
  date,
  index
}: JournalPageTestimonialProps) {
  const [ref] = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="scroll-reveal journal-page"
    >
      <div className="text-right text-sm text-muted-foreground mb-4">{date}</div>
      <p className="text-base md:text-lg mb-4 leading-relaxed">
        {quote}
      </p>
      <div className="flex justify-end mt-6">
        <div className="text-right">
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
}