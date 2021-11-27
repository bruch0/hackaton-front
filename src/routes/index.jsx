import { Switch, Route } from "react-router-dom";
export const Routes = () => {
    return(
        <Switch>
            <Route path="/" exact>
                <h1>Página home</h1>
            </Route>
        </Switch>
    )
}