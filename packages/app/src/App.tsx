import {
    DefaultTechDocsHome,
    TechDocsIndexPage,
    TechDocsReaderPage,
} from '@backstage/plugin-techdocs';

const AppRoutes = () => {
    <FlatRoutes>
        {/* ... other plugin routes */}
        <Route path="/docs" element={<TechDocsIndexPage />}>
            <DefaultTechDocsHome />
        </Route>
        <Route
            path="/docs/:namespace/:kind/:name/*"
            element={<TechDocsReaderPage />}
        />
    </FlatRoutes>;
};