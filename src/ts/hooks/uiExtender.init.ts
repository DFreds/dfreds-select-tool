import { MODULE_ID } from "../constants.ts";
import { Listener } from "./index.ts";

type LayerName = "lighting" | "sounds" | "templates";

type SceneControlName = "lighting" | "sounds" | "measure";

const UiExtenderInit: Listener = {
    listen(): void {
        Hooks.once("uiExtender.init", (uiExt: any) => {
            const uiExtender = uiExt as UiExtender;

            // TODO handle notes specifically - select tool exists but doesn't allow multiple selection
            const mapping: Record<SceneControlName, LayerName> = {
                measure: "templates",
                lighting: "lighting",
                sounds: "sounds",
            };

            Object.entries(mapping).forEach(([key, value]) => {
                const sceneControlTool: SceneControlTool = {
                    // NOTE: Name must be select, because Foundry VTT expects
                    // the active tool to be named select if it is for selection
                    name: `select`,
                    title: game.i18n.format(
                        EN_JSON.SelectTool.Controls.Select,
                        {
                            layerName: value.capitalize(),
                        },
                    ),
                    icon: "fas fa-expand",
                    visible: true,
                };

                uiExtender.registerSceneControl({
                    moduleId: MODULE_ID,
                    name: key as SceneControlName,
                    tool: {
                        ...sceneControlTool,
                        onClick: () => {},
                    },
                    position: 0,
                });
            });
        });
    },
};

export { UiExtenderInit };
