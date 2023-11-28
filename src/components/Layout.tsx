import React from "react";
import Titulo from "./Titulo";

interface LayoutProps {
    titulo: string;
    children: any
}

export default function Layout(props: LayoutProps){
    var children : any;
    // console.log(props.children.length);
    if(props.children.length !== undefined){
        children = props.children.map(
            (child: any, i : any) => React.cloneElement((child), {key: i})
        );
    }
    else{
        children = React.cloneElement((props.children));
    }
    return(
        <div className={`
            flex flex-col w-2/3
            bg-white text-gray-800
            rounded-md
        `}>
            <Titulo>
                {props.titulo}
            </Titulo>
            <div className="p-6">
                {
                    props.children
                }
            </div>
        </div>
    );
}