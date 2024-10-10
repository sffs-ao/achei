import imageUser from "./../../assets/user.webp"
interface CourseCardProps {
    level: string;
    structor: string;
    course: string;
    structor_about: string;
    imageCourse: any;
    is_my?:boolean,
    price: string
}
export default function CourseCardPublic({
  level,
  structor,
  course,
  structor_about,
  imageCourse,
  is_my = false,
  price
}: CourseCardProps) {
  return (
    <div className="relative border  shadow-sm rounded-md overflow-auto flex flex-col bg-white hover:bg-zinc-100">
      {is_my && <span className="course-state absolute top-2 right-2 bg-yellow-400 text-black rounded-sm p-2 text-[10px]">Estudando</span>}
       <div className="flex flex-col p-2 gap-2">
        <div className=" text-sm font-bold">{course}</div>
       
       <div className="flex flex-col">
         <span className="text-xs text-zinc-600"> Preco: <span className="text-green-700 font-bold">{price}</span>.00 kz</span>
          <span className="text-xs text-zinc-600">Nivel: {level}</span>
       </div>

        <div className="h-10 flex gap-2 items-center w-full">
          <img  className="rounded-full w-8" src={imageUser} alt="" />
          <div className="flex flex-col gap-0 flex-1">
            <div className=" text-xs">Formador</div>
            <div className="structor-about  text-xs text-zinc-600">Especialista na area</div>
          </div>
        </div>
      </div>
   
    </div>
  );
}