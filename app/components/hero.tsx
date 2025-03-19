import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { DashedBorder } from "./dashed-border";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useDialog } from "@/hooks/use-dialog";
import { DialogWidth } from "./ui/dialog";
import Container from "./container";
import { createServerFn } from "@tanstack/react-start";
import { setCookie } from "@tanstack/react-start/server";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  const { setDialogOpen, DialogComponent } = useDialog({
    header: {
      title: <p>In-Progress</p>,
    },
    content: <p>This content is In-Progress.</p>,
    width: "md",
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="relative">
      <Container
        className={cn(
          "relative z-10 flex transform flex-col items-center justify-center gap-4 transition-all duration-1000",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
        )}
        occupyScreenHeight
      >
        <div className="flex flex-row gap-4">
          <div className="border-primary/50 overflow-hidden rounded-lg border border-dashed p-2 text-sm text-ellipsis whitespace-nowrap md:text-base">
            Supply Chain 🌍 | Automation 🤖 | Technology 🛰️
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-muted-foreground m-5 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            📦 Hi, I'm <span className="text-primary">Parth</span>.
          </h1>
          <p className="text-muted-foreground mx-auto max-w-[700px] leading-10 md:text-xl">
            I am a{" "}
            <Badge variant="secondary" className="text-xl">
              Supply Chain
            </Badge>{" "}
            guy, with my ❤️ in{" "}
            <Badge variant="secondary" className="text-xl">
              Tech
            </Badge>
            .
          </p>
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button onClick={() => setDialogOpen(true)}>
            View My Work <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="mt-6 flex items-center justify-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() =>
              window.open("https://github.com/ParthKal1712", "_blank")
            }
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() =>
              window.open("https://www.linkedin.com/in/parth-kalra/", "_blank")
            }
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => window.open("mailto:parthkal@usc.edu", "_blank")}
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Button>
        </div>
      </Container>
      <DialogComponent />
    </section>
  );
};

export default Hero;
