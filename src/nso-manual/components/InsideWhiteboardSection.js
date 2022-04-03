import { Typography } from "@mui/material"
import React from "react"
import { Whiteboard1, Whiteboard2 } from "../images";

const Body = () => (
    <React.Fragment>
        <Typography variant="h5">General Description</Typography>
        <p>
            The Inside Whiteboard displays all of the penalties accumulated by both teams during the game. The person assigned to the board receives information from the Penalty Tracker and writes it accordingly. They should have memorised all of the penalty codes, have good communication skills, and work closely with the Tracker and Wrangler. They are also responsible for tracking timeouts and oﬃcial reviews used.
        </p>
        <Typography variant="h5">Equipment Needed</Typography>
        <ul>
            <li>Whiteboard</li>
            <li>Markers</li>
            <li>Eraser</li>
        </ul>
        <Typography variant="h5">Paperwork</Typography>
        <p>
            Although the Inside Whiteboard is not assigned paperwork, they will be writing on a large whiteboard in the centre of the track, and it requires some preparation.
        </p>
        <p>
            Prior to the start of the game, the Head NSO will provide a roster for both teams. Find the Captains of both teams and double check to make sure the roster is correct and no changes have been made. If there are changes, document them and notify the Head NSO.
        </p>
        <p>
            Next, the skater numbers must be written on the board, in alphanumeric order, with the team colour at the top. In the top-left corner, print ‘T T T O1 O2’. These letters represent timeouts and oﬃcial reviews.
        </p>
        <Whiteboard1 />
        <Typography variant="caption">
            Skater numbers are listed alphanumerically
        </Typography>
        <Typography variant="h5">Procedures</Typography>
        <p>
        At the start of the game, stand oﬀ to the side of the board and only block the view when a penalty needs to be written.
        </p>
        <p>
            During the game, listen to the Penalty Tracker who will communicate the colour of the team, the number of the skater, and the penalty (Colour, #, Penalty); always in that order. Write the penalty codes in the area next to the skater number i.e. the Penalty Tracker calls out ‘Red, One-Three-One-Three, Back Block’, write a ‘B’ next to #1313 on the Red side of the board. Conﬁrm that the penalty has been received.
        </p>
        <p>
            It is a good idea to check the Inside Whiteboard with the Penalty Tracker every 5-10 jams and during any timeouts.
        </p>
        <p>
            As each skater sits in the Penalty Box, place a small dot underneath the penalty code to denote that the skater has actually gone to the Box and is serving that penalty. Announce when a skater is going to the Box and that they are sitting.
        </p>
        <p>
            Both teams get 3 Timeouts per game, and 1 Oﬃcial Review for each period. When one of these is used, cross through the appropriate letter from that team’s board. If the Oﬃcial Review is successful the team may retain the review for a second use, make a note that it has been used once. If a team calls for a timeout but do not have any remaining, but do have an Oﬃcial Review for that period, it will be assumed that they are using the Review, conﬁrm this with the Head Referee and Jam Timer. Communicate with the Head Referee how many timeouts or oﬃcial reviews are left for each team.
        </p>
        <Whiteboard2 />
        <p>
            Prior to each jam, the Jammer Referees may want to know how many penalties each Jammer has accumulated. Keep an eye on the lineup and assist the Referees.
        </p>
        <p>
            As the game progresses, make a mental note of skaters who are approaching 7 penalties. If a skater should earn 6 penalties, notify the Wrangler and Tracker.
        </p>
        <p>
            If a skater has been given 5/6/7 penalties, conﬁrm with the Penalty Tracker that the information on the Inside Whiteboard is correct. Communicate to the Box Manager this information with hand signals as the skater approaches the box to ensure that this is also recorded correctly on the box paperwork.
        </p>
        <p>
            Communication between the Inside Whiteboard, the Penalty Tracker and the Penalty Box, as well as the Head Referee is very important. It is a good idea to discuss how the communication will work before the start of the game.
        </p>
        <p>
            Communicate with the Penalty Box if there are extra turns for any skater. This leaves the Tracker and the Wrangler free to stay with the Referees.
        </p>
        <Typography variant="h5">Penalties</Typography>
        <Typography variant="h6">Misconduct</Typography>
        <p style={{ fontWeight: 'bold' }}>
            Scenario C4.3.F
        </p>
        <p style={{ fontStyle: 'italic' }}>
            Profane, abusive, and obscene language is unsporting and degrading to the sport, but should not always be penalized. If said language was audible to the audience or via broadcast, [the skater] is penalized. If [the skater]’s profanity was directed at an Official, [the skater] is penalized. Otherwise, a few choice words directed at a teammate or opponent should result in a warning and be penalized if the behavior continues.
        </p>
        <p>
            The Inside Whiteboard will be able to issue these penalties themselves unless the Head Referee says otherwise, this will be clarified before the start of the game. If the penalty should be issued to the Captain, this should be reported to the Head Referee who will issue this.
        </p>
        <p>
            Issuing penalties must be done in accordance with Officiating Discretion. The correct verbal cue and hand signal must be used, these can be found in <a href="http://static.wftda.com/officiating/wftda-officiating-cues-codes-and-signals.pdf" target="_blank">WFTDA Officiating Cues, Codes And Signals</a>.
        </p>
    </React.Fragment>
)

export const InsideWhiteboardSection = {
    title: 'Inside Whiteboard',
    body: <Body />
};
