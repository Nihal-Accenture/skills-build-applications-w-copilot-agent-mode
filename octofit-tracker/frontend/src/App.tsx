import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ActivityLogPage from './pages/ActivityLogPage';
import TeamManagementPage from './pages/TeamManagementPage';
import LeaderboardPage from './pages/LeaderboardPage';
import WorkoutSuggestionsPage from './pages/WorkoutSuggestionsPage';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <h1>OctoFit Tracker</h1>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/activity-log" component={ActivityLogPage} />
                    <Route path="/team-management" component={TeamManagementPage} />
                    <Route path="/leaderboard" component={LeaderboardPage} />
                    <Route path="/workout-suggestions" component={WorkoutSuggestionsPage} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;