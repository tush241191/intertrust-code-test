import { useEffect, useState } from "react";

interface Args {
    fetch: (args?: any) => any
    extractResults: (res: any) => Array<any>
}

function useFetch(args: Args) {
    const { fetch, extractResults } = args
}