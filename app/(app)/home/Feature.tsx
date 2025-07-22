import { Gift, Truck, Shield, Heart } from "lucide-react";

export default function Features() {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Custom Combos</h3>
              <p className="text-sm text-gray-600">
                Personalized gift combinations
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Fast Delivery</h3>
              <p className="text-sm text-gray-600">
                Same day delivery available
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Quality Assured</h3>
              <p className="text-sm text-gray-600">100% quality guarantee</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Made with Love</h3>
              <p className="text-sm text-gray-600">
                Crafted with care & attention
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
