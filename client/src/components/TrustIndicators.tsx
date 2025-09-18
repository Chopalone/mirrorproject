export default function TrustIndicators() {
  return (
    <section className="bg-white py-12 border-b border-border" data-testid="trust-indicators">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center" data-testid="trustpilot-score">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-green-600 font-bold text-lg">★★★★★</span>
              <span className="font-bold text-lg">4.8</span>
            </div>
            <p className="text-sm text-muted-foreground">11K+ reviews</p>
          </div>
          <div className="text-center" data-testid="debt-resolved">
            <h3 className="text-3xl font-bold text-foreground">$20 Billion+</h3>
            <p className="text-muted-foreground">in debt resolved</p>
          </div>
          <div className="text-center" data-testid="loans-funded">
            <h3 className="text-3xl font-bold text-foreground">$13 Billion+</h3>
            <p className="text-muted-foreground">in loans funded¹</p>
          </div>
        </div>
      </div>
    </section>
  );
}
