import { Section } from '@/components/ui/Section';
import { TeamMemberCard, type TeamMember } from '@/components/TeamMemberCard';

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Elena Rodriguez',
    role: 'Fundadora & Directora',
    bio: 'Elena es la visionaria detrás de Cine Vaquero, con más de 15 años de experiencia en cine y una pasión por la narración auténtica.',
    imageUrl: 'https://placehold.co/400x533.png',
    imageHint: 'female director',
  },
  {
    id: '2',
    name: 'Marcus Cole',
    role: 'Productor Principal',
    bio: 'Marcus aporta una gran cantidad de conocimientos de producción, asegurando que cada proyecto se desarrolle sin problemas desde el concepto hasta la finalización.',
    imageUrl: 'https://placehold.co/400x533.png',
    imageHint: 'male producer',
  },
  {
    id: '3',
    name: 'Sofia Chen',
    role: 'Directora de Fotografía',
    bio: 'El agudo ojo de Sofia y su enfoque artístico en la cinematografía le dan a las películas de Cine Vaquero su distintivo estilo visual.',
    imageUrl: 'https://placehold.co/400x533.png',
    imageHint: 'female cinematographer',
  },
  {
    id: '4',
    name: 'David Miller',
    role: 'Escritor Principal',
    bio: 'David crea narrativas convincentes y personajes memorables que forman la columna vertebral de nuestras producciones.',
    imageUrl: 'https://placehold.co/400x533.png',
    imageHint: 'male writer',
  },
];

export default function TeamPage() {
  return (
    <Section
      title="Nuestra Fuerza Creativa"
      subtitle="Conoce a los apasionados individuos que dan vida a las visiones de Cine Vaquero."
      className="animate-in fade-in duration-500 ease-out"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </Section>
  );
}
