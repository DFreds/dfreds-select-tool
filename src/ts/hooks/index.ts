interface Listener {
    listen(): void;
}

const HooksSelectTool: Listener = {
    listen(): void {
        const listeners: Listener[] = [];

        for (const listener of listeners) {
            listener.listen();
        }
    },
};

export { HooksSelectTool };
export type { Listener };
