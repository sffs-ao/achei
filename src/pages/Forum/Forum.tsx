import CardForum from "@/components/CardForum";
import { Link } from "react-router-dom";


export default function ForumPage() {
    return (
        <div>
            <h1 className="text-2xl font-bold">Fórum</h1>
            <p>Explore as nossas comunidades</p>
            <h1 className="font-semibold mt-10">Todos os fóruns</h1>
            <div className="mt-2 grid gap-2 md:grid-cols-2 lg:grid-cols-3">
                <CardForum  title="Curso de ingles"/>
                <Link to="2">
                    <CardForum title="Curso de fiscalidade"/>
                </Link>
                <CardForum title="Curso de RH"/>
                <CardForum title="Curso de Frances" />
            </div>
        </div>
    )
}