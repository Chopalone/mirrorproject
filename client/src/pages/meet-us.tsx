import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Award, Shield, Heart, MapPin, Phone, Mail } from "lucide-react";

export default function MeetUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-indigo-600 mb-6">
              Meet the Achieve Team
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              We're a passionate team of financial experts dedicated to helping you achieve your financial goals and build a brighter future.
            </p>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#3300FF20' }}>
                <Heart className="h-8 w-8" style={{ color: '#3300FF' }} />
              </div>
              <h3 className="text-xl font-bold mb-4">Empathy</h3>
              <p className="text-gray-600">
                We understand financial stress and approach every situation with compassion and care.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Trust</h3>
              <p className="text-gray-600">
                Your financial information is secure with us. We maintain the highest standards of privacy and security.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from customer service to financial solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Community</h3>
              <p className="text-gray-600">
                We believe in building strong relationships and supporting our community's financial wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Leadership Team</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-bold mb-2">Sarah Johnson</h3>
              <p className="text-indigo-600 font-medium mb-4">Chief Executive Officer</p>
              <p className="text-gray-600 text-sm">
                20+ years in financial services, former VP at Goldman Sachs. Passionate about democratizing financial wellness.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-bold mb-2">Michael Chen</h3>
              <p className="text-indigo-600 font-medium mb-4">Chief Technology Officer</p>
              <p className="text-gray-600 text-sm">
                Former tech lead at Stripe. Expert in building secure, scalable financial platforms that put users first.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-bold mb-2">Emily Rodriguez</h3>
              <p className="text-indigo-600 font-medium mb-4">Chief Financial Officer</p>
              <p className="text-gray-600 text-sm">
                CPA with 15+ years experience. Previously CFO at a leading fintech startup. Ensures our financial health.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-bold mb-2">David Park</h3>
              <p className="text-indigo-600 font-medium mb-4">Head of Customer Success</p>
              <p className="text-gray-600 text-sm">
                Dedicated to ensuring every customer achieves their financial goals. 10+ years in customer experience.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-bold mb-2">Lisa Thompson</h3>
              <p className="text-indigo-600 font-medium mb-4">Head of Compliance</p>
              <p className="text-gray-600 text-sm">
                Former regulatory attorney. Ensures we meet all legal requirements while serving our customers.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-bold mb-2">James Wilson</h3>
              <p className="text-indigo-600 font-medium mb-4">Head of Product</p>
              <p className="text-gray-600 text-sm">
                Product visionary with experience at leading fintech companies. Focuses on user-centric design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">500K+</div>
              <p className="text-gray-600">Customers Served</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">$20B+</div>
              <p className="text-gray-600">Debt Resolved</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">$13B+</div>
              <p className="text-gray-600">Loans Funded</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">4.8★</div>
              <p className="text-gray-600">Customer Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Get in Touch</h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="text-white">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-gray-300">
                123 Financial Street<br />
                San Francisco, CA 94105<br />
                United States
              </p>
            </div>

            <div className="text-white">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-300">
                Customer Service:<br />
                1-800-ACHIEVE<br />
                Mon-Fri 8AM-8PM EST
              </p>
            </div>

            <div className="text-white">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-300">
                General: info@achieve.com<br />
                Support: support@achieve.com<br />
                Press: press@achieve.com
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="text-white font-semibold px-8 py-4 text-lg rounded-lg" style={{ backgroundColor: '#3300FF' }}>
              Contact Customer Service
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
