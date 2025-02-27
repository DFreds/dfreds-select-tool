// NOTE: This is a copy of the common controls from the Foundry VTT source code (controls.js)
const commonControls = {
    create: {
        heading: "CONTROLS.CommonCreate",
        reference: "CONTROLS.ClickDrag",
    },
    move: {
        heading: "CONTROLS.CommonMove",
        reference: "CONTROLS.Drag",
    },
    edit: {
        heading: "CONTROLS.CommonEdit",
        reference: "CONTROLS.DoubleClick",
    },
    editAlt: {
        heading: "CONTROLS.CommonEdit",
        reference: "CONTROLS.DoubleRightClick",
    },
    sheet: {
        heading: "CONTROLS.CommonOpenSheet",
        reference: "CONTROLS.DoubleClick",
    },
    hide: {
        heading: "CONTROLS.CommonHide",
        reference: "CONTROLS.RightClick",
    },
    delete: {
        heading: "CONTROLS.CommonDelete",
        reference: "CONTROLS.Delete",
    },
    rotate: {
        heading: "CONTROLS.CommonRotate",
        content: "CONTROLS.ShiftOrCtrlScroll",
    },
    select: {
        heading: "CONTROLS.CommonSelect",
        reference: "CONTROLS.Click",
    },
    selectAlt: {
        heading: "CONTROLS.CommonSelect",
        content: "CONTROLS.ClickOrClickDrag",
    },
    selectMultiple: {
        heading: "CONTROLS.CommonSelectMultiple",
        reference: "CONTROLS.ShiftClick",
    },
    hud: {
        heading: "CONTROLS.CommonToggleHUD",
        reference: "CONTROLS.RightClick",
    },
    draw: {
        heading: "CONTROLS.CommonDraw",
        reference: "CONTROLS.ClickDrag",
    },
    drawProportionally: {
        heading: "CONTROLS.CommonDrawProportional",
        reference: "CONTROLS.AltClickDrag",
    },
    place: {
        heading: "CONTROLS.CommonPlace",
        reference: "CONTROLS.ClickDrag",
    },
    chain: {
        heading: "CONTROLS.CommonChain",
        content: "CONTROLS.ChainCtrlClick",
    },
    movePoint: {
        heading: "CONTROLS.CommonMovePoint",
        reference: "CONTROLS.ClickDrag",
    },
};

const buildItems = (...items: string[]): ToolclipConfigurationItem[] =>
    items.map((item) => commonControls[item as keyof typeof commonControls]);

export { buildItems };
