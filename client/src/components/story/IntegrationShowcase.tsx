import { motion } from "framer-motion";
import Logo from "@/assets/logo";

export default function IntegrationShowcase() {
  return (
    <section id="integrations" className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <Logo variant="full" size="md" colorMode="light" className="h-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}