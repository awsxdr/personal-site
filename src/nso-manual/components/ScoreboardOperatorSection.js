import { Typography } from "@mui/material"
import React from "react"
import { Scoreboard1, Scoreboard2, Scoreboard3, Scoreboard4, Scoreboard5, Scoreboard6 } from "../images";

const Body = () => (
    <React.Fragment>
        <Typography variant="h5">General Description</Typography>
        <p>
            Utilises a computer and software to update the Scoreboard as the game is in progress. Works closely with the Scorekeepers and receives communications from the Jam Timer and Referees. Must be familiar with game policies and procedures and have a working knowledge of the scoreboard software.
        </p>
        <Typography variant="h5">Equipment Needed</Typography>
        <ul>
            <li>Computer</li>
            <li>Video Projector</li>
            <li>Screen</li>
        </ul>
        <Typography variant="h5">Paperwork</Typography>
        <p>
        The software recommended for use is the `Carolina Roller Derby Scoreboard'.
        </p>
        <p>
            Before the game, the Scoreboard should be set up with the rosters of both teams. This can be done on the Teams tab on the Scoreboard Operator Panel.
        </p>
        <Scoreboard1 />
        <p>
            Enter the name of the league and team in the boxes.
        </p>
        <Scoreboard2 />
        <p>
            The logos for the teams are stored in the folder [Scoreboard Folder]\html\images\teamlogo. If a new logo is needed for the team, use the Upload button.
        </p>
        <p>
            On the Control screen, select the logo from the drop-down menu underneath the team name. Add the skater details below. Captains can be selected through the drop-down menu at the end of the skater’s row.
        </p>
        <Scoreboard4 />
        <p>
            Repeat for the other team.
        </p>
        <p>
            Any sponsor banners that the host league would like displayed are stored in [Scoreboard Folder]\html\images\sponsor_banner.
        </p>
        <Scoreboard5 />
        <p>
            At the game, once the video projector and computer are started, the Operator will want to double-check the rosters of both teams as well as logo and sponsor graphics. It is up to the Operator to decide if they will us hotkeys or mouse (or combination of both) for updates during the game. It is recommended to use hotkeys. These can be set up as preferred by the Operator.
        </p>
        <p>
            For the game itself the Operator will use the Controls tab. Click Start New Game to select the teams for the game. The name to be displayed (League, Team or Full) can be selected in the Settings Tab.
        </p>
        <Scoreboard6 />
        <p>
            On the Control screen, update the following information during the game:
        </p>
        <p>
            <span style={{ fontWeight: 'bold' }}>START/STOP JAM</span> – There is a single short whistle to start the jam, and four short whistles to stop the jam (do not stop the jam until the 4th whistle has sounded).
        </p>
        <p>
            <span style={{ fontWeight: 'bold' }}>TIMEOUT</span> – There will be a verbal cue for timeouts as well as hand signals from the Jam Timer. Select Timeout when it is called, and then update as appropriate for Team Timeouts and Official Reviews.
        </p>
        <p>
            <span style={{ fontWeight: 'bold' }}>RETAINED</span> — If the Official Review is successful, click this button. Otherwise do nothing.
        </p>
        <p>
            <span style={{ fontWeight: 'bold' }}>ADD/REMOVE TRIP</span> – Use these buttons to make sure that the Jammer is being recorded as being on the correct Trip.
        </p>
        <p>
            <span style={{ fontWeight: 'bold' }}>POINTS -1/+1</span> – Each team has a set of these buttons. The Scorekeepers will advise how many points to add to scores. Points can also be subtracted if there are miscommunications. The score must updated on each scoring trip.
        </p>
        <p>
            <span style={{ fontWeight: 'bold' }}>LEAD, NO LEAD, AND JAMMER/PIVOT LISTS</span> – More experienced Operators can select who the Jammers/Pivots are from the lists and indicate who has earned Lead Jammer status.
        </p>
        <p>
            <span style={{ fontWeight: 'bold' }}>STAR PASS</span> — If the Jammers and Pivots have been selected from the drop-down menus, this button will change the names on the Scoreboard.
        </p>
        <p>
        For further information on the operation of the Scoreboard, read the Wiki found at <a href="https://github.com/rollerderby/scoreboard/" target="_blank">Carolina Roller Derby Scoreboard</a>.
        </p>
        <Typography variant="h5">Procedures</Typography>
        <p>
            Listen for the Jam Timer’s whistle and Referees to start and stop the jams. Watch the Jam Timer for jams being called off and for timeouts being called. During timeouts it is a good idea to check visually with the Jam Timer that the time is correct. Discuss how to show this before the start of the game.
        </p>
        <p>
            Many of the Scoreboard operations are automatic, such as when the Stop Jam button is clicked it will automatically start the Lineup clock. When the Timeout button is used, the Period clock will stop by itself.
        </p>
        <p>
            Use good communication with the Scorekeepers and assist them as needed. After each scoring trip listen for the score from the Scorekeepers.
        </p>
        <p>
            The Official Score is the one that is shown on the Scoreboard. Corrections to this can only be made during the lineup and the jam following the one where the error occurred. After this, the score displayed will be taken to be the correct one. It is extremely important to ensure that the Scorekeepers have given the correct number of points for each trip and jam. Confirm both the Jam Totals and Game Totals with both Scorekeepers at the end of every jam.
        </p>
        <p>
            If less than two minutes remain of the second period, the score must be corrected before the start of the following jam. The Head Referee may choose to take an Official Timeout at this point to give the opportunity to check this.
        </p>
        <p>
            If there are any discrepancies or miscommunications, notify the Outside Pack Referee as quickly as possible.
        </p>
        <p>
            The Referees or Jam Timer may request changes to the Official Time or Scores between jams or during time outs.
        </p>
        <Typography variant="h5">Penalties</Typography>
        <Typography variant="h6">Misconduct</Typography>
        <p style={{ fontWeight: 'bold' }}>Scenario C4.3.F</p>
        <p style={{ fontStyle: 'italic' }}>
            Profane, abusive, and obscene language is unsporting and degrading to the sport, but should not always be penalized. If said language was audible to the audience or via broadcast, [the skater] is penalized. If [the skater]’s profanity was directed at an Official, [the skater] is penalized. Otherwise, a few choice words directed at a teammate or opponent should result in a warning and be penalized if the behavior continues.
        </p>
        <p>
            The Scoreboard Operator will be able to issue this penalty themselves unless the Head Referee says otherwise, this will be clarified before the start of the game. If the penalty should be issued to the Captain, this should be reported to the Head Referee who will issue this.
        </p>
        <p>
            Issuing penalties must be done in accordance with Officiating Discretion. The correct verbal cue and hand signal must be used, these can be found in <a href="http://static.wftda.com/officiating/wftda-officiating-cues-codes-and-signals.pdf" target="_blank">WFTDA Officiating Cues, Codes And Signals</a>.
        </p>
        <Typography variant="h5">End of First Period</Typography>
        <p>
            Make sure that the Intermission clock has started.
        </p>
        <p>
            Double check with the Scorekeepers that the score is correct.
        </p>
        <p>
            Once the second period starts, make sure that the Jam Number has reset to 1.
        </p>        
    </React.Fragment>
)

export const ScoreboardOperatorSection = {
    title: 'Scoreboard Operator',
    body: <Body />
};
