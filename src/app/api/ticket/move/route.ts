import { prisma } from "@/lib/prisma";
import { scheme } from "@/scheme/moveTicket";
import { NextRequest } from "next/server";
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const response = scheme.safeParse(body);
        if (!response.success) {
            console.log(body);
            console.log(response.error);
            return Response.json(
                {
                    error: {
                        message: "Fields are missing or passed Incorrectly.",
                    },
                },
                { status: 400 }
            );
        }
        const { boardId, boardColumnId, ticketId, position } = response.data;
        const ticketData = await prisma.boardTicket.update({
            where: { id: ticketId },
            data: {
                position,
                boardId,
                boardColumnId,
            },
        });
        return Response.json({ data: ticketData }, { status: 200 });
    } catch {
        return Response.json(
            { error: { message: "Something went wrong!" } },
            { status: 500 }
        );
    }
}
