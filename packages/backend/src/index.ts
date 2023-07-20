// ..
import kubernetes from './plugins/kubernetes';

async function main() {
    // ...
    const kubernetesEnv = useHotMemoize(module, () => createEnv('kubernetes'));
    // ...
    apiRouter.use('/kubernetes', await kubernetes(kubernetesEnv));