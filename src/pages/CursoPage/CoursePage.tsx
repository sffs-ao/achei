import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";


export default function CoursePage()
{
    return(
        <div className="w-full  bg-zinc-100">
            <div className="relative bg-[url('/login.jpg')] h-52 w-full bg-center bg-cover flex flex-col justify-center pl-4 brightness-75
            ">
                 <h1 className="text-2xl text-white font-semibold">Cuso de ingles</h1>
                 <p className="font-semibold text-white">Aprenda a falar ingles e tranforme sua carreira profissional</p>
            </div>
            <div className="flex flex-col md:flex-row mt-4 items-start gap-4 w-full">
                    <div className="md:flex-1 flex flex-col gap-2">
                       <div className="border shadow-sm rounded-sm p-4 bg-white">
                            <h1 className="font-semibold">Modulo 1</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repudiandae soluta sapiente molestias quisquam voluptate numquam laudantium, quidem non cumque debitis atque sit ipsam quos autem ipsum, porro error animi.
                            </p>
                       </div>

                       <div className="border shadow-sm rounded-sm p-4 bg-white">
                            <h1 className="font-semibold">Modulo 2</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repudiandae soluta sapiente molestias quisquam voluptate numquam laudantium, quidem non cumque debitis atque sit ipsam quos autem ipsum, porro error animi.
                            </p>
                       </div>
                    </div>

                    <Card className="w-full md:w-80">
                        <CardHeader>
                            <h1 className="font-semibold">Curso de ingles</h1>                        
                        </CardHeader>
                        <CardContent>
                            por apenas: <span className="text-green-800 font-bold">20.000 kz</span>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">Inscrever-se</Button>
                        </CardFooter>
                    </Card>
           
            </div>
        </div>
    )
}