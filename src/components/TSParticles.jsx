import React from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { useCallback } from "react";
import { loadSlim } from 'tsparticles-slim';

const TSParticles = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);

        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                // background: {
                //     color: {
                //         // value: 'linear-gradient(to right, #ff7e5f, #feb47b',
                //     },
                // },
                "fullScreen": {
                    "enable": true,
                    "zIndex": 0,
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "grab",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 2,
                        },
                        repulse: {
                            distance: 150,
                            duration: 0.5,
                        },
                    },
                },
                particles: {
                    color: {
                        value: ["#ffffff", "#ff0000", "#ff00ff", "#00ffff"],
                    },
                    links: {
                        color: ["#ffffff", "#ff0000", "#ff00ff", "#00ffff"],
                        distance: 150,
                        enable: true,
                        opacity: 0.2,
                        width: 0.5,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.2,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 2, max: 6 },
                    },
                },
                detectRetina: true,
            }}
        />
    )
}

export default TSParticles