import { Section } from '@/components/ui/Section';
import { ProjectCard, type Project } from '@/components/ProjectCard';

const featuredProjects: Project[] = [
  {
    id: '1',
    title: 'Ecos del Cañón',
    year: '2023',
    description: 'Una apasionante historia de supervivencia y redención ambientada en el indómito Oeste. Esta película explora la profunda conexión entre los humanos y la naturaleza.',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'western movie',
    genre: 'Drama Western',
  },
  {
    id: '2',
    title: 'La Última Caravana',
    year: '2022',
    description: 'Sigue el peligroso viaje de la última caravana a través de un paisaje cambiante, enfrentando nuevos peligros y viejas tradiciones. Una historia de esperanza y resiliencia.',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'desert journey',
    genre: 'Aventura',
  },
  {
    id: '3',
    title: 'Polvo Carmesí',
    year: '2024',
    description: 'Un thriller neo-western donde un antiguo agente de la ley se ve arrastrado de nuevo a un mundo de conflictos para proteger a su familia y su legado.',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'mystery thriller',
    genre: 'Neo-Western',
  },
   {
    id: '4',
    title: 'El Recodo del Río',
    year: '2021',
    description: 'Una historia íntima de dos hermanos distanciados que se reúnen en el rancho familiar, confrontando agravios pasados y encontrando un camino hacia la reconciliación.',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'family drama',
    genre: 'Drama',
  },
];

export default function ProjectsPage() {
  return (
    <Section
      title="Nuestros Trabajos Destacados"
      subtitle="Una selección de películas y cortometrajes que encarnan el espíritu de Cine Vaquero."
      className="animate-in fade-in duration-500 ease-out"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
