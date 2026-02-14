import React from 'react';
import { createRoot } from 'react-dom/client';
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from 'zmp-ui';
import { Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import HomePage from './pages/index';
import 'zmp-ui/zaui.css';
import './css/app.css';

const SnackbarProviderAny = SnackbarProvider as any;

const MyApp = () => {
    return (
        <RecoilRoot>
            <App>
                <SnackbarProviderAny>
                    <ZMPRouter>
                        <AnimationRoutes>
                            <Route path="/" element={<HomePage />} />
                        </AnimationRoutes>
                    </ZMPRouter>
                </SnackbarProviderAny>
            </App>
        </RecoilRoot>
    );
};

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<MyApp />);
