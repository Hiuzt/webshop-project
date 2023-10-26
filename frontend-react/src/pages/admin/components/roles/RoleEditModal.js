import { Dialog, Switch, Transition } from '@headlessui/react'
import React, { Fragment, useEffect, useReducer, useState } from 'react'
import useAdmin from '../../../../customHooks/useAdmin'
import { updateRole } from '../../../../services/adminService';

const RoleEditModal = (props) => {

    const { roles, setRoles } = useAdmin();

    const initialFormState = {
        name: roles?.roles[props?.roleIndex]?.name,
        login_acp: roles?.roles[props?.roleIndex]?.login_acp,
        view_o_site: roles?.roles[props?.roleIndex]?.view_o_site || false,
        get_users: roles?.roles[props?.roleIndex]?.get_users || false,
        create_user: roles?.roles[props?.roleIndex]?.create_user || false,
        delete_user: roles?.roles[props?.roleIndex]?.delete_user || false,
        update_user: roles?.roles[props?.roleIndex]?.update_user || false,
        create_promo: roles?.roles[props?.roleIndex]?.create_promo || false,
        delete_promo: roles?.roles[props?.roleIndex]?.delete_promo || false,
        create_product: roles?.roles[props?.roleIndex]?.create_product || false,
        delete_product: roles?.roles[props?.roleIndex]?.delete_product || false,
        update_product: roles?.roles[props?.roleIndex]?.update_product || false,
        view_acp: roles?.roles[props?.roleIndex]?.view_acp || false,
    }

    const [rolesValue, setRolesValue] = useState(initialFormState)

    const saveRoles = () => {
        updateRole(roles?.roles[props.roleIndex]._id, rolesValue).then(function(response) {
            props.setOpen(false)
            let newArray = [...roles?.roles]
            newArray[props?.roleIndex]= response?.role

            setRoles({
                loadedContext: true,
                roles: newArray
            })      
        })
    }


    return (

        <Transition.Root show={props.isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={props.setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child as={Fragment} enter="transform transition ease-in-out duration-500 sm:duration-700" enterFrom="translate-x-full" enterTo="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leaveFrom="translate-x-0" leaveTo="translate-x-full">
                                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                                    <Transition.Child as={Fragment} enter="ease-in-out duration-500" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in-out duration-500" leaveFrom="opacity-100" leaveTo="opacity-0">
                                        <div className="flex h-full flex-col  overflow-y-scroll bg-white py-6 shadow-xl">
                                            <div className="px-4 pb-6 sm:px-6 border-b flex justify-between">
                                                <Dialog.Title className="text-xl font-bold leading-6 text-gray-900 ">
                                                    Edit role
                                                </Dialog.Title>
                                                <button type="button" className="relative rounded-md text-gray-300 hover:text-white fill-gray-400 hover:fill-gray-600" onClick={() => props.setOpen(false)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                                                </button>
                                            </div>
                                            <div className="flex flex-col relative px-4 sm:px-6 divide-y border-b">
                                                <div className="my-3">
                                                    <label className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                                                    <input type="text" value={rolesValue?.name} onChange={(e) => {setRolesValue({...rolesValue, "name": e.target.value})}} name="name" className="bg-gray-50 border leading-6 border-gray-300 text-gray-900 sm:text-xs rounded-lg focus:ring-blue-600 outline-none focus:border-blue-600 block w-full p-2.5" />
                                                </div>
                                                {Object.keys(rolesValue).map((item, i) => (
                                                    <>
                                                        {item !== "_id" && item !== "__v" && item!=="name" && (
                                                            <>
                                                                <CreateSwitch onChange={(e) => {                                                        
                                                                    setRolesValue({
                                                                        ...rolesValue,
                                                                        [item]: e
                                                                    })                                                        
                                                                }} currentValue={rolesValue[`${item}`]} id="item" switchName={item.replace("_", " ")} />
                                                            </>
                                                        )}
                                                    </>
                                                ))}                                             
                                            </div>
                                            <div className="ml-auto relative mt-6 px-4 sm:px-6">
                                                <button className="ring-1 ring-inset ring-gray-300 px-3 py-2 mx-2 rounded-lg text-gray-900 text-sm font-semibold">Cancel</button>
                                                <button onClick={(e) => saveRoles()} className=" bg-blue-600 px-3 py-2 rounded-lg text-white text-sm font-semibold" >Save</button>
                                            </div>

                                        </div>

                                    </Transition.Child>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

function CreateSwitch(props) {
    return (
        <div className="flex items-center capitalize">
            {props.switchName}

            <Switch checked={props.currentValue} onChange={(e) => props.onChange(e)} className="switch-bg" id={props.id}>
                <span aria-hidden="true" className="switch-circle">
                    <div className="flex items-center justify-center h-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="transition duration-200 ui-checked:opacity-0 fill-gray-500" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="transition duration-100 absolute ui-checked:opacity-100 ui-checked:fill-blue-600 opacity-0" height="1em" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                    </div>
                </span>
            </Switch>
        </div>

    )

}

export default RoleEditModal