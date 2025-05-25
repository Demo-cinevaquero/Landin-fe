import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ExternalLink, Film as FilmIcon } from 'lucide-react';

export interface Film {
  id: string;
  title: string;
  synopsis: string;
  releaseDate: string;
  posterUrl: string;
  posterHint?: string;
  trailerLink?: string;
  showtimesLink?: string;
  genre?: string;
}

interface FilmCardProps {
  film: Film;
}

export function FilmCard({ film }: FilmCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg h-full animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out transform hover:scale-[1.03] hover:shadow-2xl transition-all">
      <div className="relative w-full aspect-[2/3]">
        <Image
          src={film.posterUrl}
          alt={`Póster de ${film.title}`}
          layout="fill"
          objectFit="cover"
          data-ai-hint={film.posterHint || "movie poster"}
        />
      </div>
      <CardHeader className="p-4">
         <div className="flex justify-between items-start mb-1">
          <CardTitle className="text-xl font-semibold text-primary">{film.title}</CardTitle>
          {film.genre && <Badge variant="outline">{film.genre}</Badge>}
        </div>
        <CardDescription className="text-sm text-accent-foreground">Fecha de Estreno: {film.releaseDate}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex-grow">
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">{film.synopsis}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">
        {film.trailerLink && (
          <Button asChild variant="outline" className="w-full sm:w-auto">
            <Link href={film.trailerLink} target="_blank" rel="noopener noreferrer">
              <FilmIcon className="mr-2 h-4 w-4" /> Tráiler
            </Link>
          </Button>
        )}
        {film.showtimesLink && (
          <Button asChild className="w-full sm:w-auto">
            <Link href={film.showtimesLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Horarios
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
