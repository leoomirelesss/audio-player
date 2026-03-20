import { Brain, GraduationCap, UsersRound } from 'lucide-react';
import { SectionShell } from '@/components/ui/section-shell';
import { InfoCard } from '@/components/ui/info-card';

export function ClassroomImpactSection() {
  return (
    <SectionShell
      id="impacto"
      eyebrow="Aplicación educativa"
      title="La inteligencia emocional transforma la dinámica del aula"
      description="Su impacto no se limita al bienestar individual: mejora la relación con el aprendizaje, la práctica docente y la convivencia escolar."
    >
      <div className="grid gap-6 md:grid-cols-3">
        <InfoCard
          title="Ayuda a los estudiantes"
          body="Favorece la autoestima académica, la tolerancia a la frustración, la participación y la capacidad de pedir ayuda cuando la necesitan."
          icon={<GraduationCap className="h-6 w-6" />}
        />
        <InfoCard
          title="Fortalece a los docentes"
          body="Permite leer mejor el clima del grupo, responder con mayor equilibrio ante conflictos y sostener vínculos pedagógicos más eficaces."
          icon={<Brain className="h-6 w-6" />}
        />
        <InfoCard
          title="Mejora la convivencia"
          body="Promueve escucha, empatía, diálogo y acuerdos, reduciendo escaladas emocionales que interrumpen la experiencia educativa."
          icon={<UsersRound className="h-6 w-6" />}
        />
      </div>
    </SectionShell>
  );
}
