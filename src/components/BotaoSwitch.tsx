import style from "@/styles/ToggleButton.module.css";

export default function BotaoSwitch() {
    return(
        <label className={style.switch}>
            <input type="checkbox" />
                <span className={`${style.slider} ${style.round}`}></span>
        </label>
    );
}