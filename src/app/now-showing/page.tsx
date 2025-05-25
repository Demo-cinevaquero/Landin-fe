
import { Section } from '@/components/ui/Section';
import { FilmCard, type Film } from '@/components/FilmCard';

const nowShowingFilms: Film[] = [
  {
    id: 'mentiras-la-serie',
    title: 'Mentiras, La Serie',
    synopsis: 'Cuatro mujeres descubren que compartían al mismo hombre, Emmanuel, justo cuando reciben la noticia de su repentina muerte. Convocadas a una misteriosa mansión, se les informa que una de ellas podría ser la asesina. Con solo doce horas para descubrir la verdad, afloran secretos, mentiras, rivalidades y una inesperada conexión.',
    releaseDate: 'Estreno: 13 de junio de 2025 (Amazon Prime Video)',
    posterUrl: 'https://placehold.co/400x600.png',
    posterHint: 'musical series poster',
    trailerLink: '#', // Placeholder, puede ser un enlace a Prime Video
    // showtimesLink: undefined, // No aplica para una serie en streaming
    genre: 'Musical de Misterio',
  },
  {
    id: 'technoboys',
    title: 'Technoboys',
    synopsis: 'Una boy band mexicana de los 90 se reúne veinte años después para intentar recuperar su estrellato, enfrentándose a un mundo moderno y digital que apenas comprenden.',
    releaseDate: 'Disponible desde 2024 (Netflix)',
    posterUrl: 'https://placehold.co/400x600.png',
    posterHint: 'comedy movie band',
    trailerLink: '#', // Placeholder, puede ser un enlace a Netflix
    // showtimesLink: undefined, // No aplica para una película en streaming
    genre: 'Comedia Musical',
  },
];

export default function NowShowingPage() {
  return (
    <Section
      title="Cartelera: En Exhibición"
      subtitle="Descubre estas producciones de Cine Vaquero actualmente disponibles o próximos estrenos."
      className="animate-in fade-in duration-500 ease-out"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {nowShowingFilms.map((film) => (
          <FilmCard key={film.id} film={film} />
        ))}
      </div>
    </Section>
  );
}
