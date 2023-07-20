// ..
import kubernetes from './plugins/kubernetes';

async function main() {
    // ...
    const kubernetesEnv = useHotMemoize(module, () => createEnv('kubernetes'));
    // ...
    apiRouter.use('/kubernetes', await kubernetes(kubernetesEnv));
}

import techdocs from './plugins/techdocs';

// .... main should already be present.
async function main() {
    // ... other backend plugin envs
    const techdocsEnv = useHotMemoize(module, () => createEnv('techdocs'));

    // ... other backend plugin routes
    apiRouter.use('/techdocs', await techdocs(techdocsEnv));
    }