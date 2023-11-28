import { EnumType } from "typescript";

interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray';
    children: any;
    className?: string;
    onClick?: () => void;
}
export default function Botao(props: BotaoProps) {
    const cor: string = props.cor ?? 'gray';
    enum classCor {
        blue = `bg-gradient-to-r from-blue-400 to-blue-700`,
        green = `bg-gradient-to-r from-green-400 to-green-700`,
        gray = 'bg-gradient-to-r from-gray-400 to-gray-700'
    }
    return (
        <button onClick={props.onClick} className={`    
             ${classCor[cor as keyof typeof classCor]}
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    );
}