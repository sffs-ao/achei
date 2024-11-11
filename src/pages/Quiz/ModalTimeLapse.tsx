import { Dialog, DialogContent, DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { PencilRuler, TimerOff } from "lucide-react";
import DonutChart from "../Donot";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function ModalTimeLapse({
    openModal,
    setOpenModal,
    id,
    class_id,
}: { openModal: boolean, setOpenModal: (value: boolean) => void, id: string, class_id: string }) {

    return (
        <Dialog open={openModal} onOpenChange={setOpenModal} modal={true}>
            <DialogContent onInteractOutside={(e) => {
                e.preventDefault();
            }}
                onEscapeKeyDown={(e) => e.preventDefault()}
                className="max-w-[520px] w-[70%]">
                <DialogHeader className="flex flex-col items-center justify-center">
                    <TimerOff width={44} className="text-red-600" />
                    <h1 className="font-bold text-md text-center text-3xl">Tempo Esgostado</h1>
                </DialogHeader>
                <Button onClick={() => window.location.reload()}>Tentar novamente!</Button>
                <DialogFooter>
                    <div className="flex gap-2 items-end justify-center w-full">
                        <Link to={`/portal/classroom/${class_id}`} className="w-full" ><Button className="w-full" onClick={() => setOpenModal(false)} variant={"outline"}>Desistir</Button></Link>
                    </div>
                </DialogFooter>
            </DialogContent>

        </Dialog>
    )
}
