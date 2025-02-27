import { CanvasReady } from "./canvasReady.ts";
import { UiExtenderInit } from "./uiExtender.init.ts";
import { RefreshPlaceable } from "./refreshPlaceable.ts";

interface Listener {
    listen(): void;
}

const HooksSelectTool: Listener = {
    listen(): void {
        const listeners: Listener[] = [
            UiExtenderInit,
            CanvasReady,
            RefreshPlaceable,
        ];

        for (const listener of listeners) {
            listener.listen();
        }
    },
};

export { HooksSelectTool };
export type { Listener };
