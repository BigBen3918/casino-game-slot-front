import React, { useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import { useSelector } from "react-redux";
import { NotificationManager } from "react-notifications";

const unityContext = new UnityContext({
    loaderUrl: "build/Build/build.loader.js",
    dataUrl: "build/Build/build.data",
    frameworkUrl: "build/Build/build.framework.js",
    codeUrl: "build/Build/build.wasm",
    streamingAssetsUrl: "build/StreamingAssets",
});

function Home() {
    const balance = useSelector((state) => state.sessionData.balance);
    const token = useSelector((state) => state.sessionData.token);

    const sessionData = useSelector((state) => state.sessionData);

    useEffect(() => {
        unityContext.on("GameController", (message) => {
            if (message === "Ready") {
                try {
                    console.log("token: ", token);
                    unityContext.send(
                        "MenuManager",
                        "RequestToken",
                        JSON.stringify({
                            token: token,
                            amount: balance,
                        })
                    );
                } catch (err) {
                    console.log("error", err);
                }
            } else if (message === "Control") {
                NotificationManager.error(
                    "Please check your balance",
                    "",
                    3000
                );
            } else console.log("Unity Ready Error");
        });
    }, [sessionData]);

    return (
        <div>
            <Unity
                unityContext={unityContext}
                matchWebGLToCanvasSize={true}
                style={{ height: "99vh", width: "100%" }}
            />
        </div>
    );
}

export default Home;
