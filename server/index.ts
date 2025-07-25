import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { publicProcedure, router } from './trpc';
import{z} from 'zod'

const userInput = z.object({
    title:z.string(),
    description:z.string(),
    done:z.boolean()
})

const appRouter = router({
  createTodo:publicProcedure
  .input(userInput)
  .mutation(async(opts)=>{
    const title = opts.input.title
    const description = opts.input.description

    return {id: `${title} ${description}`}
  })
});
 
const server = createHTTPServer({
  router: appRouter,
});
 
server.listen(3000);
export type AppRouter = typeof appRouter;