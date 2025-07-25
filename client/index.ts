import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../server';

const trpc = createTRPCClient<AppRouter>({
    links: [
        httpBatchLink({
            url: 'http://localhost:3001',
        }),
    ],
});

async function main() {
    await trpc.createTodo.mutate({
        title: 'hello',
        description: 'yo',
        done: false,
    });
}
main();
