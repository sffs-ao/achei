import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

export const Previligies = () => {

    const form = useFormContext();
    function handlePrevilegies(column, checked) {
        form.setValue(column, checked ? 1 : 0)
    }
    const[previlige, setPrevilige] = useState(false)

    function handleClickAll() {
      const schema = form.watch("privileges")
      const prev = !previlige
      setPrevilige(prev)
      Object.keys(schema).forEach(key => {
        handlePrevilegies(`privileges.${key}.get`, previlige) 
        handlePrevilegies(`privileges.${key}.store`, previlige) 
        handlePrevilegies(`privileges.${key}.put`, previlige) 
        handlePrevilegies(`privileges.${key}.delete`, previlige) 
      });    

    }

    
    console.log(form.watch("privileges.users.get"))
    return <Dialog.Root>
        <Dialog.Trigger asChild>
        <button className="px-4 py-2 bg-blue-800 text-white text-sm font-extrabold rounded hover:bg-blue-600 w-full hover:ring-4 hover:ring-blue-100 transition-all">
            Selecionar Previligios
        </button>
        </Dialog.Trigger>
        <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/30 z-50" />
            <Dialog.Content className="fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded shadow-lg
             w-full max-w-[600px] ">
              <Dialog.Title className="text-lg font-semibold">Selecionar Previligies</Dialog.Title>
              <Dialog.Close asChild>
                <button className="absolute text-2xl top-2 right-2 text-gray-600 hover:text-gray-900 ">
                  <span aria-hidden="true text-2xl">&times;</span>
                </button>
              </Dialog.Close>
              <div className="max-h-96 overflow-y-scroll">
                  <table className="table-content">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Visualizar</th>
                      <th>Adicionar</th>
                      <th>Editar</th>
                      <th>Apagar</th>
                      <th onClick={handleClickAll}>Todos</th>
                    </tr>
                  </thead>
                 <tbody>
                    <tr>
                      <td>
                        Usuarios
                      </td>
                      <td><input onChange={(e)=>handlePrevilegies("privileges.users.get", e.target.checked)} checked={form.watch("privileges.users.get")===1} type="checkbox" /></td>
                      <td><input onChange={(e)=>handlePrevilegies("privileges.users.store", e.target.checked)} checked={form.watch("privileges.users.store")===1} type="checkbox" /></td>
                      <td><input onChange={(e)=>handlePrevilegies("privileges.users.put", e.target.checked)} checked={form.watch("privileges.users.put")===1} type="checkbox" /></td>
                      <td><input onChange={(e)=>handlePrevilegies("privileges.users.delete", e.target.checked)} checked={form.watch("privileges.users.delete")===1} type="checkbox" /></td>

                    </tr>
                    <tr>
                      <td>
                        Formadores
                      </td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.instructors.get", e.target.checked)} checked={form.watch("privileges.instructors.get")===1} type="checkbox" /></td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.instructors.store", e.target.checked)} checked={form.watch("privileges.instructors.store")===1} type="checkbox" /></td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.instructors.put", e.target.checked)} checked={form.watch("privileges.instructors.put")===1} type="checkbox" /></td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.instructors.delete", e.target.checked)} checked={form.watch("privileges.instructors.delete")===1} type="checkbox" /></td>
                    </tr>
    
                    <tr>
                      <td>
                      Inscrições
                      </td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.enrollments.get", e.target.checked)} checked={form.watch("privileges.enrollments.get")===1} type="checkbox" /></td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.enrollments.store", e.target.checked)} checked={form.watch("privileges.enrollments.store")===1} type="checkbox" /></td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.enrollments.put", e.target.checked)} checked={form.watch("privileges.enrollments.put")===1} type="checkbox" /></td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.enrollments.delete", e.target.checked)} checked={form.watch("privileges.enrollments.delete")===1} type="checkbox" /></td>
                    </tr>
    
                    <tr>
                      <td>
                      Cursos
                      </td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.courses.get", e.target.checked)} checked={form.watch("privileges.courses.get")===1} type="checkbox" /></td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.courses.store", e.target.checked)} checked={form.watch("privileges.courses.store")===1} type="checkbox" /></td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.courses.put", e.target.checked)} checked={form.watch("privileges.courses.put")===1} type="checkbox" /></td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.courses.delete", e.target.checked)} checked={form.watch("privileges.courses.delete")===1} type="checkbox" /></td>
                    </tr>
                    <tr>
                      <td>
                      Pagamentos
                      </td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.payments.get", e.target.checked)} checked={form.watch("privileges.payments.get")===1} type="checkbox" /></td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.payments.store", e.target.checked)} checked={form.watch("privileges.payments.store")===1} type="checkbox" /></td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.payments.put", e.target.checked)} checked={form.watch("privileges.payments.put")===1} type="checkbox" /></td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.payments.delete", e.target.checked)} checked={form.watch("privileges.payments.delete")===1} type="checkbox" /></td>
                    </tr>
                    <tr>
                      <td>
                      Turnos
                      </td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.shifts.get", e.target.checked)} checked={form.watch("privileges.shifts.get")===1} type="checkbox" /></td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.shifts.store", e.target.checked)} checked={form.watch("privileges.shifts.store")===1} type="checkbox" /></td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.shifts.put", e.target.checked)} checked={form.watch("privileges.shifts.put")===1} type="checkbox" /></td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.shifts.delete", e.target.checked)} checked={form.watch("privileges.shifts.delete")===1} type="checkbox" /></td>
                    </tr>
    
                    <tr>
                      <td>
                      conteúdo do curso
                      </td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.course-contents.get", e.target.checked)} checked={form.watch("privileges.course-contents.get")===1} type="checkbox" /></td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.course-contents.store", e.target.checked)} checked={form.watch("privileges.course-contents.store")===1} type="checkbox" /></td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.course-contents.put", e.target.checked)} checked={form.watch("privileges.course-contents.put")===1} type="checkbox" /></td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.course-contents.delete", e.target.checked)} checked={form.watch("privileges.course-contents.delete")===1} type="checkbox" /></td>
                    </tr>
    
                    <tr>
                      <td>
                      calendário-resumo
                      </td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.summary-calendar.get", e.target.checked)} checked={form.watch("privileges.summary-calendar.get")===1} type="checkbox" /></td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.summary-calendar.store", e.target.checked)} checked={form.watch("privileges.summary-calendar.store")===1} type="checkbox" /></td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.summary-calendar.put", e.target.checked)} checked={form.watch("privileges.summary-calendar.put")===1} type="checkbox" /></td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.summary-calendar.delete", e.target.checked)} checked={form.watch("privileges.summary-calendar.delete")===1} type="checkbox" /></td>
                    </tr>
    
                    <tr>
                      <td>
                      Classe
                      </td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.classes.get", e.target.checked)} checked={form.watch("privileges.classes.get")===1} type="checkbox" /></td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.classes.store", e.target.checked)} checked={form.watch("privileges.classes.store")===1} type="checkbox" /></td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.classes.put", e.target.checked)} checked={form.watch("privileges.classes.put")===1} type="checkbox" /></td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.classes.delete", e.target.checked)} checked={form.watch("privileges.classes.delete")===1} type="checkbox" /></td>
                    </tr>
    
                    <tr>
                      <td>
                      sessões de classe
                      </td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.class_sessions.get", e.target.checked)} checked={form.watch("privileges.class_sessions.get")===1} type="checkbox" /></td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.class_sessions.store", e.target.checked)} checked={form.watch("privileges.class_sessions.store")===1} type="checkbox" /></td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.class_sessions.put", e.target.checked)} checked={form.watch("privileges.class_sessions.put")===1} type="checkbox" /></td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.class_sessions.delete", e.target.checked)} checked={form.watch("privileges.class_sessions.delete")===1} type="checkbox" /></td>
                    </tr>
             
                    
                    <tr>
                      <td>
                      Notas
                      </td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.grades.get", e.target.checked)} checked={form.watch("privileges.grades.get")===1} type="checkbox" /></td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.grades.store", e.target.checked)} checked={form.watch("privileges.grades.store")===1} type="checkbox" /></td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.grades.put", e.target.checked)} checked={form.watch("privileges.grades.put")===1} type="checkbox" /></td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.grades.delete", e.target.checked)} checked={form.watch("privileges.grades.delete")===1} type="checkbox" /></td>
                    </tr>
                     <tr>
                      <td>
                        produtos
                      </td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.products.get", e.target.checked)} checked={form.watch("privileges.products.get")===1} type="checkbox" /></td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.products.store", e.target.checked)} checked={form.watch("privileges.products.store")===1} type="checkbox" /></td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.products.put", e.target.checked)} checked={form.watch("privileges.products.put")===1} type="checkbox" /></td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.products.delete", e.target.checked)} checked={form.watch("privileges.products.delete")===1} type="checkbox" /></td>
                    </tr>
                    <tr>
                      <td>
                      auditorias
                      </td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.audits.get", e.target.checked)} checked={form.watch("privileges.audits.get")===1} type="checkbox" /></td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.audits.store", e.target.checked)} checked={form.watch("privileges.audits.store")===1} type="checkbox" /></td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.audits.put", e.target.checked)} checked={form.watch("privileges.audits.put")===1} type="checkbox" /></td>
                        <td><input onChange={(e)=>handlePrevilegies("privileges.audits.delete", e.target.checked)} checked={form.watch("privileges.audits.delete")===1} type="checkbox" /></td>
                    </tr>
              </tbody>
                  </table>
              </div>
              <div className="flex items-center justify-end mt-4">
                  <Dialog.Close asChild>
                    <button className="px-4 py-2 ring-zinc-300 ring-1 rounded ">Fechar</button>
                  </Dialog.Close>
              </div>
            
            </Dialog.Content>
          </Dialog.Portal>
      </Dialog.Root>
    }