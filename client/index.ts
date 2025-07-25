import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../server';

const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
    }),
  ],
});

async function main(){
    const response = await trpc.createTodo.mutate({
        title:"hello",
        description:"yo",
        done:false
    })
    console.log(response)
}
main()