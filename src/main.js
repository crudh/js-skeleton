require.config({
    baseUrl: ".",
    config: {
        output: {
            outputDir: "compiled"
        }
    },
    paths: {
        "backbone": "components/backbone/backbone",
        "underscore": "components/lodash/dist/lodash",
        "react": "components/react/react",
        "jsx": "components/require-output/output"
    }
});

require(["react", "jsx!app/app"], function(React, AppContainer) {
    React.renderComponent(
        AppContainer({}),
        document.getElementById("main")
    );
});