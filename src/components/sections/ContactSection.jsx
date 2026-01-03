import { Section, Container, Button } from '../common';

/**
 * ContactSection - Elegant contact section with minimal design
 */
const ContactSection = () => {
  return (
    <Section dark className="py-24 md:py-32 lg:py-40" id="contact">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal mb-6 text-cream leading-tight">
            Let's collaborate on your next project
          </h2>
          
          <p className="text-cream/70 text-lg md:text-xl mb-12 leading-relaxed">
            Whether you're envisioning a statement wall, a custom canvas, or a complete 
            artistic transformation, we'd love to hear from you.
          </p>
          
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
            {/* Email */}
            <div className="group">
              <div className="text-sage mb-3 flex justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <span className="text-xs tracking-[0.2em] uppercase text-sage/80 block mb-2">
                Email
              </span>
              <a 
                href="mailto:hello@dartstudio.in" 
                className="text-cream hover:text-sage transition-colors duration-300"
              >
                hello@dartstudio.shop
              </a>
            </div>
            
            {/* WhatsApp */}
            <div className="group">
              <div className="text-sage mb-3 flex justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
              </div>
              <span className="text-xs tracking-[0.2em] uppercase text-sage/80 block mb-2">
                WhatsApp
              </span>
              <a 
                href="https://wa.me/919106362797" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream hover:text-sage transition-colors duration-300"
              >
                +91 91063 62797
              </a>
              <br />
              <a 
                href="https://wa.me/919409334763" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream hover:text-sage transition-colors duration-300"
              >
                +91 94093 34763
              </a>
            </div>
            
            {/* Location */}
            {/* <div className="group">
              <div className="text-sage mb-3 flex justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <span className="text-xs tracking-[0.2em] uppercase text-sage/80 block mb-2">
                Location
              </span>
              <span className="text-cream">              </span>
            </div> */}
          </div>
          
          {/* CTA */}
          <Button variant="outline" href="mailto:hello@dartstudio.in">
            Start a Conversation
          </Button>
        </div>
      </Container>
      
      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-cream/10">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-serif text-xl text-cream">
              D Art Studio
            </p>
            <p className="text-cream/50 text-sm">
              © {new Date().getFullYear()} D Art Studio. All rights reserved.
            </p>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default ContactSection;
