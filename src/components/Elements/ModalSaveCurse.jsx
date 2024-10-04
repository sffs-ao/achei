import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { courseSchema, ESCOLARIDADE, flashMessage, userSchema } from "../../utils/lib";
import * as Dialog from "@radix-ui/react-dialog";
import { Previligies } from "./Previligies";
import { POST_INSTRUCTOR } from "../../utils/API";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";



export const ModalSaveCurse = () => {
    const [documents, setDocuments] = useState([])

    const [isBilheteOn, setIsBilheteOn] = useState(false)
    const [isPassaPortOn, setIsPassaportOn] = useState(false)
    const [isCedulaOn, setIsCedulaOn] = useState(false)

    const { formState, ...form } = useForm({
        resolver: zodResolver(courseSchema),
        defaultValues: {
            level: "Basic"
        }
    });
    async function handleSubmitIntruct(data) {

        try {
          console.log(data)
            //  const response = await POST_INSTRUCTOR(data)
            flashMessage("Cadastrado com sucesso")
            form.reset()
        } catch (error) {
            flashMessage("Nao foi possivel cadastrar", "ERROR")
            console.log(error)
        }

    }
    console.log(formState.errors)

    function changeDocument(value) {
        const find = documents.find((valueNew) => valueNew === value)
        if (find) {
            setDocuments(documents.filter((values) => values != value))
        } else {
            setDocuments([...documents, value])
        }

        form.setValue("id_document", JSON.stringify(documents))

        switch (value) {
            case "Bilhete":
                setIsBilheteOn(!isBilheteOn)
                break;
            case "Passaport":
                setIsPassaportOn(!isPassaPortOn)
                break;
            case "Cedula":
                setIsCedulaOn(!isCedulaOn)
                break;
            default:
                break;
        }
    }
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Novo curso
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/30 z-40" />
                <Dialog.Content className="fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded shadow-lg w-full max-w-[800px]">
                    <Dialog.Title className="text-lg font-semibold">Cadastro Novo Curso</Dialog.Title>
                    <Dialog.Close asChild>
                        <button className="absolute top-2 text-2xl right-2 text-gray-600 hover:text-gray-900">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </Dialog.Close>


                    <FormProvider {...form}>
                        <form onSubmit={form.handleSubmit(handleSubmitIntruct)} className="mt-4 flex flex-col items-start w-full gap-2">
                            <div className="w-full">
                                <label className="block">Nome:</label>
                                <input placeholder="Nome do curso" {...form.register("course_name")} type="text" className=" block w-full p-2 border border-gray-300 rounded " />
                                <div className="text-red-700">
                                    {formState.errors.name && (
                                        <span>{formState.errors.name.message}</span>
                                    )}
                                </div>
                            </div>
                            <div className="w-full">
                                <label className="block">Descrição:</label>
                                <input placeholder="Descrição do curso..." type="text" {...form.register("description")} className=" block w-full p-2 border border-gray-300 rounded" />
                                <div className="text-red-700">
                                    {formState.errors.email && (
                                        <span>{formState.errors.email.message}</span>
                                    )}
                                </div>
                            </div>
                            <div className="w-full">
                                <label className="block">Duracao:</label>
                                <input placeholder="Duração do curso.." type="number" {...form.register("duration")} className=" block w-full p-2 border border-gray-300 rounded" />
                                <div className="text-red-700">
                                    {formState.errors.email && (
                                        <span>{formState.errors.email.message}</span>
                                    )}
                                </div>
                            </div>
                            <div className="w-full grid grid-cols-2 gap-1 items-center">
                                <div>
                                    <label className="block">Preço:</label>
                                    <input type="number" {...form.register("price")} className=" block w-full p-2 border border-gray-300 rounded" />
                                    <div className="text-red-700">
                                        {formState.errors.user_title && (
                                            <span>{formState.errors.user_title.message}</span>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <label className="block">Nivel </label>
                                    <select onChange={(e) => form.setValue("level", e.target.value)} className=" block w-full p-2 border border-gray-300 rounded" >
                                        <option selected value="Basic">Básico</option>
                                        <option value="Intermediate">Intermediario</option>
                                        <option value="Advanced" >Avançado</option>
                                    </select>
                                </div>
                            </div>
                            <div className="w-full flex flex-col">
                                <h1 className="text-xs mt-2 mb-2">Pré-requisitos</h1>
                                <div className="grid grid-cols-2 mb-2 items-center w-full gap-1">

                                    <div className="flex  flex-col">
                                        <label htmlFor="">Escolaridade</label>
                                        <select onChange={(e) => form.setValue("prerequisites.Escolaridade", e.target.value)} className=" block w-full p-2 border border-gray-300 rounded" >
                                            {
                                                ESCOLARIDADE.map((escola) => (
                                                    <option value={escola.value} >{escola.value}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                                <label>Documentos Necessários</label>
                                <div className="flex gap-4 ">

                                    <div htmlFor="" className="flex items-center gap-1 ">
                                        <button onClick={() => changeDocument("Bilhete")} className={`${isBilheteOn ? "bg-green-300 text-zinc-600 " : "bg-zinc-200"} p-2 rounded-md text-xs flex items-center gap-2`}>Bilhete <CheckCircle2 size={14} /> </button>
                                    </div>
                                    <div htmlFor="" className="flex items-center gap-1 ">
                                        <button onClick={() => changeDocument("Passaport")} className={`${isPassaPortOn ? "bg-green-300 text-zinc-600 " : "bg-zinc-200"} p-2 rounded-md text-xs flex items-center gap-2`}>Passaporte <CheckCircle2 size={14} /> </button>
                                    </div>
                                    <div htmlFor="" className="flex items-center gap-1 ">
                                        <button onClick={() => changeDocument("Cedula")} className={`${isCedulaOn ? "bg-green-300 text-zinc-600 " : "bg-zinc-200"} p-2 rounded-md text-xs flex items-center gap-2`}>Cedula <CheckCircle2 size={14} /> </button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col w-full">
                                <label htmlFor="">Observações</label>
                                <textarea {...form.register("observations")} type="text" placeholder="Observações" className=" block  p-2 border border-gray-300 rounded w-full" />
                            </div>

                            <div className="w-full flex items-center justify-end gap-2">
                                <Dialog.Close asChild>
                                    <button className="px-4 py-2 ring-zinc-300 ring-1 rounded ">Cancelar</button>
                                </Dialog.Close>
                                <button type="submit" className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-600">
                                    Salvar
                                </button>
                            </div>
                        </form>
                    </FormProvider>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};