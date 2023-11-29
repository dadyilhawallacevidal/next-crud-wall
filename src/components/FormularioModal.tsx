"use client";
import { useEffect, useRef, useState } from "react";
import Formulario from "./Formulario";

interface FormularioModalProps {
    children: any;
};

export default function FormularioModal(props: FormularioModalProps) {

    const dialogRef = useRef<null | HTMLDialogElement>(null);
    const [showDialog, setShowDialog] = useState("n");
    useEffect(() => {
        if(showDialog === "y"){
            
        }
        else{
            
        }
    }, [showDialog]);

    const dialog: JSX.Element | null = showDialog === "y" ?
        (
            <dialog ref={dialogRef}>
                <div>
                    <h1>Cadastrar Cliente</h1>
                </div>
                <div>
                    {props.children}
                </div>
            </dialog>
        )
        :
        (null);

    return dialog;