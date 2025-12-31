// module.exports = function (api) {
//     api.cache(true);
//     return {
//         presets: [
//             ['babel-preset-expo', {jsxImportSource: 'nativewind'}]
//         ],
//         plugins: [
//             'nativewind/babel',
//             'react-native-reanimated/plugin' // must be last
//         ],
//     };
// };


module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo', 'nativewind/babel'],
        plugins: ['react-native-reanimated/plugin'],
    };
};