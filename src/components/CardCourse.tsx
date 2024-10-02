export default function CardCourse() {
    return (
        <div className="overflow-hidden shadow-md rounded-lg">
            <img className="w-full h-32 " src="/login.jpg" alt="" />
            <div className="p-2 flex flex-col ">
                <span className="font-mono text-[10px]">INICIANTE</span>

                <h1>Curso de ingles</h1>
                <h1 className="font-medium text-[10px]">Fulano de tal</h1>
                <span className="text-[10px] text-zinc-600 font-light">Professor catedratico</span>
            </div>
        </div>
    )
}