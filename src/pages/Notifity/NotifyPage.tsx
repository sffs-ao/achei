import { Card, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function NotifyPage() {
    return (
        <div>
            <h1 className="font-semibold text-2xl">Notificações</h1>
            <div className="w-full h-1 bg-zinc-100 my-4"></div>

            <div className="flex flex-col gap-1">
                <Link to="">
                        <div className="bg-white h-16 flex items-center justify-start px-4 rounded rounded-b-none border shadow-sm ">
                            <p className="text-zinc-600">fulano de tal comentou na sua publicacao</p>
                        </div>
                </Link>
                <Link to="">
                        <div className="bg-white h-16 flex items-center justify-start px-4 rounded rounded-b-none border shadow-sm ">
                            <p className="text-zinc-600">fulano de tal comentou na sua publicacao</p>
                        </div>
                </Link>
                <Link to="">
                        <div className="bg-white h-16 flex items-center justify-start px-4 border shadow-sm ">
                            <p className="text-zinc-600">fulano de tal comentou na sua publicacao</p>
                        </div>
                </Link>
                <Link to="">
                        <div className="bg-white h-16 flex items-center justify-start px-4 rounded rounded-b-none border shadow-sm ">
                            <p className="text-zinc-600">fulano de tal comentou na sua publicacao</p>
                        </div>
                </Link>
                <Link to="">
                        <div className="bg-white h-16 flex items-center justify-start px-4 rounded rounded-b-none border shadow-sm ">
                            <p className="text-zinc-600">fulano de tal comentou na sua publicacao</p>
                        </div>
                </Link>
                <Link to="">
                        <div className="bg-white h-16 flex items-center justify-start px-4 rounded rounded-b-none border shadow-sm ">
                            <p className="text-zinc-600">fulano de tal comentou na sua publicacao</p>
                        </div>
                </Link>
                <Link to="">
                        <div className="bg-white h-16 flex items-center justify-start px-4 rounded rounded-t-none border shadow-sm ">
                            <p className="text-zinc-600">fulano de tal comentou na sua publicacao</p>
                        </div>
                </Link>
                
            </div> 

        </div>
    )
}