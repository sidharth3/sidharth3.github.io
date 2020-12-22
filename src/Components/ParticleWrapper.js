import React from 'react';
import Particles from 'react-particles-js';

const ParticlesWrapper = () => (
    <Particles 
        params={{ 
            "particles": {
                "color": "49cbfc",
                "number": {
                    "value": 100,
                },
                "size": {
                    "value": 3.5,
                    "random": true,
                    "anim": {
                        "speed": 4,
                        "size_min": 0.3
                    }
                },
                "line_linked": {
                    "enable": false,
                    "width": 0.5,
                    "color": "49cbfc",
                    "distance": 100,
                    "opacity":1
                },
                "move": {
                    "random": true,
                    "speed": 1.2,
                    "out_mode": "out",
                    "direction": "top"
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "repulse"
                    }
                },
                "modes": {
                    "bubble": {
                        "distance": 50,
                        "duration": 2,
                        "size": 0,
                        "opacity": 0
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 4
                    },
                    "grab": {
                        "distance": 400,
                        "duration": 4
                    }
                }
            } 
        }}
        style={{margin:0, position:'absolute', top:0}}
    /> 
)

export default ParticlesWrapper;