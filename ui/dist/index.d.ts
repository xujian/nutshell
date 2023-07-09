import install from './install';
export * from './components';
declare const Nutshell: {
    version: string;
    install: typeof install;
};
export default Nutshell;
