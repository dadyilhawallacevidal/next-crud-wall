"use client";
import { useEffect, useRef, useState } from "react";
import Formulario from "./Formulario";
import { IconeFechar } from "./Icones";
import Titulo from "./Titulo";

interface FormularioModalProps {
    showDialog: string;
    titulo: string;
    children: any;
    closeDialog: () => void;
};

export default function FormularioModal(props: FormularioModalProps) {

    const dialogRef = useRef<null | HTMLDialogElement>(null);

    useEffect(() => {
        if (props.showDialog === "y") {
            dialogRef.current?.showModal();
        }
        else {
            dialogRef.current?.close();
        }
    }, [props.showDialog]);

    const dialog: JSX.Element | null = props.showDialog === "y" ?
        (
            <dialog ref={dialogRef} className=" bg-white text-gray-800
            rounded-md">
                <div className={`
                    flex flex-col
                `}>
                    <div className="flex justify-between ">
                        <h1 className="pl-5 py-2 text-2xl">{props.titulo}</h1>
                        <button className="bg-red-400 hover:bg-red-600 text-purple-50 rounded-md p-2 m-1" onClick={() => props.closeDialog()}>{IconeFechar}</button>
                    </div>
                    <hr className="border-2 border-purple-500"/>
                    <div className="p-6">
                        {props.children}
                    </div>
                </div>
            </dialog>
        )
        :
        (null);

    return dialog;
}