import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Typography } from '@mui/material';

export function TrainingChart({ data }) {
    if (!data || data.length === 0) {
        return <Typography variant="body2" color="text.secondary" align="center">No training data available to display chart.</Typography>;
    }

    return (
        // ResponsiveContainer makes the chart fill its parent container's dimensions.
        <ResponsiveContainer width="100%" height={300}>
            <LineChart
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                {/* CartesianGrid adds a grid background for readability */}
                <CartesianGrid strokeDasharray="3 3" />

                {/* XAxis represents the horizontal axis (dates) */}
                <XAxis dataKey="date" />
                
                {/* YAxis represents the vertical axis (duration) */}
                <YAxis label={{ value: 'Duration (mins)', angle: -90, position: 'insideLeft' }} />
                
                {/* Tooltip shows details when you hover over a data point */}
                <Tooltip />

                {/* Legend helps identify the lines in the chart */}
                <Legend />

                {/* Line defines the data points to be plotted */}
                <Line type="monotone" dataKey="duration" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    );
}