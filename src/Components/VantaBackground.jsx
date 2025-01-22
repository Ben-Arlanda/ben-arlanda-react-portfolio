import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import VANTA from "vanta/dist/vanta.fog.min";

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
					highlightColor: 0x2c00ff,
					midtoneColor: 0x10111,
					baseColor: 0x6041e,
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
