import { Typography } from "@mui/material"
import { Wrangler1, Wrangler2 } from "../images";
import React from "react"

const Body = () => (
    <React.Fragment>
        <Typography variant="h5">General Description</Typography>
        <p>
            Working as an assistant to the Penalty Tracker, the Wrangler helps to gather penalties called out by the Referees and communicates them to the Tracker as quickly as possible.
        </p>
        <p>
            Wranglers need to have the penalty codes memorised and be aware of their surroundings at all times. It is also beneficial to know hand signals used by Referees.
        </p>
        <p>
            Know when a skater has 6 penalties and communicate to the Referees if a 7th penalty is issued.
        </p>
        <Typography variant="h5">Equipment Needed</Typography>
        <ul>
            <li>Whiteboard (small)</li>
            <li>Marker</li>
            <li>Eraser (cotton glove/wristband)</li>
        </ul>
        <Typography variant="h5">Paperwork</Typography>
        <p>
            The Wrangler carries a small whiteboard and marker to write down the penalties as they are called out by the Referees. Before the game starts use coloured markers to divide the whiteboard into two halves with the colours of the teams across the top. During the game, only a black marker is needed.
        </p>
        <Wrangler1 />
        <p>
            When the jam begins, Wranglers will follow the Inside Pack Referees around the track, without hindering their progress and moving out of the way as needed. When a Referee calls a penalty (Colour, #, Penalty), write the number and code on the whiteboard and display it to the Penalty Tracker as quickly as possible. When writing, be sure that the penalty code is written below the skater number to prevent confusion.
        </p>
        <p>
            There will be some times when multiple penalties are called simultaneously. Try to get them written and displayed as fast as possible. Do not erase anything written until the Tracker gives an affirmative signal.
        </p>
        <p>
            If a Referee has not been understood, it is ok to ask them to repeat the call.
        </p>
        <Wrangler2 />
        <Typography variant="caption">
            <ol type="a">
                <li>Red skater #00 was called for Illegal Contact, and #14 was called for a Leg Block.</li>
                <li>Green Skater #1 performed an illegal procedure, and #524 cut-track.</li>
            </ol>
        </Typography>
        <Typography variant="h5">Procedures</Typography>
        <p>
            To erase the whiteboard, it is suggested to wear a cotton glove or wristband on the writing hand so corrections can be made quickly and the Wrangler does not have to worry about dropping anything.
        </p>
        <p>
            As the game begins, stand near the Inside Pack Referees. Move around the track with them, fielding their penalty calls and writing them on the whiteboard. Watch for any calls made by the Outside Pack Referees and relay these back to the Penalty Tracker.
        </p>
        <p>
            Make sure the whiteboard always faces the Tracker after the penalties have been written.
        </p>
        <p>
            Write the number of any skater who has 6 penalties in the upper right portion of their area and notify the Referees if a 7th penalty is made.
        </p>
        <p>
            Communication between the Penalty Wrangler, the Penalty Tracker and the Referees is very important. It is a good idea to discuss how the communication will work before the start of the game. It is also a good idea to discuss positioning with the Tracker before a game and decide where to be during the jams.
        </p>
        <p>
            The Penalty Wrangler is a good back up for communicating penalties, but the Penalty Tracker has the official record of penalties. However, it is a good idea to assist in checking the Inside Whiteboard and paperwork.
        </p>
        <p>
            The Penalty Wrangler is well placed to see the Box’s whiteboard and when a spare seat becomes available for blockers to be sent to the Box. Inform the Inside Pack Referees if this happens.
        </p>
        <Typography variant="h5">Penalties</Typography>
        <Typography variant="h6">Misconduct</Typography>
        <p style={{ fontWeight: 'bold' }}>Scenario C4.3.F</p>
        <p style={{ fontStyle: 'italic' }}>
            Profane, abusive, and obscene language is unsporting and degrading to the sport, but should not always be penalized. If said language was audible to the audience or via broadcast, [the skater] is penalized. If [the skater]’s profanity was directed at an Official, [the skater] is penalized. Otherwise, a few choice words directed at a teammate or opponent should result in a warning and be penalized if the behavior continues.
        </p>
        <p>
            The Penalty Wrangler will be able to issue this penalty themselves unless the Head Referee says otherwise, this will be clarified before the start of the game. If the penalty should be issued to the Captain, this should be reported to the Head Referee who will issue this.
        </p>
        <p>
            Issuing penalties must be done in accordance with Officiating Discretion. The correct verbal cue and hand signal must be used, these can be found in <a href="http://static.wftda.com/officiating/wftda-officiating-cues-codes-and-signals.pdf" target="_blank">WFTDA Officiating Cues, Codes And Signals</a>.
        </p>
        <Typography variant="h5">End of First Period</Typography>
        <p>
            Make sure the Penalty Tracker has documented what is on the whiteboard.
        </p>
        <p>
            Assist the Inside Whiteboard in transcribing penalties from the Tracker.
        </p>
    </React.Fragment>
)

export const PenaltyWranglerSection = {
    title: 'Penalty Wrangler',
    body: <Body />
};
