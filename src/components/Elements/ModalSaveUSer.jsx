import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { flashMessage, userSchema } from "../../utils/lib";
import * as Dialog  from "@radix-ui/react-dialog";
import { Previligies } from "./Previligies";
import { POST_INSTRUCTOR } from "../../utils/API";

export const ModalSaveUser = () => {
    const {formState,...form} = useForm({
      resolver: zodResolver(userSchema),
      defaultValues: {user_type: 3, account_status: 0, 
        user_title: "",
        privileges: {
          users: {
            get: 0, // Valor padrão para o privilégio "get" dos usuários
            store: 0, // Valor padrão para o privilégio "store" dos usuários
            put: 0, // Valor padrão para o privilégio "put" dos usuários
            delete: 0, // Valor padrão para o privilégio "delete" dos usuários
          },
          instructors: {
            get: 0, // Valor padrão para o privilégio "get" dos instrutores
            store: 0, // Valor padrão para o privilégio "store" dos instrutores
            put: 0, // Valor padrão para o privilégio "put" dos instrutores
            delete: 0, // Valor padrão para o privilégio "delete" dos instrutores
          },
          enrollments: {
            get: 0,
            store: 0,
            put: 0,
            delete: 0,
          },
          courses: {
            get: 0,
            store: 0,
            put: 0,
            delete: 0,
          },
          shifts: {
            get: 0,
            store: 0,
            put: 0,
            delete: 0,
          },
          'course-contents': {
            get: 0,
            store: 0,
            put: 0,
            delete: 0,
          },
          'summary-calendar': {
            get: 0,
            store: 0,
            put: 0,
            delete: 0,
          },
          classes: {
            get: 0,
            store: 0,
            put: 0,
            delete: 0,
          },
          'class_sessions': {
            get: 0,
            store: 0,
            put: 0,
            delete: 0,
          },
          payments: {
            get: 0,
            store: 0,
            put: 0,
            delete: 0,
          },
          grades: {
            get: 0,
            store: 0,
            put: 0,
            delete: 0,
          },
          products: {
            get: 0,
            store: 0,
            put: 0,
            delete: 0,
          },
          audits: {
            get: 0,
            store: 0,
            put: 0,
            delete: 0,
          },
        }
      }
    });
    async function handleSubmitIntruct(data) {
      console.log("salvando ",data)
      try {
        const response = await POST_INSTRUCTOR(data)
        flashMessage("Cadastrado com sucesso")
        form.reset()
      } catch (error) {
            flashMessage("Nao foi possivel cadastrar","ERROR")
            console.log(error)
      }
       
        
    }
    console.log(formState.errors)
    return (
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Cadastrar Usuario
          </button>
        </Dialog.Trigger>
  
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/30 z-40" />
          <Dialog.Content className="fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded shadow-lg w-full max-w-[600px]">
            <Dialog.Title className="text-lg font-semibold">Cadastro Novo Usuario</Dialog.Title>
            <Dialog.Close asChild>
              <button className="absolute top-2 text-2xl right-2 text-gray-600 hover:text-gray-900">
                <span aria-hidden="true">&times;</span>
              </button>
            </Dialog.Close>
            <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(handleSubmitIntruct)} className="mt-4 flex flex-col items-start w-full gap-2">
                <div className="w-full">
                  <label className="block">Nome:</label>
                  <input {...form.register("name")} type="text" className=" block w-full p-2 border border-gray-300 rounded " />
                        <div className="text-red-700">
                    {formState.errors.name && (
                      <span>{formState.errors.name.message}</span>
                    )}
                  </div>
                </div>
             <div className="w-full">
             <label className="block">E-mail:</label>
             <input type="email" {...form.register("email")} className=" block w-full p-2 border border-gray-300 rounded"  />
             <div className="text-red-700">
              {formState.errors.email && (
                <span>{formState.errors.email.message}</span>
              )}
            </div>
             </div>
  
            <div className="w-full hidden" >
              <label className="block">Título do Formador:</label>
              <input type="text" {...form.register("user_title")} className=" block w-full p-2 border border-gray-300 rounded" required />
              <div className="text-red-700">
                {formState.errors.user_title && (
                  <span>{formState.errors.user_title.message}</span>
                )}
            </div>
            </div>
             <div className="w-full" >
              <label className="block">Tipo de Usuário: </label>
                <select onChange={(e)=>form.setValue("user_type", e.target.value)} className=" block w-full p-2 border border-gray-300 rounded" required>
                  <option value="1">Administrador Geral</option>
                  <option value="2">Gestor</option>
                  <option value="3" >Formador</option>
                </select>
            </div>
              <Previligies />
  
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
   