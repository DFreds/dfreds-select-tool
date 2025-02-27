import { Listener } from "./index.ts";

const CanvasReady: Listener = {
    listen(): void {
        Hooks.once("canvasReady", (canvas: DrawnCanvas) => {
            const lightLayer = canvas.getLayerByEmbeddedName("AmbientLight");
            if (lightLayer) {
                lightLayer.options.controllableObjects = true;
            }

            const soundLayer = canvas.getLayerByEmbeddedName("AmbientSound");
            if (soundLayer) {
                soundLayer.options.controllableObjects = true;
            }

            const templateLayer =
                canvas.getLayerByEmbeddedName("MeasuredTemplate");
            if (templateLayer) {
                templateLayer.options.controllableObjects = true;
            }
        });
    },
};

export { CanvasReady };
