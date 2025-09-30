import { Button } from "@/components/ui/button";

const memberStories = [
  {
    id: "jeremy",
    name: "Jeremy",
    achievement: "Consolidated debt $23k+ 🎉",
    description: "Family man Jeremy went from drowning in debt to tapping into a gold mine—his home equity. He dug himself out of **$23,000** in debt.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  },
  {
    id: "leah",
    name: "Leah",
    achievement: "",
    description: "Super mom Leah took steps to reduce her debt and grow her family—with a personal loan to consolidate **$40,000** in debt.",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  },
  {
    id: "kevin",
    name: "Kevin",
    achievement: "",
    description: "Freelancer Kevin struggled with credit card debt. We helped him resolve over **$17,000** in debt, so he can focus on his new law career.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  }
];

export default function MemberStoriesSection() {
  return (
    <section className="bg-gray-50 py-16" data-testid="member-stories">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2" data-testid="section-label">
            Member Stories
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground" data-testid="section-title">
            We've got your back, so you can move forward
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {memberStories.map((story) => (
            <div key={story.id} className="bg-white rounded-xl overflow-hidden" data-testid={`member-story-${story.id}`}>
              <img 
                src={story.image} 
                alt={`${story.name} success story`}
                className="w-full h-48 object-cover"
                data-testid={`member-image-${story.id}`}
              />
              <div className="p-6">
                {story.achievement && (
                  <div className="text-center mb-4" data-testid={`member-achievement-${story.id}`}>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {story.achievement}
                    </span>
                  </div>
                )}
                <p 
                  className="text-muted-foreground mb-4"
                  dangerouslySetInnerHTML={{ 
                    __html: story.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                  }}
                  data-testid={`member-description-${story.id}`}
                />
                <Button 
                  variant="link" 
                  className="text-primary hover:text-primary/80 font-medium p-0"
                  data-testid={`button-watch-story-${story.id}`}
                >
                  Watch the story
                </Button>
                <p className="text-xs text-muted-foreground mt-2" data-testid={`member-disclaimer-${story.id}`}>
                  *Actual members. Members' endorsement is a paid testimonial. Individual results are not typical and will vary.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
