import {
  BookOpen,
  CircleHelp,
  Home,
  Layers2,
  MessageCircle,
} from "lucide-react";
import cursoIngles from "./assets/cursos-ingles.jpg";
import cursoGestao from "./assets/curso-gestao.jpeg";
import cursoPrevisoes from "./assets/curso-previsoes.jpeg";
import cursoFiscalidade from "./assets/cursos-fiscalidade.jpeg";
import cursoMediacao from "./assets/cursos-mediacao.jpg";
import cursoRh from "./assets/cursos-rh.jpeg";

interface MenuItem {
  name: string;
  icon: JSX.Element;
  link: string;
}

export const MENU: MenuItem[] = [
  {
    name: "Inicio",
    icon: <Home className="text-blue-900" />,
    link: "/portal",
  },
  {
    name: "Meu cursos",
    icon: <BookOpen className="text-blue-900" />,
    link: "/portal/meus-cursos/",
  },
  {
    name: "Cursos",
    icon: <Layers2 className="text-blue-900" />,
    link: "/portal/cursos",
  },
   {
    name: "Fórum",
    icon: <MessageCircle className="text-blue-900" />,
    link: "/portal/forum",
  }, 
/*   {
    name: "Suporte",
    icon: <CircleHelp className="text-blue-900" />,
    link: "#",
  }, */
];

export const CursoMap = [
  {
    course: "Inglês",
    level: "Avançado",
    structor: "Fernandinho",
    structor_about: "Programador Frontend",
    course_state: "Em Andamento",
    imageCourse: cursoIngles,
  },
  {
    course: "Gestão de Empresas",
    level: "Intermediário",
    structor: "Ana Sousa",
    structor_about: "Especialista em Gestão",
    course_state: "Disponível",
    imageCourse: cursoGestao,
  },
  {
    course: "Previsões Econômicas",
    level: "Avançado",
    structor: "Carlos Silva",
    structor_about: "Economista",
    course_state: "Em Andamento",
    imageCourse: cursoPrevisoes,
  },
  {
    course: "Fiscalidade e Contabilidade",
    level: "Avançado",
    structor: "Rita Pereira",
    structor_about: "Contadora",
    course_state: "Disponível",
    imageCourse: cursoFiscalidade,
  },
  {
    course: "Mediação de Conflitos",
    level: "Intermediário",
    structor: "Marcos Lima",
    structor_about: "Especialista em Mediação",
    course_state: "Em Andamento",
    imageCourse: cursoMediacao,
  },
  {
    course: "Recursos Humanos",
    level: "Intermediário",
    structor: "Patrícia Costa",
    structor_about: "Consultora de RH",
    course_state: "Disponível",
    imageCourse: cursoRh,
  },
];
