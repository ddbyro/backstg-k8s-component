import { EntityKubernetesContent } from '@backstage/plugin-kubernetes';

// You can add the tab to any number of pages, the service page is shown as an
// example here
const serviceEntityPage = (
    <EntityLayout>
        {/* other tabs... */}
        <EntityLayout.Route path="/kubernetes" title="Kubernetes">
            <EntityKubernetesContent refreshIntervalMs={30000} />
        </EntityLayout.Route>
    </EntityLayout>
);