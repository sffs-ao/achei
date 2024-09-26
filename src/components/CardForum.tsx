import { MessageCircleMore, Users2 } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";

export default function CardForum() {
    return (
        <Card>
            <span className="text-xs font-mono text-zinc-600 p-6">Comunidade</span>
            <CardHeader><h1 className="font-semibold">Curso de ingles</h1></CardHeader>
            <CardContent className="flex text-zinc-800 gap-2">
                <div className="flex text-xs items-center"><MessageCircleMore width={18}/> <span>25</span></div>
                <div className="flex text-xs items-center"><Users2 width={18}/> <span>06</span></div>
            </CardContent>
    </Card>
    )
}