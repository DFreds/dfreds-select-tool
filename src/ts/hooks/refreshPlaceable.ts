import { Listener } from "./index.ts";

const RefreshPlaceable: Listener = {
    listen(): void {
        const placeables = [
            "AmbientSound",
            "AmbientLight",
            "MeasuredTemplate",
            "Note",
        ];

        for (const placeable of placeables) {
            Hooks.on(`refresh${placeable}`, (placeable: any) => {
                if (placeable.controlled) {
                    placeable.controlIcon.border.visible = true;
                }
            });
        }
    },
};

export { RefreshPlaceable };
