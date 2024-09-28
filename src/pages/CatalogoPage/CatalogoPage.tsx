import CardCourse from "@/components/CardCourse"
import { Link } from "react-router-dom"

export default function CatalogoPage()
{
    return(
        <div className="">
            <h1 className="text-2xl">Catalogo</h1>
            <p className="font-semibold">Navegue por todo conteudo da SFFS</p>
            <div className="flex mt-4 items-start gap-4">
                <div className=" overflow-y-scroll scrol flex-1 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                   <Link to="/cursos/2"> <CardCourse /> </Link>
                   <Link to="/cursos/2"> <CardCourse /> </Link>
                   <Link to="/cursos/2"> <CardCourse /> </Link>
                   <Link to="/cursos/2"> <CardCourse /> </Link>
                </div>
                <div className="w-64 sticky">
                    <span>Filtros</span>
                    <div>
                        <div className="text-zinc-600">
                            <h3 className="text-lg text-zinc- 800">Nivel</h3>
                            <div className="flex gap-1 flex-1">
                                <input id="basico" type="checkbox" />
                                <label htmlFor="basico">Básico</label>
                            </div>
                            <div className="flex gap-1">
                                <input id="interme" type="checkbox" />
                                <label htmlFor="interme">Intermediario</label>
                            </div>
                            <div className="flex gap-1">
                                <input id="avancado" type="checkbox" />
                                <label htmlFor="avancado">Avançado</label>
                            </div>
                        </div>
                        
                        <div className="w-full h-[3px] bg-slate-100 my-2"></div>
 
                    </div>
                </div>
            </div>
        </div>
    )
}