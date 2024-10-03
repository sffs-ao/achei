import imageUser from "./../../assets/user.webp"
interface CourseCardProps {
    level: string;
    structor: string;
    course: string;
    structor_about: string;
    imageCourse: any;
    is_my?:boolean
}
export default function CourseCard({
  level,
  structor,
  course,
  structor_about,
  imageCourse,
  is_my = false
  
}: CourseCardProps) {
  return (
    <div className="relative border shadow-sm rounded-sm overflow-auto flex flex-col">
      {is_my && <span className="course-state absolute top-2 right-2 bg-yellow-400 text-black rounded-sm p-2 text-[10px]">Estudando</span>}
       <div className="flex flex-col p-2 gap-2">
        <div className=" text-sm font-bold">{course}</div>
       
       <div className="flex flex-col">
         <span className="text-xs text-zinc-600"> Horario: 10H:30</span>
          <span className="text-xs text-zinc-600">Seg | Terc | Quart | Quin | Sext</span>
       </div>

        <div className="h-10 structor-details flex gap-2 items-center w-full">
          <img  className="rounded-full w-8" src={imageUser} alt="" />
          <div className="flex flex-col gap-0 flex-1">
            <div className="course-structor text-xs">{structor}</div>
            <div className="structor-about  text-xs text-zinc-600">{structor_about}</div>
          </div>
        </div>
      </div>
   
    </div>
  );
}