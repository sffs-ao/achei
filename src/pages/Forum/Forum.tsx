import CardForum from "@/components/CardForum";
import { GET_CLASSES_PUBLIC } from "@/lib/API";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";


export default function ForumPage() {
    const {data, isPending} = useQuery({
        queryKey: ["get-public-courses"],
        queryFn: GET_CLASSES_PUBLIC,
    })
    if(data)
        console.log("Data ",data )
    return (
        <div>
            <h1 className="text-2xl font-bold">Fórum</h1>
            <p>Explore as nossas comunidades</p>
            <h1 className="font-semibold mt-10">Todos os fóruns</h1>
            <div className="mt-2 grid gap-2 md:grid-cols-2 lg:grid-cols-3">
                {data?.courses.map((forum: any) => (
                    <CardForum key={forum.id} title={forum.course_name} />
                ))}
            </div>
        </div>
    )
}