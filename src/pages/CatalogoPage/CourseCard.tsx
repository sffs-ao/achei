import imageUser from "./../../assets/user.webp"
interface CourseCardProps {
    level: string;
    structor: string;
    course: string;
    structor_about: string;
    imageCourse: any;
    is_my?:boolean,
    time_start: string,
    time_end: string,
    payment_status: string | null
}
export default function CourseCard({
  level,
  structor,
  course,
  time_start,
  payment_status,
  time_end,
  structor_about,
  imageCourse,
  is_my = false
  
}: CourseCardProps) {
  return (
    <div className="relative border  shadow-sm rounded-md overflow-auto flex flex-col bg-white hover:bg-zinc-100">
      {is_my && <span className=" absolute top-2 right-2 bg-yellow-400 text-black rounded-sm p-2 text-[10px]">Estudando</span>}
       <div className="flex flex-col p-2 gap-2 items-start">
        <div className=" text-sm font-bold">{course}</div>
        {!payment_status ? <span className="   bg-red-400 text-white rounded-sm p-1 text-[10px]">Não Pago</span> : <span className=" bg-green-400 text-white rounded-sm p-2 text-[10px]">Pago</span> }
       <div className="flex flex-col">
         <span className="text-xs text-zinc-600"> Horario: {time_start} | {time_end}</span>
          <span className="text-xs text-zinc-600">Seg | Terc | Quart | Quin | Sext</span>
       </div>

        <div className="h-10  flex gap-2 items-center w-full">
          <img  className="rounded-full  w-8" src={imageUser} alt="" />
          <div className="flex flex-col gap-0 flex-1">
            <div className="text-xs">{structor}</div>
            <div className=" text-xs text-zinc-600">{structor_about}</div>
          </div>
        </div>
      </div>
   
    </div>
  );
}