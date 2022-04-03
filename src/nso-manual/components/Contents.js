import { Paper, Typography } from "@mui/material";

export const Contents = ({ pages }) => {
    return (
        <Paper sx={{ p: 2, m: 2, mt: 6 }}>
            <p>
                <Typography variant="h4" style={{ display: 'inline', verticalAlign: 'middle' }} sx={{ mr: 2 }}>Contents</Typography>
            </p>
            <p>
                These documents were written based on the rule set established by the WFTDA Rules Committee for the 2019 season. They contain the policies and procedures used by the Rainy City Roller Derby Oﬃciating Crew, and are not endorsed by the Women’s Flat Track Derby Association.
            </p>
            <ul>
                { pages?.map(({ title }) => (<li><a href={`/nso/${title.toLowerCase().replaceAll(' ', '-')}`}>{title}</a> (<a href={`/nso/pdfs/${title.toLowerCase().replaceAll(' ', '-')}.pdf`} target="_blank">pdf</a>)</li>))}
            </ul>
        </Paper>
    );
}
