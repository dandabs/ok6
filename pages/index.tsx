import React, { useState } from "react";

import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";

const initialize = (instance) => {
    loadStarsPreset(instance);
};

export default function Page() {
    const [irish, setIrish] = useState(false);

    const options = {
        preset: "stars",
        fullScreen: { enable: false },
        background: {
            opacity: 0
        },
        particles: {
            color: "#fff"
        },
        fpsLimit: 30
    };

    return <>
        <Particles options={options} init={initialize} className="w-full h-[100vh] absolute left-0 top-0 opacity-50 -z-50" />
        <div className="mt-16">
            <h1 className="text-[8rem] font-black" onClick={()=>{if(irish)setIrish(false);else setIrish(true);}}>{!irish?"Daniel Adams":"Dónall Mac Ádhaimh"}</h1>
            <h2 className="text-3xl text-gray-400">{getAge("2005-07-05")}-year-old {!irish?"Northern":null} Irish full-stack developer</h2>
        </div>
    </>
}

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
