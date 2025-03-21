import { MODULE_ID } from "../constants.ts";
import { buildItems } from "../toolclip-item-builder.ts";
import { Listener } from "./index.ts";

type SceneControlName = "lighting" | "sounds" | "measure";

const UiExtenderInit: Listener = {
    listen(): void {
        Hooks.once("uiExtender.init", (uiExt: any) => {
            const uiExtender = uiExt as UiExtender;

            const lightingTool: SceneControlTool = {
                name: `select`,
                title: "SelectTool.Controls.LightingHeading",
                icon: "fa-solid fa-expand",
                visible: true,
                toolclip: {
                    src: `modules/dfreds-select-tool/toolclips/select-lighting.webm`,
                    heading: "SelectTool.Controls.LightingHeading",
                    items: buildItems(
                        "selectAlt",
                        "selectMultiple",
                        "move",
                        "rotate",
                        "onOff",
                        "edit",
                        "delete",
                    ),
                },
            };

            const soundsTool: SceneControlTool = {
                name: `select`,
                title: "SelectTool.Controls.SoundsHeading",
                icon: "fa-solid fa-expand",
                visible: true,
                toolclip: {
                    src: `modules/dfreds-select-tool/toolclips/select-sounds.webm`,
                    heading: "SelectTool.Controls.SoundsHeading",
                    items: buildItems(
                        "selectAlt",
                        "selectMultiple",
                        "move",
                        "rotate",
                        "onOff",
                        "edit",
                        "delete",
                    ),
                },
            };

            const templatesTool: SceneControlTool = {
                name: `select`,
                title: "SelectTool.Controls.TemplatesHeading",
                icon: "fa-solid fa-expand",
                visible: true,
                toolclip: {
                    src: `modules/dfreds-select-tool/toolclips/select-templates.webm`,
                    heading: "SelectTool.Controls.TemplatesHeading",
                    items: buildItems(
                        "selectAlt",
                        "selectMultiple",
                        "move",
                        "rotate",
                        "edit",
                        "hide",
                        "delete",
                    ),
                },
            };

            const mapping: Record<SceneControlName, SceneControlTool> = {
                measure: templatesTool,
                lighting: lightingTool,
                sounds: soundsTool,
            };

            Object.entries(mapping).forEach(
                ([sceneControlName, sceneControlTool]) => {
                    uiExtender.registerSceneControl({
                        moduleId: MODULE_ID,
                        name: sceneControlName as SceneControlName,
                        tool: sceneControlTool,
                        position: 0,
                    });
                },
            );
        });
    },
};

export { UiExtenderInit };
