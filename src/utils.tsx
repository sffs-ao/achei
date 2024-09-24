import { BookOpen, CircleHelp, Home, Layers2, MessageCircle } from "lucide-react";

interface MenuItem {
    name: string;
    icon: JSX.Element;
    link: string;
}

export const MENU : MenuItem[] = [
    {
        name: "Inicio",
        icon: <Home className="text-blue-900" />,
        link: "/",
    },
    {
        name: "Meu cursos",
        icon: <BookOpen className="text-blue-900" />,
        link: "/cursos",        
    },
    {
        name: "Cursos",
         icon: <Layers2 className="text-blue-900" />,
        link: "/cursos",        
    },
    {
        name: "Fórum",
        icon: <MessageCircle className="text-blue-900" />,
        link: "/cursos",        
    },
    {
        name: "Suporte",
        icon: <CircleHelp className="text-blue-900"/>,
        link: "/cursos",        
    },
]