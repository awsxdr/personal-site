import { Typography } from "@mui/material"
import React from "react"
import { Tracker1, Tracker2, Tracker3 } from "../images";

const Body = () => (
    <React.Fragment>
        <Typography variant="h5">General Description</Typography>
        <p>
            Standing on the inside of the track, Penalty Trackers will document any penalties called out by the Referees. Working closely with the Penalty Wrangler, it is important to have good communication without being distracted. A good Penalty Tracker will have some prior experience working games, and will have memorised the penalty codes.
        </p>
        <Typography variant="h5">Equipment Needed</Typography>
        <ul>
            <li>Clipboard</li>
            <li>Tracking Forms</li>
            <li>Pen/Pencil</li>
        </ul>
        <Typography variant="h5">Paperwork</Typography>
        <p>
            The paperwork is designed so that one person can cover the penalties for both teams. Penalties for the Home team will be indicated on the left side of the sheet, and the Away team on the right.
        </p>
        <p>
            After ﬁlling in name, date, and colour of each team, check to make sure the skater numbers have been pre-populated under both the ‘Skater #’ columns on both left and right sides. If not, enter this information manually, prior to the start of the game.
        </p>
        <Tracker1 />
        <p>
            <span style={{ fontWeight: 'bold' }}>SKATER #</span> — These columns should be pre-populated with the alphanumeric numbers of each skater participating in the game (including the alternates) from both teams.
        </p>
        <p>
            <span style={{ fontWeight: 'bold' }}>PENALTY / JAM #</span> — When a Referee calls a penalty on a skater, in the top row of boxes, indicate the appropriate penalty code from the list on the far right of the page. In the bottom row, write the jam number that the penalty occurred in. If a skater is issued a penalty between two jams, then the jam number of the jam in which the skater was participating should be used. Any Delay of Game penalties should be recorded for the upcoming jam, which is the jam that is being delayed to issue the penalty. If a Delay of Game penalty is not assessed prior to the start of a jam, the penalty should be assessed and recorded in the following jam.
        </p>
        <p>
            <span style={{ fontWeight: 'bold' }}>FO/EXP</span> – If a skater sits in the Penalty Box for seven penalties, that skater has Fouled Out. The abbreviation ‘FO’ is written in the top box and the jam it occurred is written in the bottom box.
        </p>
        <p>
            If a skater is expelled from a game by the Head Referee, the appropriate penalty code is entered into the top box, and the jam it occurred is written in the bottom box.
        </p>
        <p>
            <span style={{ fontWeight: 'bold' }}>TOTAL</span> – At the end of each period, tally the total penalty minutes for each skater and enter it in this box.
        </p>
        <Tracker2 />
        <Typography variant="caption">
            This shows that in the ﬁrst period, skater #19 was issued a total of 3 penalties; Blocking with the Head in the second jam, Use of Forearms in the 5th jam, and a Back Block in jam 7.
        </Typography>
        <p>
            <span style={{ fontWeight: 'bold' }}>NOTES</span> – The Penalty Tracker should know the current jam number and can use the list to circle/cross-out each number accordingly. Also, if a mistake is made, the Penalty Tracker can write notes to clarify what has happened to the Head NSO when the information is transcribed.
        </p>
        <p>
            <span style={{ fontWeight: 'bold' }}>NON-SKATER EXPULSIONS</span> — Penalties associated with the expulsion of a non-skating member of the bench staﬀ (which are not otherwise assigned to the team Captain) are noted here. The name of the bench staﬀ member should be written in the shaded block and penalties should be noted in the same way as the rest of the Penalty/Jam # section.
        </p>
        <Typography variant="h5">Procedures</Typography>
        <p>
            Trackers stand near to the Inside Whiteboard during the game. (They may move around the Inside Whiteboard as needed, but must not obstruct the progress of the Referees.) As play begins, they will listen and watch the Referees, while simultaneously keeping an eye on the Penalty Wrangler. As penalties are called, the Tracker must document them as quickly as possible and notify the Inside Whiteboard with ‘Colour, #, Penalty’. Check the Inside Whiteboard is up to date with the paperwork every 5-10 jams and during any timeouts.
        </p>
        <p>
            In the absence of a Wrangler, Trackers will follow the Inside Pack Referees around the track, without hindering their progress and moving out of the way as needed.
        </p>
        <p>
            With the Wrangler as an assistant, regularly check the whiteboard they hold up for penalties and let them know once they have been documented.
        </p>
        <p>
            Communication between the Penalty Tracker, the Penalty Wrangler and the Inside Whiteboard is very important. It is a good idea to discuss how the communication will work before the start of the game. It is also a good idea to discuss positioning with the Wrangler before a game and decide where to be during the jams.
        </p>
        <p>
            Find out from the Head Referee when they would like to know if a skater has 6 penalties, and if they want to know how many penalties a Jammer has at the start of each jam.
        </p>
        <p>
            The paperwork has a notes section to track the Jammers for the jam and any injured skaters. Inform the Referees if any injured skater is on track before they have sat out the required 3 jams have passed.        
        </p>
        <Typography variant="h5">Penalties</Typography>
        <Typography variant="h6">Misconduct</Typography>
        <p style={{ fontWeight: 'bold' }}>
            Scenario C4.3.F
            </p>
        <p style={{ fontStyle: 'italic' }}>
            Profane, abusive, and obscene language is unsporting and degrading to the sport, but should not always be penalized. If said language was audible to the audience or via broadcast, [the skater] is penalized. If [the skater]’s profanity was directed at an Oﬃcial, [the skater] is penalized. Otherwise, a few choice words directed at a teammate or opponent should result in a warning and be penalized if the behavior continues.
        </p>
        <p>
            The Penalty Tracker will be able to issue this penalty themselves unless the Head Referee says otherwise, this will be clariﬁed before the start of the game. If the penalty should be issued to the Captain, this should be reported to the Head Referee who will issue this.
        </p>
        <p>
            Issuing penalties must be done in accordance with Officiating Discretion. The correct verbal cue and hand signal must be used, these can be found in <a href="http://static.wftda.com/officiating/wftda-officiating-cues-codes-and-signals.pdf" target="_blank">WFTDA Officiating Cues, Codes And Signals</a>.
        </p>
        <Typography variant="h5">End of First Period</Typography>
        <p>
            Consult with the Inside Whiteboard, Penalty Box Timers and Lineup Trackers to ensure all the penalties are accurate.
        </p>
        <p>
            Accrued penalties need to be carried over to the sheet for the second period. Do this by shading in the appropriate blocks on the next sheet. Remember that with each new period, the Jam Number is reset to 1.
        </p>
        <Tracker3 />
        <Typography variant="caption">
            Penalties from the ﬁrst period are indicated on the second sheet by shading. Skater #111 was issued three additional penalties in the second period and Fouled Out in the 12th jam with a Low Block
        </Typography>
    </React.Fragment>
)

export const PenaltyTrackerSection = {
    title: 'Penalty Tracker',
    body: <Body />
};
