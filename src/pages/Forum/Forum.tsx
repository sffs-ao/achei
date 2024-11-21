import CardForum, { ModalForumSign } from "@/components/CardForum";
import { GET_CLASSES_PUBLIC, GET_MY_CLASSES } from "@/lib/API";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function ForumPage() {
    const [myClasses, setMyClasses] = useState([])
    const[openModal, setOpenModal] = useState(false)
    const[seletedCourse, setSelectedCourse] = useState(null)
    const navigate = useNavigate()
    const {data, isPending} = useQuery({
        queryKey: ["get-public-courses"],
        queryFn: GET_CLASSES_PUBLIC,
    })
    const {data: getMyClasses, isPending: isLoadingClass} = useQuery({
        queryKey: ["get-my-data"],
        queryFn: GET_MY_CLASSES,
    })
    useEffect(() => {
        if(getMyClasses){
            console.log(getMyClasses[0].registrations)
            setMyClasses(getMyClasses[0].registrations)
        }
    }, [getMyClasses])

    if(data)
        console.log("Data ",data )

    function handleClick(id) {
        const isRegisted = myClasses.find((item) => item.course.course_id === id)
        if(isRegisted)
          navigate(`/portal/forum/${id}`)
        else{
            setSelectedCourse(id)
            setOpenModal(true)
        }
            
    }
    return (
        <div>
            <ModalForumSign id={seletedCourse} openModal={openModal} setOpenModal={setOpenModal}/>
            <h1 className="text-2xl font-bold">Fórum</h1>
            <p>Explore as nossas comunidades</p>
            <h1 className="font-semibold mt-10">Todos os fóruns</h1>
            <div className="mt-2 grid gap-2 md:grid-cols-2 lg:grid-cols-3">
                {data?.courses.map((forum: any) => (
                    <CardForum handleClick={handleClick} id={forum.id} key={forum.id} title={forum.course_name} />
                ))}
            </div>
        </div>
    )
}