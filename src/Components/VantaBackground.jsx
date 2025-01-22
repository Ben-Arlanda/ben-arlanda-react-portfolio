import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import VANTA from "vanta/dist/vanta.clouds.min";

const VantaFogBackground = () => {
	const [vantaEffect, setVantaEffect] = useState(null);
	const vantaRef = useRef(null);

	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(
				VANTA({
					el: vantaRef.current,
					THREE,
					mouseControls: true,
					touchControls: true,
					gyroControls: false,
					minHeight: 200.0,
					minWidth: 200.0,
					scaleMobile: 0.8,
					skyColor: 0x6f6feb,
					cloudColor: 0xa7c7e6,
					cloudShadowColor: 0x3c7ec5,
					sunColor: 0xfc991c,
					sunGlareColor: 0xf7612f,
					sunlightColor: 0xf79533,
				}),
			);
		}
		return () => {
			if (vantaEffect) vantaEffect.destroy();
		};
	}, [vantaEffect]);

	return (
		<div
			ref={vantaRef}
			className="fixed top-0 left-0 w-full h-screen"
			id="vanta-background"
		/>
	);
};

export default VantaFogBackground;
