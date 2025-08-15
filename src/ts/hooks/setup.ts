import { libWrapper } from "@static/lib/shim.ts";
import { Listener } from "./index.ts";
import { MODULE_ID } from "../constants.ts";
import { AmbientLight } from "@client/canvas/placeables/_module.mjs";

const Setup: Listener = {
    listen(): void {
        Hooks.once("setup", () => {
            if (BUILD_MODE === "development") {
                CONFIG.debug.hooks = true;
            }

            libWrapper.register(
                MODULE_ID,
                "foundry.canvas.placeables.AmbientLight.prototype._canDragLeftStart",
                function (
                    this: AmbientLight,
                    _wrapped: (...args: any) => void,
                    ...args: any
                ) {
                    // NOTE Taken and simplifed from placeable-object.mjs.
                    // It doesn't have a "locked" flag
                    if (game.paused && !game.user.isGM) {
                        if (args.notify)
                            ui.notifications.warn("GAME.PausedWarning", {
                                localize: true,
                            });
                        return false;
                    }

                    return true;
                },
                "OVERRIDE",
            );
        });
    },
};

export { Setup };
