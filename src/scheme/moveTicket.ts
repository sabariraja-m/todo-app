import { z } from "zod";
export const scheme = z.object({
    ticketId: z.string(),
    position: z.number(),
    boardId: z.string(),
    boardColumnId: z.string(),
});
