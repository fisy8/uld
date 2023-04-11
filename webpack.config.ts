import path from 'path';
import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildPaths} from "./config/build/types/config";

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    }

    const PORT = env.port || 3000;
    const mode = env.mode || 'production';
    const isDev = mode === 'development';

    const config: webpack.Configuration = buildWebpackConfig({
        mode: mode,
        paths: paths,
        port: PORT,
        isDev,
    });

    return config
};
