declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module 'general' {
    import React from "react";

    interface Props {
        children?: React.ReactNode;
    }

    export = Props;
}
