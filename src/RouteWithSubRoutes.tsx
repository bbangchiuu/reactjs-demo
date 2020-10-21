import { Route, Redirect } from "react-router-dom";

import React from "react";

import routes from './routes';
import { IChildrenReactNodeProps } from "./IChildrenReactNodeProps";
import Layout from './layout/RootLayout';
export default routes;

export const RouteWithSubRoutes = function (route: any) {

    console.log("route");

    if (route === undefined)
        return (
            <Route path="*" />
        )

    if (route.isPublic) {
        return (
            <>

                {route.routes.map((sub: any, subi: number) => {
                    console.log(sub.path);
                    return (
                        <Route
                            key={subi}
                            strict
                            exact
                            path={sub.path}
                            render={props => (
                                <sub.component  {...props} routes={sub.routes} />
                            )}
                        />
                    )
                })}
                <Route
                    exact
                    path={route.path}
                    render={props => (
                        <route.component {...props} routes={route.routes} />
                    )}
                />
            </>
        );
    } else {

        return (
            <PrivateRoute>
                <Layout
                    left={null}
                    top={null}
                    center={
                        <>
                            <Route
                                strict
                                exact
                                path={route.path}
                                render={props => (
                                    <route.component {...props} routes={route.routes} />
                                )}
                            />
                            {route.routes !== undefined && route.routes.map((sub: any, subi: number) => {
                                console.log(sub.path);
                                return (
                                    <Route
                                        key={subi}
                                        strict
                                        exact
                                        path={sub.path}
                                        render={props => (
                                            <sub.component  {...props} routes={sub.routes} />
                                        )}
                                    />
                                )
                            })}
                        </>
                    }
                />
            </PrivateRoute>
        );
    }


}

function PrivateRoute({ children, ...rest }: IChildrenReactNodeProps) {
    const isAuthenticated = true;//identity.isAuthorized;
    console.log(children);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAuthenticated ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );



}

