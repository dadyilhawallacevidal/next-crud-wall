import style from "@/styles/ToggleButton.module.css";

interface BotaoSwitch{
    tipoInterface : string;
    setInterface: () => void;
}

export default function BotaoSwitch(props: BotaoSwitch) {
    return(
        <label className={style.switch} htmlFor="buttonSwitch">
            <input id="buttonSwitch" type="checkbox" checked={props.tipoInterface === "semModal" ? false : true} onChange={props.setInterface}/>
                <span className={`${style.slider} ${style.round}`}></span>
        </label>
    );
}