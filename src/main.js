require.config({
    paths: {
        "backbone": "components/backbone/backbone",
        "lodash": "components/lodash/dist/lodash",
        "react": "components/react/react"
    }
});

require(["react", "app/app"], function(React, AppContainer) {
    React.renderComponent(
        AppContainer({}),
        document.getElementById("main")
    );
});