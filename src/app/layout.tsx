import type {Metadata} from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Cine Vaquero Producciones',
  description: 'Presentando las historias, el equipo y los proyectos de Cine Vaquero.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://panorama.global#Organization",
        "name": "Panorama",
        "url": "https://panorama.global",
        "description": "Panorama es un conglomerado de producción audiovisual con sede en México, fundado por Gerardo Gatica, especializado en cine, teatro, televisión, publicidad y otros servicios de entretenimiento.",
        "founder": {
          "@id": "#PersonGerardoGatica"
        },
        "subOrganization": {
          "@id": "https://cinevaquero.site#Organization"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://cinevaquero.site#Organization",
        "name": "Cine Vaquero",
        "url": "https://cinevaquero.site",
        "description": "Cine Vaquero es una casa productora subsidiaria de Panorama, fundada por Luis Gerardo Méndez y Gerardo Gatica. Entre sus proyectos están la película \"Technoboys\" (Netflix, 2024) y \"Mentiras, La Serie\" (Amazon Prime Video, 2025).",
        "founder": [
          {
            "@id": "#PersonLuisGerardoMendez"
          },
          {
            "@id": "#PersonGerardoGatica"
          }
        ],
        "parentOrganization": {
          "@id": "https://panorama.global#Organization"
        },
        "sameAs": [
          "https://www.instagram.com/cinevaquero/",
          "https://twitter.com/CineVaquero"
        ]
      },
      {
        "@type": "Person",
        "@id": "#PersonGerardoGatica",
        "name": "Gerardo Gatica",
        "sameAs": [
          "https://twitter.com/geragaticag"
        ],
        "worksFor": [
          {
            "@id": "https://panorama.global#Organization"
          },
          {
            "@id": "https://cinevaquero.site#Organization"
          }
        ]
      },
      {
        "@type": "Person",
        "@id": "#PersonLuisGerardoMendez",
        "name": "Luis Gerardo Méndez",
        "sameAs": [
          "https://es.wikipedia.org/wiki/Luis_Gerardo_M%C3%A9ndez",
          "https://twitter.com/LuisGerardoM"
        ]
      },
      {
        "@type": "Person",
        "@id": "#PersonKarlaSouza",
        "name": "Karla Souza",
        "sameAs": [
          "https://es.wikipedia.org/wiki/Karla_Souza"
        ]
      },
      {
        "@type": "Person",
        "@id": "#PersonBelinda",
        "name": "Belinda",
        "sameAs": [
          "https://es.wikipedia.org/wiki/Belinda"
        ]
      },
      {
        "@type": "Person",
        "@id": "#PersonReginaBlandon",
        "name": "Regina Blandón",
        "sameAs": [
          "https://es.wikipedia.org/wiki/Regina_Bland%C3%B3n"
        ]
      },
      {
        "@type": "Person",
        "@id": "#PersonMarianaTrevino",
        "name": "Mariana Treviño",
        "sameAs": [
          "https://es.wikipedia.org/wiki/Mariana_Trevi%C3%B1o"
        ]
      },
      {
        "@type": "Person",
        "@id": "#PersonDianaBovio",
        "name": "Diana Bovio",
        "sameAs": [
          "https://es.wikipedia.org/wiki/Diana_Bovio"
        ]
      },
      {
        "@type": "TVSeries",
        "@id": "#TVSeriesMentirasLaSerie",
        "name": "Mentiras, La Serie",
        "datePublished": "2025-06-13",
        "description": "Adaptación televisiva del musical \"Mentiras\", estrenada el 13 de junio de 2025 en Amazon Prime Video.",
        "actor": [
          {
            "@id": "#PersonBelinda"
          },
          {
            "@id": "#PersonReginaBlandon"
          },
          {
            "@id": "#PersonMarianaTrevino"
          },
          {
            "@id": "#PersonDianaBovio"
          },
          {
            "@id": "#PersonLuisGerardoMendez"
          }
        ],
        "productionCompany": {
          "@id": "https://panorama.global#Organization"
        }
      },
      {
        "@type": "Movie",
        "@id": "#MovieTechnoboys",
        "name": "Technoboys",
        "datePublished": "2024-09-11",
        "description": "Película de comedia estrenada en 2024 a través de Netflix, protagonizada por Luis Gerardo Méndez y Karla Souza.",
        "actor": [
          {
            "@id": "#PersonLuisGerardoMendez"
          },
          {
            "@id": "#PersonKarlaSouza"
          }
        ],
        "productionCompany": [
          {
            "@id": "https://cinevaquero.site#Organization"
          },
          {
            "@id": "https://panorama.global#Organization"
          }
        ]
      }
    ]
  };

  return (
    <html lang="es" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${roboto.variable} font-sans antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow container py-8 md:py-12">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
