import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";
export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const boardId = searchParams.get("boardId");
        const skip = searchParams.get("skip");
        const take = searchParams.get("take");
        if (!boardId || !skip || !take) {
            return Response.json(
                { error: { message: "Fields are missing" } },
                { status: 400 }
            );
        }
        const board = prisma.board.findUniqueOrThrow({
            where: { id: boardId },
        });
        const boardColumns = prisma.boardColumn.findMany({
            where: { boardId },
        });
        const boardTickets = prisma.boardTicket.findMany({
            where: { boardId },
            skip: +skip,
            take: +take,
        });
        const result = await Promise.all([board, boardColumns, boardTickets]);
        return Response.json({
            board: result[0],
            boardColumns: result[1],
            boardTickets: result[2],
        });
    } catch (e) {
        console.log(e);
        return Response.json(
            { error: { message: "Something went wrong!" } },
            { status: 500 }
        );
    }
}
