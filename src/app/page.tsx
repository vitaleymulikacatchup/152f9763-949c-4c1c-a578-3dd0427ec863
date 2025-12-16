"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplitGlobe from '@/components/sections/hero/HeroSplitGlobe';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import FeatureCardFifteen from '@/components/sections/feature/FeatureCardFifteen';
import TestimonialCardEleven from '@/components/sections/testimonial/TestimonialCardEleven';
import SocialProofThree from '@/components/sections/socialProof/SocialProofThree';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Sparkles, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="small"
      sizing="mediumSizeExtraLargeTitles"
      background="radialGradient"
      cardStyle="elevated-accent-light"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="outline"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple 
          brandName="One Game"
          navItems={[
            {"name": "Products", "id": "products"},
            {"name": "About", "id": "about"},
            {"name": "Features", "id": "features"},
            {"name": "Contact", "id": "contact"}
          ]}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroSplitGlobe
          title="Welcome to One Game"
          description="Discover the finest collection of toys and games that bring joy to children of all ages. From educational toys to exciting games, we have everything to spark imagination and create magical moments."
          tag="Toy Store"
          tagIcon={Sparkles}
          buttons={[
            {"text": "Shop Now", "href": "products"},
            {"text": "Learn More", "href": "about"}
          ]}
          imagePosition="right"
          className="w-full"
          containerClassName="py-20"
          titleClassName="text-5xl font-bold"
          descriptionClassName="text-lg"
        />
      </div>
      
      <div id="products" data-section="products">
        <ProductCardFour
          title="Featured Toys & Games"
          description="Explore our handpicked collection of popular toys and games loved by families everywhere."
          tag="Best Sellers"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
          gridVariant="uniform-all-items-equal"
          carouselMode="buttons"
          products={[
            {
              "id": "1",
              "name": "Classic Action Figure Set",
              "price": "$24.99",
              "variant": "Multi-pack with 5 figures",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765903001163-bslb3qn1.png",
              "imageAlt": "Action figure set"
            },
            {
              "id": "2",
              "name": "Building Blocks Creative Kit",
              "price": "$34.99",
              "variant": "500+ colorful blocks",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765903002373-zfpup2sv.jpg",
              "imageAlt": "Building blocks set"
            },
            {
              "id": "3",
              "name": "Strategy Puzzle Game",
              "price": "$19.99",
              "variant": "Ages 8+, 2-4 players",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765903003593-0rv7o3wg.jpg",
              "imageAlt": "Puzzle game board"
            },
            {
              "id": "4",
              "name": "Premium LEGO Architecture Set",
              "price": "$89.99",
              "variant": "1200+ pieces, Display model",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765903004681-djls2i95.jpg",
              "imageAlt": "LEGO building set"
            }
          ]}
        />
      </div>
      
      <div id="features" data-section="features">
        <FeatureCardFifteen
          title="Why Choose One Game"
          description="Discover the benefits of shopping at One Game toy store."
          tag="Store Benefits"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="noInvert"
          features={[
            {
              "id": "1",
              "title": "Quality Selection",
              "description": "Curated collection of premium toys from trusted brands",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765903005755-472cid24.jpg"
            },
            {
              "id": "2",
              "title": "Safe & Tested",
              "description": "All products meet safety standards and are tested for quality",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765903006999-3x8qqlbg.jpg"
            },
            {
              "id": "3",
              "title": "Expert Staff",
              "description": "Knowledgeable team to help you find the perfect toy",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765903008363-q5gr46yr.jpg"
            }
          ]}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardEleven
          title="What Our Customers Say"
          description="Hear from parents and kids who love One Game"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          testimonials={[
            {
              "id": "1",
              "nameTitle": "Sarah Johnson, Parent",
              "quote": "One Game has the best selection of toys! My kids are always excited when we visit. The staff is super helpful.",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765903009418-amt2qrbk.jpg"
            },
            {
              "id": "2",
              "nameTitle": "Michael Chen, Father",
              "quote": "Quality products at great prices. We found exactly what we were looking for and the customer service was excellent.",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765903010489-o8pixqg4.jpg"
            },
            {
              "id": "3",
              "nameTitle": "Emma Rodriguez, Parent",
              "quote": "The toy selection is amazing and everything is well-organized. My children love exploring the store!",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765903011505-vowhht07.jpg"
            },
            {
              "id": "4",
              "nameTitle": "David Kim, Grandparent",
              "quote": "I always find perfect gifts for my grandchildren here. Highly recommended for anyone looking for quality toys.",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765903012770-wbgd6pvk.jpg"
            }
          ]}
        />
      </div>
      
      <div id="socialproof" data-section="socialproof">
        <SocialProofThree
          title="Trusted by Leading Brands"
          description="One Game partners with the world's top toy and game manufacturers"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="noInvert"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765903014046-9f36id4j.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765903015204-8e2qobht.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765903016406-d4px0l9i.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765903017322-a6mp5f9g.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765903018364-a5om03uj.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765903019345-c26awv4o.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765903020353-duz0gmpo.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765903021303-g8kpjkfr.jpg"
          ]}
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Have questions about One Game? We have answers!"
          useInvertedBackground="noInvert"
          textPosition="left"
          faqs={[
            {
              "id": "1",
              "title": "Do you have age-appropriate toys for toddlers?",
              "content": "Yes! We have a wide selection of toys designed specifically for toddlers and infants, all meeting safety standards."
            },
            {
              "id": "2",
              "title": "What is your return policy?",
              "content": "We offer a 30-day money-back guarantee on all products. If your child doesn't love it, we'll make it right."
            },
            {
              "id": "3",
              "title": "Do you offer gift wrapping?",
              "content": "Absolutely! We provide complimentary gift wrapping for all purchases. Perfect for birthdays and special occasions."
            },
            {
              "id": "4",
              "title": "Are your toys eco-friendly?",
              "content": "We carry a selection of sustainable and eco-friendly toys. Ask our staff about our green toy collection."
            },
            {
              "id": "5",
              "title": "Do you have online ordering?",
              "content": "Yes, you can order online and pick up in-store, or we deliver to your home. Check our website for details."
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Newsletter"
          title="Stay Updated with One Game"
          description="Subscribe to our newsletter for exclusive deals, new toy arrivals, and special promotions."
          useInvertedBackground="noInvert"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive updates from One Game. We respect your privacy and never share your information."
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBase
          logoText="One Game"
          copyrightText="© 2025 One Game Toy Store. All rights reserved."
          columns={[
            {
              "title": "Shop",
              "items": [
                {"label": "Products", "href": "products"},
                {"label": "Best Sellers", "href": "products"},
                {"label": "New Arrivals", "href": "products"}
              ]
            },
            {
              "title": "Company",
              "items": [
                {"label": "About Us", "href": "about"},
                {"label": "Contact", "href": "contact"},
                {"label": "Careers", "href": "https://example.com"}
              ]
            },
            {
              "title": "Legal",
              "items": [
                {"label": "Privacy Policy", "href": "https://example.com"},
                {"label": "Terms & Conditions", "href": "https://example.com"},
                {"label": "Shipping Info", "href": "https://example.com"}
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}