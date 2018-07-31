// interface declaration from log4js-node.
interface Logger {
    level: string;
    log(...args: any[]): void;
    isLevelEnabled(level?: string): boolean;
    isTraceEnabled(): boolean;
    isDebugEnabled(): boolean;
    isInfoEnabled(): boolean;
    isWarnEnabled(): boolean;
    isErrorEnabled(): boolean;
    isFatalEnabled(): boolean;
    _log(level: string, data: any): void;
    addContext(key: string, value: any): void;
    removeContext(key: string): void;
    clearContext(): void;
    trace(message: any, ...args: any[]): void;
    debug(message: any, ...args: any[]): void;
    info(message: any, ...args: any[]): void;
    warn(message: any, ...args: any[]): void;
    error(message: any, ...args: any[]): void;
    fatal(message: any, ...args: any[]): void;
}

export declare const getLogger: (category?: string) => Logger;
