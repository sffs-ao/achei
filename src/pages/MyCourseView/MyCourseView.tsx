import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const summary = [
    {
        id: 1,
        "title": "introducao a gramatica do ingles",
    },
    {
        id: 2,
        "title": "Conjugacao do verbo to be",
    },
    {
        id: 3,
        "title": "Contagem de numeros",
    },
]

async function POST_MESSAGE(data:string) {
    const response = await fetch('http://localhost:3000/message', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({message: data})
     })
     const json = await response.json()
     return json
}
export default function MyCourseView() {
 const { id } = useParams<{ id: string }>(); 
 const[update, setUpdaet] = useState(false)
 

  const[messageList,setMessagesList] = useState<{message:string, sender:string}[]>([])

    useEffect(() => {
       async function firstMessage() {
            const message = await POST_MESSAGE('O que é o verbo to be')
            setMessagesList([...messageList, message])
            console.log(message)
       }
       if (!update){
            firstMessage()
            setUpdaet(true)
       }
       
    },[id])

    console.log(messageList)
    return (
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start">
            <div className="border shadow-sm rounded-sm md:flex-1 p-4 flex flex-col gap-4 min-h-[calc(100vh-150px)] overflow-y-auto ">
                    <div className="  h-[calc(100vh-200px)] overflow-y-auto">
                        <h1 className="text-lg font-bold">O que é o verbo to be</h1>
                        <div className=" ">

                            {
                                messageList.map((message, index)=> (
                                    <p key={index} className={`${message.sender === "me" ? "bg-green-900 text-zinc-100 " : "bg-zinc-100 text-zinc-800"} p-4 text-sm leading-loose rounded-sm`}>
                                        {message.message.replace("*", "").replace("**", "")}
                                    </p>
                                ))
                            }
                         </div>
                    </div>
                    <div className="h-10 ">
                        <form>
                            <Input className="focus-visible:ring-0 " type="text" placeholder="Pergunte algo" />
                        </form>
                    </div>            
            </div>
         
         
         
            <div className="flex flex-col w-full md:w-96 gap-2">
                <h1 className="font-bold text-lg">Conteúdo</h1>
                <Card>
                    <CardHeader>
                    <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Modulo 1</AccordionTrigger>
                        <AccordionContent>
                           <ul className="flex flex-col gap-0">
                            {
                                summary.map((item, index) => (
                                    <Link to={`/classroom/${item.id}`} key={index} className="hover:bg-zinc-100 p-2 rounded-sm"><li>{item.title}</li></Link>
                                ))
                            }
                           
                           </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Modulo 2</AccordionTrigger>
                        <AccordionContent>
                           <ul className="flex flex-col gap-0">
                                <Link to="" className="hover:bg-zinc-100 p-2 rounded-sm"><li>Introducao a gramatica</li></Link>
                                <Link to="" className="hover:bg-zinc-100 p-2 rounded-sm"><li>Verbo to be</li></Link>
                                <Link to="" className="hover:bg-zinc-100 p-2 rounded-sm"><li>Conjugacao do verbo</li></Link>
                                <Link to="" className="hover:bg-zinc-100 p-2 rounded-sm"><li> Introducao a gramatica</li></Link>
                           </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Modulo 3</AccordionTrigger>
                        <AccordionContent>
                           <ul className="flex flex-col gap-0">
                                <Link to="" className="hover:bg-zinc-100 p-2 rounded-sm"><li>Introducao a gramatica</li></Link>
                                <Link to="" className="hover:bg-zinc-100 p-2 rounded-sm"><li>Verbo to be</li></Link>
                                <Link to="" className="hover:bg-zinc-100 p-2 rounded-sm"><li>Conjugacao do verbo</li></Link>
                                <Link to="" className="hover:bg-zinc-100 p-2 rounded-sm"><li> Introducao a gramatica</li></Link>
                           </ul>
                        </AccordionContent>
                    </AccordionItem>
                    </Accordion>
                 </CardHeader>
                </Card>

            </div>
        </div>
    )
}