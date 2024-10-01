import CardForum from "@/components/CardForum";
import { Link } from "react-router-dom";


export default function ForumPage() {
    return (
        <div>
            <h1 className="text-2xl font-bold">Fórum</h1>
            <p>Explore as nossas comunidades</p>

            <h1 className="font-semibold mt-10">Todos os fóruns</h1>
            <div className="mt-2 grid gap-2 md:grid-cols-2 lg:grid-cols-3">
                <CardForum />
                <Link to="2"><CardForum /></Link>
                <CardForum />
                <CardForum />
            </div>
        </div>
    )
}