// MOST Web Framework 2.0 Codename Blueshift Copyright (c) 2017-2020, THEMOST LP All rights reserved
import {HttpContext} from "../context";
import {HttpViewEngine} from "../types";

export declare class MarkdownEngine extends HttpViewEngine {
    constructor(context: HttpContext);

    context: HttpContext;
    getContext(): HttpContext;
    render(filename: string, data: any, callback: (err?: Error, res?: string) => void)

}

export declare function createInstance(): MarkdownEngine;
