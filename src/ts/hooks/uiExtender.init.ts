import { MODULE_ID } from "../constants.ts";
import { buildItems } from "../toolclip-item-builder.ts";
import { Listener } from "./index.ts";

type LayerName = "lighting" | "sounds" | "templates";

type SceneControlName = "lighting" | "sounds" | "measure";

const UiExtenderInit: Listener = {
    listen(): void {
        Hooks.once("uiExtender.init", (uiExt: any) => {
            const uiExtender = uiExt as UiExtender;

            const mapping: Record<SceneControlName, LayerName> = {
                measure: "templates",
                lighting: "lighting",
                sounds: "sounds",
            };

            Object.entries(mapping).forEach(([sceneControlName, layerName]) => {
                const sceneControlTool: SceneControlTool = {
                    // NOTE: Name must be select, because Foundry VTT expects
                    // the active tool to be named select if it is for selection
                    name: `select`,
                    title: game.i18n.format(
                        EN_JSON.SelectTool.Controls.SelectHeading,
                        {
                            layerName: layerName.capitalize(),
                        },
                    ),
                    icon: "fa-solid fa-expand",
                    visible: true,
                    toolclip: {
                        src: `modules/dfreds-select-tool/toolclips/select-${layerName}.webm`,
                        heading: game.i18n.format(
                            EN_JSON.SelectTool.Controls.SelectHeading,
                            {
                                layerName: layerName.capitalize(),
                            },
                        ),
                        items: buildItems(
                            "selectAlt",
                            "selectMultiple",
                            "move",
                            "rotate",
                            "hud",
                            "edit",
                            "delete",
                        ),
                    },
                };

                uiExtender.registerSceneControl({
                    moduleId: MODULE_ID,
                    name: sceneControlName as SceneControlName,
                    tool: {
                        ...sceneControlTool,
                    },
                    position: 0,
                });
            });
        });
    },
};

export { UiExtenderInit };
