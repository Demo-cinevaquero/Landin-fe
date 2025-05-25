import Image from 'next/image';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cine Vaquero: Productora Audiovisual Mexicana',
  description: "Descubre Cine Vaquero, productora de Luis Gerardo Méndez y Gerardo Gatica, subsidiaria de Panorama. Próximo estreno 'Mentiras, La Serie' (Amazon Prime Video) y éxito 'Technoboys' (Netflix). Contenido mexicano de calidad mundial.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col items-center space-y-8 md:space-y-12 animate-in fade-in duration-500 ease-out">
      
      <section id="banner" className="w-full animate-in fade-in zoom-in-95 duration-700 ease-out">
        <div className="relative w-full aspect-[16/6] md:aspect-[16/5] rounded-lg overflow-hidden shadow-2xl">
          <Image
            src="https://placehold.co/1600x600.png" 
            alt="Producciones Cinematográficas Cine Vaquero"
            layout="fill"
            objectFit="cover"
            data-ai-hint="cinema production still"
            priority
          />
        </div>
      </section>

      <header className="text-center w-full">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-primary drop-shadow-md">
          Cine Vaquero: Productora Audiovisual Mexicana que Conquista al Mundo
        </h1>
      </header>

      <div className="w-full max-w-4xl mx-auto space-y-8 md:space-y-10 px-4">
        <section id="intro" className="py-5 animate-in fade-in slide-in-from-bottom-6 duration-500 ease-out">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Descubre <strong className="font-semibold text-foreground">Cine Vaquero</strong>, la productora audiovisual independiente de México, parte del conglomerado <strong className="font-semibold text-foreground">Panorama</strong>, fundada por el reconocido actor <strong className="font-semibold text-foreground">Luis Gerardo Méndez</strong> y el productor <strong className="font-semibold text-foreground">Gerardo Gatica</strong>. Nos especializamos en la creación de cine y televisión con un enfoque creativo y original, fusionando la nostalgia de la cultura pop con narrativas contemporáneas. Nuestras producciones, desarrolladas para gigantes del streaming como <strong className="font-semibold text-foreground">Netflix</strong> y <strong className="font-semibold text-foreground">Amazon Prime Video</strong>, se distinguen por un estilo visual impactante y un tono narrativo innovador que resuena con audiencias globales.
          </p>
        </section>

        <section id="vision" className="py-5 border-t border-border animate-in fade-in slide-in-from-bottom-6 duration-500 ease-out delay-100">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">Nuestra Visión: Contenido Original de Alta Calidad con Sello Mexicano</h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">En Cine Vaquero, apostamos por:</p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li className="text-base md:text-lg"><strong className="font-medium text-foreground">Creatividad y Originalidad:</strong> Historias frescas que desafían lo convencional.</li>
            <li className="text-base md:text-lg"><strong className="font-medium text-foreground">Estética Innovadora:</strong> Un deleite visual en cada producción.</li>
            <li className="text-base md:text-lg"><strong className="font-medium text-foreground">Narrativas Contemporáneas:</strong> Conectamos con el presente sin olvidar el pasado.</li>
            <li className="text-base md:text-lg"><strong className="font-medium text-foreground">Impulso al Talento Nacional:</strong> Plataforma para las grandes figuras y nuevas promesas de México.</li>
            <li className="text-base md:text-lg"><strong className="font-medium text-foreground">Alcance Global:</strong> Llevamos historias mexicanas a más de 240 países y territorios.</li>
          </ul>
        </section>

        <section id="mentiras-la-serie" className="production-highlight bg-card/80 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-primary/30 animate-in fade-in slide-in-from-bottom-6 duration-500 ease-out delay-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">Próximo Estreno Imperdible: "Mentiras, La Serie" en Amazon Prime Video</h2>
          
          <div className="md:flex md:gap-6">
            <div className="md:w-2/3">
              <h3 className="text-xl md:text-2xl font-medium text-foreground mt-5 mb-3">El Fenómeno Musical de los 80s Llega a tu Pantalla</h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-3">Prepárate para "Mentiras, La Serie", nuestra nueva serie original que se estrenará globalmente en <strong className="font-semibold text-foreground">Amazon Prime Video el 13 de junio de 2025</strong>.</p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-4">
                <li className="text-base md:text-lg"><strong className="font-medium text-foreground">Basada en el Éxito:</strong> Adaptación del aclamado musical "Mentiras" de José Manuel López Velarde.</li>
                <li className="text-base md:text-lg"><strong className="font-medium text-foreground">Dirección de Lujo:</strong> Bajo la visión de Gabriel Ripstein.</li>
                <li className="text-base md:text-lg"><strong className="font-medium text-foreground">Producción:</strong> Cine Vaquero en colaboración con Amazon Studios.</li>
                <li className="text-base md:text-lg"><strong className="font-medium text-foreground">Elenco Estelar:</strong> Un quinteto de ensueño con <strong className="font-semibold text-foreground">Belinda, Regina Blandón, Diana Bovio, Luis Gerardo Méndez y Mariana Treviño</strong>.</li>
              </ul>
            </div>
            <div className="md:w-1/3 mt-5 md:mt-0">
                <Image src="https://placehold.co/600x900.png" alt="Mentiras, La Serie Poster" width={600} height={900} className="rounded-lg shadow-lg mx-auto border border-accent/50" data-ai-hint="musical series poster" />
            </div>
          </div>

          <h3 className="text-xl md:text-2xl font-medium text-foreground mt-6 mb-3">Trama: Misterio, Rivalidades y Revelaciones al Ritmo Ochentero</h3>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-3">Cuatro mujeres descubren que compartían al mismo hombre, Emmanuel, justo cuando reciben la noticia de su repentina muerte. Convocadas a una misteriosa mansión, se les informa que una de ellas podría ser la asesina. Con solo doce horas para descubrir la verdad, afloran secretos, mentiras, rivalidades y una inesperada conexión.</p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-4">
            <li className="text-base md:text-lg"><strong className="font-medium text-foreground">Suspenso y Drama:</strong> ¿Quién es la culpable?</li>
            <li className="text-base md:text-lg"><strong className="font-medium text-foreground">Comedia y Emoción:</strong> Un torbellino de sentimientos.</li>
            <li className="text-base md:text-lg"><strong className="font-medium text-foreground">Nostalgia Ochentera:</strong> Paleta de colores vibrantes, luces neón, vestuarios audaces y peinados voluminosos.</li>
            <li className="text-base md:text-lg"><strong className="font-medium text-foreground">Música Icónica:</strong> Belinda interpretará el clásico "Él Me Mintió", entre otros números musicales que forman parte integral de la trama.</li>
          </ul>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed"><strong className="font-semibold text-foreground">"Mentiras, La Serie"</strong> promete una experiencia única llena de música, misterio y emociones, honrando el espíritu original con una propuesta fresca para nuevas audiencias.</p>
        </section>

        <section id="technoboys" className="production-highlight bg-card/80 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-primary/30 animate-in fade-in slide-in-from-bottom-6 duration-500 ease-out delay-300">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">Éxito Reciente: "Technoboys" – Humor Musical en Netflix</h2>
          
          <div className="md:flex md:gap-6 md:flex-row-reverse">
            <div className="md:w-2/3">
              <h3 className="text-xl md:text-2xl font-medium text-foreground mt-5 mb-3">El Reencuentro de una Boy Band que Marcó Época</h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-3">"Technoboys", nuestra película original de <strong className="font-semibold text-foreground">Netflix lanzada en 2024</strong>, marcó el debut como director de <strong className="font-semibold text-foreground">Luis Gerardo Méndez</strong>, codirigiendo con <strong className="font-semibold text-foreground">Gerardo Gatica</strong>.</p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-4">
                <li className="text-base md:text-lg"><strong className="font-medium text-foreground">Protagonistas:</strong> Luis Gerardo Méndez y Karla Souza, junto a un talentoso elenco mexicano.</li>
                <li className="text-base md:text-lg"><strong className="font-medium text-foreground">Trama Divertida:</strong> Una boy band mexicana de los 90 se reúne veinte años después para intentar recuperar su estrellato, enfrentándose a un mundo moderno y digital que apenas comprenden.</li>
                <li className="text-base md:text-lg"><strong className="font-medium text-foreground">Comedia y Nostalgia Noventera:</strong> Risas garantizadas con referencias a una década inolvidable.</li>
                <li className="text-base md:text-lg"><strong className="font-medium text-foreground">Reconocimiento:</strong> Elogiada por su tono irreverente y la capacidad de Cine Vaquero para revitalizar la cultura pop mexicana.</li>
              </ul>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">Disponible mundialmente en <strong className="font-semibold text-foreground">Netflix</strong>, "Technoboys" es una muestra de nuestra visión fresca para crear contenidos originales de alta calidad.</p>
            </div>
            <div className="md:w-1/3 mt-5 md:mt-0">
                <Image src="https://placehold.co/600x400.png" alt="Technoboys Movie Still" width={600} height={400} className="rounded-lg shadow-lg mx-auto border border-accent/50" data-ai-hint="comedy movie band" />
            </div>
          </div>

        </section>

        <section id="conclusion" className="py-5 border-t border-border animate-in fade-in slide-in-from-bottom-6 duration-500 ease-out delay-400">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">Cine Vaquero: Vanguardia en la Producción Audiovisual Mexicana Independiente</h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-3">
            Con un portafolio de proyectos exitosos, en <strong className="font-semibold text-foreground">Cine Vaquero</strong> reafirmamos nuestro compromiso con la calidad narrativa, la estética innovadora y el talento nacional. Series como "Mentiras, La Serie" en Amazon Prime Video y películas como "Technoboys" en Netflix son el reflejo de nuestra misión: <strong className="font-semibold text-foreground">llevar historias originales de México al mundo, entreteniendo con propuestas frescas, emocionantes y auténticas.</strong>
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-medium"><strong className="font-semibold text-foreground">Sigue de cerca a Cine Vaquero y no te pierdas nuestros próximos lanzamientos.</strong></p>
        </section>

        <div className="flex flex-col sm:flex-row gap-4 justify-center py-6 animate-in fade-in slide-in-from-bottom-6 duration-500 ease-out delay-500">
            <Button asChild variant="outline" size="lg">
              <Link href="/now-showing">Cartelera</Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
