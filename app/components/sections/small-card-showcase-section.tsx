import { cn } from "@/lib/utils";
import { LucideIcon, LucideProps } from "lucide-react";
import { useInView } from "react-intersection-observer";
import Container from "@/components/container";
import { H2, P } from "@/components/typography";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type SmallCardShowcaseProps = {
  section: {
    sectionId: string;
    sectionTitle: string;
    sectionContent: string;
  };
  cards: {
    cardsList: {
      icon: LucideIcon;
      title: string;
      content: string;
      badges?: string[];
    }[];
    randomizeCards?: boolean;
  };
  className?: string;
};

const SmallCardShowcase = ({
  section: { sectionId, sectionTitle, sectionContent },
  cards: { cardsList, randomizeCards = false },
  className,
}: SmallCardShowcaseProps) => {
  // Hook to trigger animation when the secction first enters the viewport
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id={sectionId} className={cn("py-20", className)}>
      <Container ref={ref}>
        <div className="mb-12 text-center">
          <H2>{sectionTitle}</H2>
          <P>{sectionContent}</P>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cardsList
            .sort((a, b) => {
              if (randomizeCards) {
                return Math.random() - 0.5;
              }
              return 0;
            })
            .map((item, index) => (
              <Card
                key={index}
                className="bg-card text-card-foreground border transition-shadow hover:shadow-md"
              >
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <item.icon className="text-primary h-10 w-10" />
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-grow flex-col gap-4">
                  <CardDescription className="mb-auto text-sm">
                    {item.content}
                  </CardDescription>
                  {!!item.badges && item.badges.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {item.badges.map((badge, index) => (
                        <Badge variant="outline" key={index}>
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
        </div>
      </Container>
    </section>
  );
};

export default SmallCardShowcase;
