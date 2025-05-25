import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  imageHint?: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out transform hover:scale-[1.03] hover:shadow-2xl transition-all">
      <div className="relative w-full aspect-[3/4]">
        <Image
          src={member.imageUrl}
          alt={member.name}
          layout="fill"
          objectFit="cover"
          data-ai-hint={member.imageHint || "portrait professional"}
        />
      </div>
      <CardHeader className="p-4">
        <CardTitle className="text-xl font-semibold text-primary">{member.name}</CardTitle>
        <CardDescription className="text-sm text-accent-foreground">{member.role}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
      </CardContent>
    </Card>
  );
}
