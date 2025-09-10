/** @format */

import { Button } from "@/components/ui/button";


const CallToAction = () => {
  return (
    <section className="bg-blue-300 text-white py-16">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h3 className="text-3xl font-bold mb-4">
          In an emergence? Need help Now?
        </h3>
        <p className="mt-2 mb-2">
          Our Team is Available 24/7 to provide urgent care and immediate
          medical assistance whenever you need it most
        </p>
        <Button>
            Make An Appointment 
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
