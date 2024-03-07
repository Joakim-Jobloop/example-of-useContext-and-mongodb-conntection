import { setup } from "@/lib/mongoDB";

import { NextResponse } from "next/server";

export const GET = async () => {
    const getData = await setup()

    if (getData) {

        return new NextResponse(console.log("error"))
    } else {
        return new NextResponse(console.log("ok"))

    }

}

