import { useRef } from "react";
import { motion } from "framer-motion";
import CaseStudyCard from "@/components/ui/case-study-card";
import StickyNoteTestimonial from "@/components/ui/sticky-note-testimonial";
import { Button } from "@/components/ui/button";
import { Receipt, CreditCard, Tag, PieChart, Calendar } from "lucide-react";
import Logo from "@/assets/logo";

export default function CombinedSuccessStories() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Testimonial data in first-person format
  const stickyTestimonials = [
    {
      quote: "I stopped dreading tax time! My accountant actually said I have the most organized records of any client.",
      author: "Sarah J.",
      role: "Freelance Designer"
    },
    {
      quote: "ExpenseWise saves me 3+ hours a week. That's time I can spend with clients instead of sorting receipts.",
      author: "Marcus T.",
      role: "Marketing Consultant"
    },
    {
      quote: "No more lost deductions! I found $4,200 in legitimate business expenses I would have missed otherwise.",
      author: "Alicia R.",
      role: "Content Creator"
    }
  ];
  


  // Case study data
  const caseStudies = [
    {
      id: "case-1",
      title: "Streamlined Freelance Design",
      description: "How Sarah automated her client expenses",
      image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
      userProfile: {
        name: "Sarah",
        role: "UI/UX Designer"
      }
    },
    {
      id: "case-2",
      title: "Consulting Without Chaos",
      description: "Marcus simplified his travel expense tracking",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
      userProfile: {
        name: "Marcus",
        role: "Marketing Consultant"
      }
    },
    {
      id: "case-3",
      title: "Content Creation Simplified",
      description: "How Alicia tracks equipment purchases",
      image: "https://images.unsplash.com/photo-1593697972426-2779bcff688c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
      userProfile: {
        name: "Alicia",
        role: "Content Creator"
      }
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
      
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-border">
          <h4 className="font-medium">Recent Transactions</h4>
        </div>
        <div className="p-0">
          <table className="w-full text-sm">
            <thead className="bg-muted/30">
              <tr>
                <th className="px-4 py-2 text-left font-medium">Merchant</th>
                <th className="px-4 py-2 text-left font-medium">Date</th>
                <th className="px-4 py-2 text-left font-medium">Category</th>
                <th className="px-4 py-2 text-right font-medium">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Adobe Creative Cloud</td>
                <td className="px-4 py-3">May 15</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-secondary/30 text-secondary-foreground text-xs rounded-full">Software</span>
                </td>
                <td className="px-4 py-3 text-right font-medium">$52.99</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">WeWork Hot Desk</td>
                <td className="px-4 py-3">May 10</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Workspace</span>
                </td>
                <td className="px-4 py-3 text-right font-medium">$150.00</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Client Lunch - Acme Co</td>
                <td className="px-4 py-3">May 8</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-accent/30 text-accent-foreground text-xs rounded-full">Meals</span>
                </td>
                <td className="px-4 py-3 text-right font-medium">$83.75</td>
              </tr>
            </tbody>
          </table>
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
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Receipt className="text-primary mr-2" size={16} />
                <span>Taxi & Uber rides</span>
              </div>
              <span className="font-medium">$95.50</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Receipt className="text-primary mr-2" size={16} />
                <span>Client dinner</span>
              </div>
              <span className="font-medium">$210.75</span>
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
              <i className="fas fa-camera text-accent"></i>
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
            <div className="flex justify-between text-sm">
              <span>Audio</span>
              <span>$1,000.00</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-muted-foreground">Depreciation Schedule</p>
              <p className="text-2xl font-bold">$1,441.67</p>
            </div>
            <div className="p-2 rounded-full bg-primary/10">
              <i className="fas fa-chart-line text-primary"></i>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-border">
            <div className="bg-muted/30 rounded-lg p-3">
              <div className="text-sm mb-2">Sony A7 IV Camera</div>
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: '65%' }}></div>
              </div>
              <div className="flex justify-between text-xs mt-1">
                <span>Purchase: $2,500</span>
                <span>Remaining: $875</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Match dashboards to case studies
  const dashboards = {
    "case-1": <DesignerDashboard />,
    "case-2": <ConsultantDashboard />,
    "case-3": <CreatorDashboard />
  };

  return (
    <section id="success-stories" className="py-20 bg-muted/30 relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Real people, real results with ExpenseWise
          </p>
        </div>
        
        {/* Combined sticky notes and case studies in a more compact layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 order-2 lg:order-1">
            {/* Featured Case Study - larger size */}
            <div className="mb-8">
              <CaseStudyCard
                title={caseStudies[0].title}
                description={caseStudies[0].description}
                image={caseStudies[0].image}
                userProfile={caseStudies[0].userProfile}
                index={0}
              >
                {dashboards[caseStudies[0].id as keyof typeof dashboards]}
              </CaseStudyCard>
            </div>
            
            {/* Two smaller case studies in a row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudies.slice(1, 3).map((study, index) => (
                <div key={study.id} className="h-full">
                  <CaseStudyCard
                    title={study.title}
                    description={study.description}
                    image={study.image}
                    userProfile={study.userProfile}
                    index={index + 1}
                  >
                    {dashboards[study.id as keyof typeof dashboards]}
                  </CaseStudyCard>
                </div>
              ))}
            </div>
          </div>
          
          {/* Testimonials column */}
          <div className="lg:col-span-1 order-1 lg:order-2">
            <div className="space-y-6">

              
              {/* Sticky notes */}
              <div className="space-y-4">
                {stickyTestimonials.map((testimonial, index) => (
                  <StickyNoteTestimonial
                    key={index}
                    quote={testimonial.quote}
                    author={testimonial.author}
                    role={testimonial.role}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Visual elements */}
        <motion.div
          className="absolute top-10 left-10 w-16 h-16 bg-secondary rounded-full opacity-10"
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
      
      {/* Easter egg */}
      <div 
        className="absolute -bottom-12 -right-12 w-24 h-24 rounded-full bg-accent cursor-pointer hidden md:block"
        style={{ opacity: 0.1 }}
        onClick={() => {
          alert('"The best investment you can make is in reducing your admin overhead." - Anonymous Entrepreneur');
        }}
      />
    </section>
  );
}