import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export interface Project {
  id: string;
  title: string;
  year: string;
  description: string;
  imageUrl: string;
  imageHint?: string;
  genre?: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out transform hover:scale-[1.03] hover:shadow-2xl transition-all">
      <div className="relative w-full aspect-video">
        <Image
          src={project.imageUrl}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          data-ai-hint={project.imageHint || "film still"}
        />
      </div>
      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-semibold text-primary">{project.title}</CardTitle>
          {project.genre && <Badge variant="secondary">{project.genre}</Badge>}
        </div>
        <CardDescription className="text-sm text-accent-foreground">{project.year}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{project.description}</p>
      </CardContent>
    </Card>
  );
}
