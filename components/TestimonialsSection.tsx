import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const testimonials = [
  {
    name: 'Emma Clarkson',
    position: 'CEO at GlobalVision',
    testimonial: 'FortuneConnect has been the backbone of our operational success. It has transformed the way we handle our workflows, allowing us to grow faster than ever.',
    logo: 'https://media.istockphoto.com/id/1540210279/photo/efficient-factory-management-portrait-of-smiling-senior-manager-businessman-or-ceo-in.webp?a=1&b=1&s=612x612&w=0&k=20&c=CBLK3nBszAXlo4JRyUY9426rvML2hTLEafwq1Py87p8=',
  },
  {
    name: 'Michael Andrews',
    position: 'CTO at Innovex Labs',
    testimonial: 'The platform’s intuitive interface and automation tools have significantly boosted our productivity. FortuneConnect is a game-changer for tech-driven businesses.',
    logo: 'https://images.unsplash.com/photo-1637684666587-91e51b10a555?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fENFT3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    name: 'Olivia Reynolds',
    position: 'Founder of BrightStart',
    testimonial: 'FortuneConnect is the only platform that gives us the agility we need. The insights we gain help us make smarter, data-driven decisions every day.',
    logo: 'https://plus.unsplash.com/premium_photo-1661765873819-2dd94bd32016?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Liam Nelson',
    position: 'Head of Marketing at NovaTech',
    testimonial: 'Their customer support is unparalleled. Every time we faced an issue, the team was responsive and proactive. We are loyal clients for a reason!',
    logo: 'https://images.unsplash.com/photo-1559192823-e1d8e87def54?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Sophia Blake',
    position: 'Product Lead at Vertex Systems',
    testimonial: 'The level of innovation and attention to detail we’ve seen from FortuneConnect has been instrumental in reducing our product development cycles by half.',
    logo: 'https://plus.unsplash.com/premium_photo-1661762742902-11e0bbc0b863?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-12">What Our Clients Are Saying</h3>
        <div className="flex justify-center items-center">
          <Carousel className="w-full max-w-2xl bg-white shadow-lg rounded-lg">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="flex space-x-4">
                  <div className="flex-1 p-6">
                    <img
                      src={testimonial.logo}
                      alt={testimonial.name}
                      className="mx-auto h-24 w-24 rounded-full border-4 border-gray-300 shadow-md"
                    />
                    <div className="text-center mt-6">
                      <p className="text-xl font-semibold text-gray-800">
                        {testimonial.name}, {testimonial.position}
                      </p>
                      <p className="text-gray-600 mt-4 text-sm">
                        "{testimonial.testimonial}"
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-between items-center mt-4">
              <CarouselPrevious className="text-gray-600 hover:text-gray-900" />
              <CarouselNext className="text-gray-600 hover:text-gray-900" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
