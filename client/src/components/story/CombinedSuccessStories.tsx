import { useRef } from "react";
import { motion } from "framer-motion";
import ModernTestimonial, { TestimonialData } from "@/components/ui/modern-testimonial";
import { Receipt, CreditCard, Tag, PieChart, Calendar } from "lucide-react";
import Logo from "@/assets/logo";

export default function CombinedSuccessStories() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Testimonial data in first-person format
  const testimonials: TestimonialData[] = [
    {
      id: "testimonial-1",
      quote: "I stopped dreading tax time! My accountant actually said I have the most organized records of any client.",
      author: "Sarah J.",
      role: "Freelance Designer"
    },
    {
      id: "testimonial-2",
      quote: "ExpenseWise saves me 3+ hours a week. That's time I can spend with clients instead of sorting receipts.",
      author: "Marcus T.",
      role: "Marketing Consultant"
    },
    {
      id: "testimonial-3",
      quote: "No more lost deductions! I found $4,200 in legitimate business expenses I would have missed otherwise.",
      author: "Alicia R.",
      role: "Content Creator"
    }
  ];

  // Render the dashboard for the case study
  const DesignerDashboard = () => (
    <div className="p-4 bg-muted/30 rounded-lg">
      <div className="mb-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Logo variant="icon" size="sm" colorMode="light" className="h-5 w-5" />
          <h3 className="font-medium">Sarah's Expense Dashboard</h3>
        </div>
        <div className="text-sm text-muted-foreground">May 2023</div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-muted-foreground">Monthly Expenses</p>
              <p className="text-2xl font-bold">$2,450</p>
            </div>
            <PieChart className="text-primary" size={24} />
          </div>
          <div className="mt-2 pt-2 border-t border-border">
            <div className="text-xs text-green-600 flex items-center">
              <span className="text-xs">✓</span> 100% Tracked
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-muted-foreground">By Client</p>
              <p className="text-2xl font-bold">4 Clients</p>
            </div>
            <Tag className="text-secondary" size={24} />
          </div>
          <div className="mt-2 pt-2 border-t border-border">
            <div className="text-xs flex justify-between">
              <span>Acme Co</span>
              <span className="font-medium">$1,200</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-muted-foreground">Next Tax Payment</p>
              <p className="text-2xl font-bold">June 15</p>
            </div>
            <Calendar className="text-accent" size={24} />
          </div>
          <div className="mt-2 pt-2 border-t border-border">
            <div className="text-xs text-primary flex items-center">
              <span>Estimated: $620</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Render the dashboard for the case study
  const ConsultantDashboard = () => (
    <div className="p-4 bg-muted/30 rounded-lg">
      <div className="mb-4 flex justify-between items-center">
        <h3 className="font-medium">Marcus's Travel Expenses</h3>
        <div className="text-sm text-muted-foreground">Last 30 Days</div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-4">
        <div className="p-4 border-b border-border">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-muted-foreground">Chicago Client Visit</p>
              <p className="font-bold">May 5-8, 2023</p>
            </div>
            <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
              Reconciled
            </div>
          </div>
        </div>
        
        <div className="p-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Receipt className="text-primary mr-2" size={16} />
                <span>United Airlines</span>
              </div>
              <span className="font-medium">$342.00</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Receipt className="text-primary mr-2" size={16} />
                <span>Hilton Hotel (3 nights)</span>
              </div>
              <span className="font-medium">$630.00</span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-border flex justify-between items-center">
            <span className="font-bold">Trip Total</span>
            <span className="font-bold">$1,278.25</span>
          </div>
        </div>
      </div>
    </div>
  );

  // Render the dashboard for the content creator
  const CreatorDashboard = () => (
    <div className="p-4 bg-muted/30 rounded-lg">
      <div className="mb-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Logo variant="icon" size="sm" colorMode="light" className="h-5 w-5" />
          <h3 className="font-medium">Alicia's Equipment Tracking</h3>
        </div>
        <div className="text-sm text-muted-foreground">2023 YTD</div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-muted-foreground">Equipment Expenses</p>
              <p className="text-2xl font-bold">$4,325.00</p>
            </div>
            <div className="p-2 rounded-full bg-accent/10">
              <CreditCard className="text-accent" size={18} />
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-border space-y-2">
            <div className="flex justify-between text-sm">
              <span>Camera Gear</span>
              <span>$2,450.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Lighting</span>
              <span>$875.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Match dashboards to testimonials
  const dashboards = [
    <DesignerDashboard key="dashboard-1" />,
    <ConsultantDashboard key="dashboard-2" />,
    <CreatorDashboard key="dashboard-3" />
  ];

  return (
    <section id="success-stories" className="py-24 relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real People. Real Results.
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            See how ExpenseWise transformed their business
          </p>
        </div>
        
        {/* Modern testimonial with avatar navigation */}
        <div className="max-w-6xl mx-auto mb-16">
          <ModernTestimonial testimonials={testimonials} />
        </div>
        
        {/* Visual elements */}
        <motion.div
          className="absolute top-20 left-10 w-16 h-16 bg-secondary rounded-full opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div
          className="absolute -bottom-10 -right-10 w-20 h-20 bg-primary rounded-full opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 5,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
    </section>
  );
}