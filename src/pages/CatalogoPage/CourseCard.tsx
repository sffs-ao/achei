import imageUser from "./../../assets/user.webp"
interface CourseCardProps {
    level: string;
    structor: string;
    course: string;
    structor_about: string;
    course_state: string;
    imageCourse: any;
    is_my?:boolean
}
export default function CourseCard({
  level,
  structor,
  course,
  structor_about,
  course_state,
  imageCourse,
  is_my = false
  
}: CourseCardProps) {
  return (
    <div className="relative border shadow-sm rounded-sm overflow-auto">
      {is_my && <span className="course-state absolute top-2 left-2 bg-yellow-400 text-black rounded-sm p-2 text-[10px]">Estudando</span>}
    <img src={imageCourse} alt="" className="h-40 object-cover w-full" />
      <div className="course-details flex flex-col p-2">
        <div>
          <div className="course-level font-light text-xs">{level}</div>
        </div>
        <div className="course-name text-sm font-bold">{course}</div>
       
        <div className="h-20 structor-details flex gap-2 items-center w-full">
          <img  className="rounded-full w-10" src={imageUser} alt="" />
          <div className="flex flex-col gap-1 flex-1">
            <div className="course-structor text-sm">{structor}</div>
            <div className="structor-about  text-xs text-zinc-600">{structor_about}</div>
          </div>
        </div>
      </div>
   
    </div>
  );
}