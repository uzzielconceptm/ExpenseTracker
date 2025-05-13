import { useRef } from "react";
import CaseStudyCard from "@/components/ui/case-study-card";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Receipt, CreditCard, Tag, PieChart, Calendar } from "lucide-react";

export default function CaseStudies() {
  const containerRef = useRef<HTMLDivElement>(null);
  
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
        <h3 className="font-medium">Sarah's Expense Dashboard</h3>
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
      
      <div className="mt-4 text-center">
        <Button variant="outline" size="sm">View All Expenses</Button>
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
      
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-muted-foreground">Reimbursable</p>
              <p className="text-2xl font-bold">$2,105.30</p>
            </div>
            <CreditCard className="text-primary" size={24} />
          </div>
          <div className="mt-2 pt-2 border-t border-border">
            <div className="text-xs text-green-600 flex items-center">
              <span className="text-xs">✓</span> All receipts attached
            </div>
          </div>
        </div>
        
        <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-muted-foreground">Tax Deductible</p>
              <p className="text-2xl font-bold">$3,250.50</p>
            </div>
            <Tag className="text-accent" size={24} />
          </div>
          <div className="mt-2 pt-2 border-t border-border">
            <div className="text-xs text-blue-600 flex items-center">
              <span>Report ready for accountant</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Render the dashboard for the content creator
  const CreatorDashboard = () => (
    <div className="p-4 bg-muted/30 rounded-lg">
      <div className="mb-4 flex justify-between items-center">
        <h3 className="font-medium">Alicia's Equipment Tracking</h3>
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
      
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-border">
          <h4 className="font-medium">Latest Purchases</h4>
        </div>
        <div className="divide-y divide-border">
          <div className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">Rode Wireless GO II</p>
                <p className="text-sm text-muted-foreground">Microphone System</p>
              </div>
              <div className="text-right">
                <p className="font-bold">$299.00</p>
                <p className="text-xs text-muted-foreground">April 15, 2023</p>
              </div>
            </div>
            <div className="mt-2 flex items-center text-xs text-green-600">
              <span>✓</span>
              <span className="ml-1">Matched to Amazon order</span>
            </div>
          </div>
          
          <div className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">Godox SL-60W</p>
                <p className="text-sm text-muted-foreground">LED Video Light</p>
              </div>
              <div className="text-right">
                <p className="font-bold">$139.00</p>
                <p className="text-xs text-muted-foreground">March 28, 2023</p>
              </div>
            </div>
            <div className="mt-2 flex items-center text-xs text-green-600">
              <span>✓</span>
              <span className="ml-1">Depreciation schedule created</span>
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
    <section id="cases" className="py-20 bg-muted/30 relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Real-World Success Stories
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            See how different professionals use ExpenseWise to streamline their businesses
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={study.id}
              title={study.title}
              description={study.description}
              image={study.image}
              userProfile={study.userProfile}
              index={index}
            >
              {dashboards[study.id as keyof typeof dashboards]}
            </CaseStudyCard>
          ))}
        </div>
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